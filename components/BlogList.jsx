'use client'
import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import Blogitem from './Blogitem'
import axios from 'axios'

const BlogList = () => {

    const [menu,setMenu] = useState('All');
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    },[])

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black rounded-sm text-white py-1 px-4' : ''}>All</button>
            <button onClick={() => setMenu('Technology')} className={menu === 'Technology' ? 'bg-black rounded-sm text-white py-1 px-4' : ''}>Technology</button>
            <button onClick={() => setMenu('Startup')} className={menu === 'Startup' ? 'bg-black rounded-sm text-white py-1 px-4' : ''}>StartUp</button>
            <button onClick={() => setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black rounded-sm text-white py-1 px-4' : ''}>LifeStyle</button>
        </div>

        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs.filter((item) => menu === 'All' ? true : item.category === menu).map((item,index) => {
                return <Blogitem key={index} id={item._id} title={item.title} description={item.description} category={item.category} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default BlogList