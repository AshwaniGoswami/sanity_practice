import React, { useState } from 'react'
import { useEffect } from 'react'
import{urlFor,client} from '../../api/client'
import {useParams} from 'react-router-dom'
import BlockContent from '@sanity/block-content-to-react'


const SingleBlog = () => {
const [postData, setPostData] = useState(null)
const {slug}=useParams()

useEffect(() => {
client.fetch(  `*[slug.current == $slug]{
    title,
    slug,
    mainImage,
   body,
  "name": author->name,
  "authorImage": author->image
 }`,
  { slug }).then((data)=>{
    setPostData(data[0])
  })
}, [slug])

if (!postData) return <div>
    Nothing to Display
</div>
        


  return (
  
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-16 pb-12  m-12'>
        <div >
        <div className='relative overflow-hidden shadow-md  mb-6'>
        <img src={urlFor(postData.mainImage)} alt={postData.title} className=" object-top  h-[80vh] w-full  shadow-lg rounded-t-lg lg:rounded-lg "/>
        </div>
          
            <h2 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>{postData.title}</h2>
<div className='mb-8 text-2xl text-center'>
<BlockContent
projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
dataset='production'
            blocks={postData.body} 
        />
</div>
        

            <div className=' lg:flex text-center items-center justify-center mb-8 w-auto  pt-8'> 
            <div className='border-1 flex p-2 rounded-xl w-auto'>
            <div className='flex text-xl font-semibold justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center'>
            <span>Author:</span>
            <h4 className=" align-middle text-gray-700 ml-2 font-medium text-lg hover:text-green-400 ">{postData.name}</h4>

            </div>
                <img src={urlFor(postData.authorImage)} alt={postData.name} className="align-middle rounded-full w-20 h-20" />
            </div>
            </div>
       
        </div>
    
    </div>
  )
}

export default SingleBlog