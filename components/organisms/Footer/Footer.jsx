'use client'

import Link from "next/link"
import { logo } from "../../../utils/Logo"
export const Footer = () => {
    return (


        <footer className="bg-white rounded-lg shadow ">
            <div className="w-full h-full  mx-auto p-4 md:py-8">
                <div className="sm:flex xl:mx-15 md:mx-10 sm:items-center sm:justify-between">
                    <Link href={'/Home'} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-20" alt="Infotoloma Logo" />

                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">PPDeveloper™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}