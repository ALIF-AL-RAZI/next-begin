import Link from 'next/link'
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div className='mt-10'>
        <ul className="flex gap-5">
            <li><Link href='/About/mission'>Mission</Link></li>
            <li><Link href='/About/vission'>Vission</Link></li>
          </ul>

        {children}
        
    </div>
  )
}

export default AboutLayout