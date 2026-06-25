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
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.01 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.45 1.72 6.39L3.12 29l6.79-1.78a12.73 12.73 0 0 0 6.1 1.55h.01c7.04 0 12.77-5.73 12.77-12.78S23.06 3.2 16.01 3.2Zm0 23.42h-.01c-1.92 0-3.8-.52-5.45-1.5l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.58 10.58 0 0 1-1.62-5.63c0-5.88 4.79-10.66 10.68-10.66 2.85 0 5.53 1.11 7.54 3.13a10.6 10.6 0 0 1 3.12 7.54c0 5.88-4.79 10.66-10.67 10.66Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.27 3.46 5.49 4.85.77.33 1.37.53 1.83.68.77.25 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
