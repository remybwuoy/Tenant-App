import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tenant Pulse App',
  description: 'Comprehensive property management platform with tenant tracking, billing, maintenance, and AI assistance for modern property managers.',
  icons: {
    icon: [
      { url: "/images/icons/Tenant-Logo.png", sizes: "32x32" },
      { url: "/images/icons/Tenant-Logo.png", sizes: "192x192" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
