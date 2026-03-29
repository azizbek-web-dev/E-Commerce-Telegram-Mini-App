import { TelegramProvider } from './providers/TelegramProvider'

export function App() {
  return (
    <TelegramProvider>
      <main />
    </TelegramProvider>
  )
}
