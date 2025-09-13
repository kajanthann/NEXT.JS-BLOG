'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Hero = () => {

  const [email,setEmail] = useState('');

  const onsubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('email',email);
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.message)
      setEmail('');
    }
    else{
      toast.error(response.data.message)
    }
  }



  return (
    <div className='flex justify-center'>  
      <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
            <p className='mt-10 max-w-[740px] text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur, quaerat
                 beatae animi numquam distinctio nulla quae? Ducimus temporibus quos totam 
                adipisci facere accusantium obcaecati libero consequatur quae.</p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-3px_4px_0px_#000000]' action="">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' className='pl-4 outline-none' />
                <button onSubmit={onsubmitHandler} type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-900 active:text-white'>Subscribe</button>
            </form>
      </div>
    </div>
  )
}

export default Hero