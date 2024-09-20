

import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/MainAfter.webp"

const Mission = () => {
  return (
    <div className='mt-10'>
      <div>Cupidatat ut est sunt labore occaecat tempor occaecat ipsum. Dolore laboris magna occaecat sit. Duis magna veniam consequat dolore proident Lorem esse. Nulla Lorem fugiat magna velit proident officia sunt ullamco consequat cillum proident quis. Elit reprehenderit mollit non occaecat. Nulla nulla cillum minim consectetur voluptate qui duis officia officia.</div>
      <div className="">
<Image src={thumb} alt="Thumb Image" className="mt-10"/>
      </div>
      
      <Button />
    </div>
  )
}

export default Mission