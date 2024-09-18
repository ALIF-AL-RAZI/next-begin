import Link from 'next/link'
import React from 'react'

const Blogs = () => {

  const blogs = [
    {
      id: 1, 
      title: 'Blog 1 Title',
      desc: 'Blog 1 Desc',
    },
    {
      id: 2, 
      title: 'Blog 2 Title',
      desc: 'Blog 2 Desc',
    },
    {
      id: 3, 
      title: 'Blog 3 Title',
      desc: 'Blog 3 Desc',
    },
  ]
    
  return (
    <div className='mt-10'>
      <div>This is blog page.</div>
      <ul>
        {blogs.map((blog)=>(
          <li key={blog.id} className='mt-5'>
            <Link href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>))}
      </ul>
    </div>
  )
}

export default Blogs