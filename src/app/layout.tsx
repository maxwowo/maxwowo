import '@/app/globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FunctionComponent, PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://maxwowo.com'),
  title: '¯\\_(ツ)_/¯',
  description:
    'Software Engineer at Atlassian. My specialties include googling error messages and modifying code copied from Stack Overflow. Little known fact: also dope on the mic.',
  openGraph: {
    title: '¯\\_(ツ)_/¯',
    description:
      'Software Engineer at Atlassian. My specialties include googling error messages and modifying code copied from Stack Overflow. Little known fact: also dope on the mic.',
    url: 'https://maxwowo.com'
  }
}

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
