import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around space-y-2 flex-col gap2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120} className='w-[130px] sm:w-auto'/>
        <p className='text-sm text-white'>All rights reserved. Copyright ©Blogger 2025</p>
        <div className='flex space-x-2'>
            <Image src={assets.facebook_icon} alt='' width={24} className='mr-2'/>
            <Image src={assets.twitter_icon} alt='' width={24} className='mr-2'/>
            <Image src={assets.googleplus_icon} alt='' width={24} className='mr-2'/>
        </div>
    </div>
  )
}

export default Footer