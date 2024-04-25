'use client'
import Link from "next/link"
import { logo } from "../../../utils/Logo"
export const LogoInfotolima = () => {
  return (
    <div>
      <Link href={'/'}>
        <img className="w-60 h-30 sm:w-100 sm:h-30 lg:h-30 lg:w-100" src={logo} alt='Infotolima logo' />
      </Link>
    </div>
  )
}
