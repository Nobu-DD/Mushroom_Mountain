import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between h-18">
      <div className="flex items-center ml-5">
        <Image
          src="/mushroom.png"
          alt="きのこ"
          width={50}
          height={50}
        />
        <h1 className="text-3xl">きのこの山岳</h1>
      </div>
      <nav className="flex items-center">
        <Link
          href="/"
          className="mr-5"
        >
          トップ
        </Link>
        <Link
          href="/calendar"
          className="mr-5"
        >
          カレンダー
        </Link>
      </nav>
    </header>
  )
}