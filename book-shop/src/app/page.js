import Image from "next/image";
import BackgroundImg from '@/../public/home/book_bc.jpeg'
import Link from "next/link";
import { SparklesIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-sm"
        src={BackgroundImg}
        alt="Background Image"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />

      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5 h-1/4  absolute">
        <div className="flex text-5xl text-purple-800 mb-2 pb-2 z-10">
          <SparklesIcon className="w-12 h-12"/>
          <p>পুঁথিনিবাস</p>
        </div>
        <Link
          className="bg-purple-700 text-white rounded-sm p-2"
          href="/store">
          প্রবেশ করুন
        </Link>
      </div>
    </div>
  );
}
