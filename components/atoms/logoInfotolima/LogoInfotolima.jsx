'use client'
import Link from "next/link"
export const LogoInfotolima = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Link href={'/'}>
        <img className="xl:w-48 w-32 h-30 sm:w-100 sm:h-30 lg:h-30 lg:w-100" src='/images/logoinfo.png' alt='Infotolima logo' />
      </Link>
      <p className="text-gray-700">SIN CENSURA</p>

    </div>
  )
}
