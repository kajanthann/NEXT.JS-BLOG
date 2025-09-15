'use client'
import { assets } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'

const Page = ({ params }) => {
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = use(params)

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`/api/blog`, {
        params: { id: id },
      })
      setBlog(response.data.blog) // ✅ Fix: unwrap correctly
    } catch (error) {
      console.error('Error fetching blog:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  if (loading) return <div className="text-center py-20">Loading...</div>
  if (!blog) return <div className="text-center py-20">Blog not found</div>

  return (
    <>
      <div className="bg-gray-200 pb-10 px-5 md:px-12 lg:px-28">
        <Header />
        <div className="mb-18 text-center">
          <h1 className="text-2xl sm:text-4xl text-center font-semibold max-w-[700px] mx-auto">
            {blog.title}
          </h1>

          {blog.author_img && (
            <Image
              src={blog.author_img}
              alt={blog.author || 'Author'}
              width={60}
              height={60}
              className="mx-auto mt-4 border border-white rounded-full"
            />
          )}

          <p className="mt-1 pb-4 text-lg max-w-[740px] mx-auto">{blog.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-120px] mb-10">
        {blog.image && (
          <Image
            className="border-4 border-white"
            src={blog.image}
            alt={blog.title}
            width={1280}
            height={720}
          />
        )}
        <p className="mt-10 max-w-[740px] text-xs sm:text-base">{blog.description}</p>

        
        <div>
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex space-x-2">
            <Image src={assets.facebook_icon} alt="Facebook" width={40} height={40} />
            <Image src={assets.twitter_icon} alt="Twitter" width={40} height={40} />
            <Image src={assets.googleplus_icon} alt="Google Plus" width={40} height={40} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
