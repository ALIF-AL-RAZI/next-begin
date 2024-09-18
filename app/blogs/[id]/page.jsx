import React from 'react'

const BlogPage = ({params}) => {
    const {id} = params;
  return (
    <div>
        <ul>
            <li className='mt-10'>ID: {id}</li>
            
        </ul>
    </div>
  )
}

export default BlogPage