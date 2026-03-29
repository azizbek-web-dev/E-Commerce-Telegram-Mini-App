import { useCallback, useState } from 'react'
import { OnboardingScreen } from './components/OnboardingScreen'
import { SplashScreen } from './components/SplashScreen'
import { ONBOARDING_DONE_KEY } from './data/onboardingSlides'
import { TelegramProvider } from './providers/TelegramProvider'

type Phase = 'splash' | 'onboarding' | 'app'

function shouldSkipOnboarding() {
  try {
    return localStorage.getItem(ONBOARDING_DONE_KEY) === '1'
  } catch {
    return false
  }
}

export function App() {
  const [phase, setPhase] = useState<Phase>('splash')

  const onSplashDone = useCallback(() => {
    setPhase(shouldSkipOnboarding() ? 'app' : 'onboarding')
  }, [])

  const onOnboardingDone = useCallback(() => {
    setPhase('app')
  }, [])

  return (
    <TelegramProvider>
      {phase === 'splash' ? <SplashScreen onDone={onSplashDone} /> : null}
      {phase === 'onboarding' ? (
        <OnboardingScreen onFinish={onOnboardingDone} />
      ) : null}
      {phase === 'app' ? <main /> : null}
    </TelegramProvider>
  )
}
