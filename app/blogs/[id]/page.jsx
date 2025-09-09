import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Page = ({ params }) => {
  // Server Component approach → direct access
  const blog = blog_data.find((item) => item.id === Number(params.id))

  if (!blog) return <div>Blog not found</div>

  return (
    <>
      <div className="bg-gray-200 pb-10 px-5 md:px-12 lg:px-28">
        <Header />
        <div className='mb-18 text-center'>
          <h1 className="text-2xl sm:text-4xl text-center font-semibold max-w-[700px] mx-auto">
            {blog.title}
          </h1>
          <Image
            src={blog.author_img}
            alt={blog.author}
            width={60}
            height={60}
            className="mx-auto mt-4 border border-white rounded-full"
          />
          <p className="mt-1 pb-4 text-lg max-w-[740px] mx-auto">{blog.author}</p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-120px] mb-10">
        <Image
          className="border-4 border-white"
          src={blog.image}
          alt={blog.title}
          width={1280}
          height={720}
        />
        <h2 className="my-8 text-2xl">Introduction:</h2>
        <p className="mt-10 max-w-[740px] text-xs sm:text-base">{blog.description}</p>

        <h3 className='my-5 text-[12px] font-semibold'>Step1: self-reflection and goal</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iusto, dolores aliquam et nemo unde, ratione voluptates mollitia commodi quisquam ipsam, dicta explicabo sapiente. Debitis nesciunt eum facilis officia consectetur.</p>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iusto, dolores aliquam et nemo unde, ratione voluptates mollitia commodi quisquam ipsam, dicta explicabo sapiente. Debitis nesciunt eum facilis officia consectetur.</p>
        <h3 className='my-5 text-[12px] font-semibold'>Step1: self-reflection and goal</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iusto, dolores aliquam et nemo unde, ratione voluptates mollitia commodi quisquam ipsam, dicta explicabo sapiente. Debitis nesciunt eum facilis officia consectetur.</p>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iusto, dolores aliquam et nemo unde, ratione voluptates mollitia commodi quisquam ipsam, dicta explicabo sapiente. Debitis nesciunt eum facilis officia consectetur.</p>
        <h3 className='my-5 text-[12px] font-semibold'>conclusion:</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam iusto, dolores aliquam et nemo unde, ratione voluptates mollitia commodi quisquam ipsam, dicta explicabo sapiente. Debitis nesciunt eum facilis officia consectetur.</p>


        <div>
          <p className="text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex space-x-2">
            <Image src={assets.facebook_icon} alt="Facebook" width={50} height={50} />
            <Image src={assets.twitter_icon} alt="Twitter" width={50} height={50} />
            <Image src={assets.googleplus_icon} alt="Google Plus" width={50} height={50} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
