import { useCallback, useState } from 'react'
import { OnboardingScreen } from './components/OnboardingScreen'
import { SplashScreen } from './components/SplashScreen'
import { WelcomeHero } from './components/WelcomeHero'
import { ONBOARDING_DONE_KEY } from './data/onboardingSlides'
import { WELCOME_DONE_KEY } from './data/welcome'
import { TelegramProvider } from './providers/TelegramProvider'

type Phase = 'splash' | 'onboarding' | 'welcome' | 'app'

function skipOnboarding() {
  try {
    return localStorage.getItem(ONBOARDING_DONE_KEY) === '1'
  } catch {
    return false
  }
}

function skipWelcome() {
  try {
    return localStorage.getItem(WELCOME_DONE_KEY) === '1'
  } catch {
    return false
  }
}

function goAfterSplash(): Phase {
  if (!skipOnboarding()) return 'onboarding'
  if (!skipWelcome()) return 'welcome'
  return 'app'
}

export function App() {
  const [phase, setPhase] = useState<Phase>('splash')

  const onSplashDone = useCallback(() => {
    setPhase(goAfterSplash())
  }, [])

  const onOnboardingDone = useCallback(() => {
    setPhase(skipWelcome() ? 'app' : 'welcome')
  }, [])

  const onWelcomeDone = useCallback(() => {
    setPhase('app')
  }, [])

  return (
    <TelegramProvider>
      {phase === 'splash' ? <SplashScreen onDone={onSplashDone} /> : null}
      {phase === 'onboarding' ? (
        <OnboardingScreen onFinish={onOnboardingDone} />
      ) : null}
      {phase === 'welcome' ? <WelcomeHero onContinue={onWelcomeDone} /> : null}
      {phase === 'app' ? <main /> : null}
    </TelegramProvider>
  )
}
