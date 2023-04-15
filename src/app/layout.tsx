import './globals.css'
export const metadata = {
  title: 'Danilo Rechi - Eu faço coisas com computadores ',
  description: 'Danilo Rechi - Engenheiro de computação, arquiteto de soluções, desenvolvedor e mestre churrasqueiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
