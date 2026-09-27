export interface Service {
  id: string
  name: string
  description: string
  icon: 'spray' | 'wrench' | 'car' | 'shield' | 'sparkles' | 'settings'
}

const services: Array<Service> = [
  {
    id: 'custom-painting',
    name: 'Custom Paint Jobs',
    description:
      'Full-body custom paint work in our climate-controlled paint booth — solid colors, candy tones, matte finishes, chameleon effects and more, sprayed by experienced painters.',
    icon: 'spray',
  },
  {
    id: 'accessories',
    name: 'Car Accessories & Installation',
    description:
      'Body kits, spoilers, alloy wheels, lighting upgrades, infotainment and audio systems — sourced and fitted with precision using our advanced tool line-up.',
    icon: 'car',
  },
  {
    id: 'paint-booth',
    name: 'Professional Paint Booth',
    description:
      'A dust-free, temperature and airflow controlled booth that gives every job a factory-grade, orange-peel-free finish — no matter the size of the vehicle.',
    icon: 'settings',
  },
  {
    id: 'wraps-protection',
    name: 'Wraps & Paint Protection',
    description:
      'Vinyl wraps, ceramic coatings and paint protection film to keep your custom finish looking flawless and shielded from chips, scratches and UV fade.',
    icon: 'shield',
  },
  {
    id: 'dent-bodywork',
    name: 'Dent Removal & Bodywork',
    description:
      'Panel beating, rust treatment and precision bodywork to get every surface perfectly smooth and ready before it ever reaches the paint booth.',
    icon: 'wrench',
  },
  {
    id: 'restyling',
    name: 'Full Restyling Packages',
    description:
      'Combine paint, accessories and detailing into one complete restyle — we plan the whole look with you from first consult to final reveal.',
    icon: 'sparkles',
  },
]

export default services
