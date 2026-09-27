export interface PaintEffect {
  id: string
  name: string
  description: string
  image: string
}

const effects: Array<PaintEffect> = [
  {
    id: 'chrome',
    name: 'Mirror Chrome',
    description: 'A hyper-reflective, mirror-like finish that turns heads in any light.',
    image: '/img/effect-chrome.jpg',
  },
  {
    id: 'matte',
    name: 'Matte Black',
    description: 'A deep, glare-free matte look for a stealthy, premium presence.',
    image: '/img/effect-matte.jpg',
  },
  {
    id: 'candy',
    name: 'Candy Fade',
    description: 'Rich, translucent candy tones that shift from purple to blue in the sun.',
    image: '/img/effect-candy.jpg',
  },
  {
    id: 'chameleon',
    name: 'Chameleon Shift',
    description: 'Color-shifting paint that transitions from green to purple to gold as you move.',
    image: '/img/effect-chameleon.jpg',
  },
]

export default effects
