const nodemailer = require('nodemailer');

const requiredFields = [
  'companyName',
  'contactPerson',
  'email',
  'phone',
  'country',
  'category',
  'productDetails',
  'quantity',
];

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(payload),
  };
}

exports.handler = async function handler(event) {
  const requestId = event.headers?.['x-nf-request-id'] || event.headers?.['x-request-id'];
  console.log('RFQ request received', {
    requestId,
    method: event.httpMethod,
    path: event.path,
  });

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    };
  }

  if (event.httpMethod !== 'POST') {
    console.warn('RFQ invalid method', { requestId, method: event.httpMethod });
    return jsonResponse(405, { error: 'Method Not Allowed' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (error) {
    console.error('RFQ invalid JSON', { requestId, error: error?.message });
    return jsonResponse(400, { error: 'Invalid JSON payload' });
  }

  const missing = requiredFields.filter((field) => !data[field]);
  if (missing.length > 0) {
    console.warn('RFQ missing fields', { requestId, missing });
    return jsonResponse(400, { error: 'Missing required fields', fields: missing });
  }

  const {
    companyName,
    contactPerson,
    email,
    phone,
    country,
    category,
    productDetails,
    quantity,
    packaging,
    additionalInfo,
    captchaToken,
  } = data;

  if (!captchaToken) {
    console.warn('RFQ captcha missing', { requestId });
    return jsonResponse(400, { error: 'Captcha verification required' });
  }

  const captchaSecret = process.env.HCAPTCHA_SECRET;
  if (!captchaSecret) {
    console.error('RFQ captcha secret missing', { requestId });
    return jsonResponse(500, { error: 'Captcha secret is not configured' });
  }

  try {
    const verifyParams = new URLSearchParams();
    verifyParams.append('secret', captchaSecret);
    verifyParams.append('response', captchaToken);

    const verifyResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verifyParams.toString(),
    });
    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      console.warn('RFQ captcha failed', { requestId, errors: verifyData['error-codes'] });
      return jsonResponse(400, { error: 'Captcha verification failed' });
    }
  } catch (error) {
    console.error('RFQ captcha request failed', { requestId, error: error?.message });
    return jsonResponse(500, { error: 'Captcha verification failed' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO || 'info@freshrootspinksalt.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('RFQ SMTP config missing', { requestId });
    return jsonResponse(500, { error: 'SMTP credentials are not configured' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New RFQ - ${companyName} (${contactPerson})`;
  const textBody = [
    `Company: ${companyName}`,
    `Contact: ${contactPerson}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Country: ${country}`,
    `Category: ${category}`,
    `Quantity: ${quantity}`,
    `Packaging: ${packaging || 'Not specified'}`,
    '',
    'Product Details:',
    productDetails,
    '',
    'Additional Info:',
    additionalInfo || 'None',
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `Fresh Roots RFQ <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text: textBody,
    });

    return jsonResponse(200, { ok: true });
  } catch (error) {
    console.error('RFQ email failed', { requestId, error: error?.message });
    return jsonResponse(500, { error: 'Failed to send email' });
  }
};
