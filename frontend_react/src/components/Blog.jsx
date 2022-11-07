import React, { useState } from 'react'
import { useEffect } from 'react'
import{urlFor,client} from '../api/client'
import { Link } from "react-router-dom";


const Blog = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
   const postQuery='*[_type=="post"]'

client.fetch(postQuery).then((data)=>{
    setPosts(data)
}  ) 
    }, [])
    console.log(posts)
  return (
    <>
        
    {posts.length && (
        <div className=' px-12 mx-auto items-center content-center my-20 '>
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-12'>
        { posts.map((post,index)=>
        (
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-2  ">

    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={urlFor(post.mainImage)}  alt="" className=" object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    <h1 className="transition duration-700 text-center mb-8  hover:text-pink-600 text-3xl font-semibold">
      {post.title}
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
   
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.name}</p>
      </div>
  
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.metadesc}
    </p>
    <div className="text-center">
      <Link to={"/" + post.slug.current}  key={post.slug.current}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mb-4">Continue Reading</span>
      </Link>
    </div>

  </div>

            
        )
       
        )}
        </div>
           </div>
    )}
   
              
               
    </>
  )
}

export default Blog