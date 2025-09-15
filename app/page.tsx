import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex justify-center">
      <Image
        src="/mushroom.png"
        alt="きのこ"
        width={100}
        height={100}
      />
      <h1 className="text-2xl mb-5">きのこの山岳</h1>
    </div>
  );
}