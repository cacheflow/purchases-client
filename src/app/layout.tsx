import './globals.scss'
import openSansPro from './fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSansPro.className}`}>
      <body>{children}</body>
    </html>
  )
}
