import getAllPosts from '@/app/lib/getPost';
import React from 'react'

const Post = async ({params}) => {
    const {id} = params;
    const post = await getAllPosts(id);
  return (
    <div className='mt-6'>
        <h1 className='mt-6 text-blue-600 font-bold'>Post: {id}</h1>
        <h2 className='mt-6'>Title: {post.title}</h2>
        <p className='mt-6'>Body: {post.body}</p>
    </div>
  )
}

export default Post