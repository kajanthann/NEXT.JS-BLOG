import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Image
          width={180}
          alt='logo'
          className='w-[130px] sm:w-auto'
          src={assets.logo}
        />

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
      <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
            <p className='mt-10 max-w-[740px] text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur, quaerat
                 beatae animi numquam distinctio nulla quae? Ducimus temporibus quos totam 
                adipisci facere accusantium obcaecati libero consequatur quae.</p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-3px_4px_0px_#000000]' action="">
                <input type="email" placeholder='enter your email' className='pl-4 outline-none' />
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-900 active:text-white'>Subscribe</button>
            </form>
      </div>
    </div>
  )
}

export default Header
