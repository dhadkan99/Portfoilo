import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dhadkan Portfolio',
  description: 'A personal portfolio created by Dhadkan KC showcasing web development skills.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  )
}
