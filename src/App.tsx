import { useCallback, useState } from 'react'
import { SplashScreen } from './components/SplashScreen'
import { TelegramProvider } from './providers/TelegramProvider'

export function App() {
  const [showSplash, setShowSplash] = useState(true)
  const hideSplash = useCallback(() => setShowSplash(false), [])

  return (
    <TelegramProvider>
      {showSplash ? <SplashScreen onDone={hideSplash} /> : null}
      {!showSplash ? <main /> : null}
    </TelegramProvider>
  )
}
