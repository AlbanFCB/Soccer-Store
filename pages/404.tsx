import React from 'react'
import Link from "next/link";
import notFoundImg from "../public/assets/images/notFoundImg.jpg"
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-2">
        <Image 
        src={notFoundImg}
        alt=""
        width={600}
        height={600}
        className="w-1/3 h-[550px] object-cover"
        />
        <Link href="/">
            <button className="mt-2 text-md hover:text-[#004f9a] hover:underline underline-offset-2">
                Back to home
            </button>
        </Link>
    </div>
  )
}

export default Custom404