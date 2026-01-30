import nodemailer from 'nodemailer';

export const config = {
  runtime: 'nodejs18.x',
};

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

function jsonResponse(res, status, payload) {
  res.status(status).json(payload);
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  }[char]));
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return jsonResponse(res, 405, { error: 'Method Not Allowed' });
  }

  const data = req.body || {};
  const missing = requiredFields.filter((field) => !data[field]);
  if (missing.length > 0) {
    return jsonResponse(res, 400, { error: 'Missing required fields', fields: missing });
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
    return jsonResponse(res, 400, { error: 'Captcha verification required' });
  }

  const captchaSecret = process.env.HCAPTCHA_SECRET;
  if (!captchaSecret) {
    return jsonResponse(res, 500, { error: 'Captcha secret is not configured' });
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
      return jsonResponse(res, 400, { error: 'Captcha verification failed' });
    }
  } catch (error) {
    console.error('RFQ captcha verification error:', error);
    return jsonResponse(res, 500, { error: 'Captcha verification failed' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO || 'info@freshrootspinksalt.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    return jsonResponse(res, 500, { error: 'SMTP credentials are not configured' });
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

  const subject = `Website RFQ - ${companyName} (${contactPerson})`;
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

  const htmlBody = `
    <div style="font-family: Arial, Helvetica, sans-serif; background:#f7f5f2; padding:24px;">
      <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #eee3e0; border-radius:16px; overflow:hidden;">
        <div style="background:linear-gradient(90deg,#3D9B93,#348780); padding:18px 24px; color:#fff;">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="https://res.cloudinary.com/digdbqcct/image/upload/v1769540544/logo_stspcq.png" alt="Fresh Roots Pink Salt" style="height:36px; width:auto; display:block;" />
            <div>
              <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase;">Fresh Roots Pink Salt</div>
              <div style="font-size:20px; font-weight:700; margin-top:4px;">Website RFQ Submission</div>
            </div>
          </div>
        </div>
        <div style="padding:20px 24px;">
          <div style="margin-bottom:18px;">
            <span style="display:inline-block; background:#E88B7F1A; color:#E88B7F; padding:6px 12px; border-radius:999px; font-size:12px; font-weight:600;">
              Category: ${escapeHtml(category)}
            </span>
          </div>
          <table style="width:100%; border-collapse:collapse; font-size:14px; color:#3b3b3b;">
            <tr><td style="padding:6px 0; width:40%; color:#8a8a8a;">Company</td><td style="padding:6px 0; font-weight:600;">${escapeHtml(companyName)}</td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Contact</td><td style="padding:6px 0; font-weight:600;">${escapeHtml(contactPerson)}</td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#3D9B93; text-decoration:none;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Country</td><td style="padding:6px 0;">${escapeHtml(country)}</td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Quantity</td><td style="padding:6px 0;">${escapeHtml(quantity)}</td></tr>
            <tr><td style="padding:6px 0; color:#8a8a8a;">Packaging</td><td style="padding:6px 0;">${escapeHtml(packaging || 'Not specified')}</td></tr>
          </table>
          <div style="margin:18px 0 6px; font-weight:700; color:#333;">Product Details</div>
          <div style="background:#faf7f6; border:1px solid #f0e6e2; padding:12px; border-radius:10px; white-space:pre-wrap;">${escapeHtml(productDetails)}</div>
          <div style="margin:18px 0 6px; font-weight:700; color:#333;">Additional Info</div>
          <div style="background:#faf7f6; border:1px solid #f0e6e2; padding:12px; border-radius:10px; white-space:pre-wrap;">${escapeHtml(additionalInfo || 'None')}</div>
        </div>
        <div style="border-top:1px solid #f0e6e2; padding:14px 24px; font-size:12px; color:#8a8a8a;">
          This inquiry was submitted via the Fresh Roots Pink Salt website RFQ form. Reply directly to contact the sender.
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `Fresh Roots Website RFQ <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return jsonResponse(res, 200, { ok: true });
  } catch (error) {
    console.error('RFQ email send error:', error);
    return jsonResponse(res, 500, { error: 'Failed to send email' });
  }
}
