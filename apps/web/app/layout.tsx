import '../../../packages/ui/css/main.css'
import { Silkscreen } from '@next/font/google'

export const fontSS = Silkscreen({
  weight: '400',
  variable: '--font-silkscreen'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSS.variable} font-ss`}>
      <body>{children}</body>
    </html>
  )
}
