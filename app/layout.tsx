import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJapanese = Noto_Sans_JP({
  weight: '700',
  subsets: ['latin'],
})

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
    <html data-theme="retro" lang="ja" className={notoSansJapanese.className}>
      <body>
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  )
}

