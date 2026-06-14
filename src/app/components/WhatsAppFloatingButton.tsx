import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { contact } from '../../data/contact';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp at ${contact.displayPhoneNumber}`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-stone-900/20 transition-transform hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <WhatsAppIcon fontSize="medium" />
    </a>
  );
}
