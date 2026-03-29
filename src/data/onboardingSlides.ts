export type OnboardingSlide = {
  image: string
  title: string
  body: string
}

/** Add PNGs under `public/brand/` — missing files show a placeholder until you upload. */
export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    image: '/brand/shop-rafiki-1.png',
    title: 'Choose Products',
    body:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: '/brand/consulting-pana-1.png',
    title: 'Make Payment',
    body:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: '/brand/bag-rafiki-1.png',
    title: 'Get Your Order',
    body:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
]

export const ONBOARDING_DONE_KEY = 'stylish_onboarding_done'
