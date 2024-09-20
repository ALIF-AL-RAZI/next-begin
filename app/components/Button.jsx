"use client";

const Button = () => {
  return (
    <div>
        <button className='bg-green-400 rounded-sm px-4 py-1' onClick={()=> console.log("I am clicked here")}>Click Here</button>
    </div>
  )
}

export default Button