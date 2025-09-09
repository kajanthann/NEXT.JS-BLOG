import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
            <Image
            width={180}
            alt='logo'
            className='w-[130px] sm:w-auto'
            src={assets.logo}
            />
        </Link>
        

        {/* Button */}
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-1 sm:px-6 border
         border-black shadow-[-3px_4px_0px_#000000]'>
          Get Started
          <Image
            src={assets.arrow}
            alt='arrow'
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  )
}

export default Header
