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
    image: '/brand/shop-rafiki-2.png',
    title: 'Track orders',
    body:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    image: '/brand/shop-rafiki-3.png',
    title: 'Secure checkout',
    body:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
]

export const ONBOARDING_DONE_KEY = 'stylish_onboarding_done'
