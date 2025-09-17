import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex items-center">
        <Image
          src="/mushroom.png"
          alt="きのこ"
          width={50}
          height={50}
        />
        <h1>きのこの山岳</h1>
      </div>
      <nav>
        <Link
          href="/"
          className=""
        >
          トップ
        </Link>
        <Link
          href="/calendar"
          className=""
        >
          カレンダー
        </Link>
      </nav>
    </header>
  )
}