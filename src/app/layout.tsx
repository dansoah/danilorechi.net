import './globals.css'
export const metadata = {
  title: 'Danilo Rechi - I solve problems using computers ',
  description: 'Danilo Rechi - Computer engineer, solutions architect, developer & barbecue master',
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
