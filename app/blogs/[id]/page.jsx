import { notFound } from 'next/navigation';
import React from 'react'

const BlogPage = ({params}) => {
    const {id} = params;

    if (id==='4'){
        notFound();
    }
  return (
    <div>
        <ul>
            <li className='mt-10'>ID: {id}</li>
            
        </ul>
    </div>
  )
}

export default BlogPage