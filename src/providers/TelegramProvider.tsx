import { useEffect, type ReactNode } from 'react'
// Bundled telegram-web-apps.js — CDN bilan ikki marta yuklamang
import '@twa-dev/sdk'

export function TelegramProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const wa = window.Telegram?.WebApp
    if (typeof wa?.ready === 'function') wa.ready()
    if (typeof wa?.expand === 'function') wa.expand()
  }, [])

  return <>{children}</>
}
