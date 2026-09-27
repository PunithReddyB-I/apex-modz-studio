import { whatsappLink } from '@/data/business'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Apex Modz Studio, I'd like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.646 4.47 1.767 6.31L4 29l7.86-1.723A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.66 1.023 1.036-4.53-.232-.372A9.7 9.7 0 0 1 5.25 15c0-5.938 4.816-10.75 10.754-10.75S26.75 9.062 26.75 15 20.938 24.75 16.004 24.75Zm5.61-7.98c-.307-.154-1.82-.898-2.102-1.001-.282-.103-.487-.154-.692.154-.205.307-.794 1.001-.974 1.207-.18.205-.36.23-.667.077-.307-.154-1.296-.478-2.468-1.523-.912-.813-1.528-1.817-1.707-2.124-.18-.307-.02-.473.134-.626.137-.137.307-.36.46-.54.154-.18.205-.308.307-.513.103-.205.051-.385-.026-.539-.077-.154-.692-1.668-.948-2.285-.25-.6-.505-.519-.692-.529-.18-.009-.385-.011-.59-.011-.205 0-.539.077-.821.385-.282.308-1.077 1.052-1.077 2.567 0 1.515 1.103 2.98 1.256 3.186.154.205 2.17 3.313 5.257 4.646.735.317 1.308.507 1.755.649.737.234 1.408.201 1.938.122.591-.088 1.82-.744 2.077-1.463.256-.718.256-1.334.18-1.463-.077-.129-.282-.205-.59-.36Z" />
      </svg>
    </a>
  )
}
