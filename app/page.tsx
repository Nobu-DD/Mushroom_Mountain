// import Image from 'next/image'
import Link from 'next/link'

export default function TopPage() {
  return (
    <div className="flex justify-center">
      <h1 className="text-2xl mb-5 ">きのこの山岳</h1>
      <div>
        <Link href="/calendar" className="btn" >カレンダーページへ</Link>
      </div>
    </div>
  )
}