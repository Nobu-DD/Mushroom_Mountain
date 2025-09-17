import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'きのこの山岳',
  description: 'きのこ育成型学習習慣アプリです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="retro" lang="ja">
      <Header />
      <body>{children}</body>
    </html>
  )
}

