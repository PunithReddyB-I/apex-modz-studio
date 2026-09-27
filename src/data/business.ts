export const business = {
  name: 'Apex Modz Studio',
  tagline: 'Custom Car Accessories & Paint Studio',
  phoneDisplay: '+91 89515 17219',
  whatsappNumber: '918951517219',
  email: 'hello@apexmodzstudio.com',
  address: 'Apex Modz Studio, ITPL Main Road, Hoodi, Bengaluru - 48',
  hours: 'Mon – Sat: 9:30 AM – 7:30 PM',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
}
