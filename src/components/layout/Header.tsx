import React from 'react'
import Logo from "../../../public/logos.png"
import Image from "next/image"
import Link from 'next/link'
function Header() {
  return (
    <header className='flex justify-between items-center  max-w-screen-xl mx-auto py-4 px-2 md:5 bg-white sticky  top-0 items-center0'>

      {/* LOgo */}
     
        <Image src={Logo} alt="" ></Image>
    {/* <h2 className='text-xl font-bold'>Panverse Dao</h2> */}
  
    {/* Navigation bar */}
    <ul className='flex space-x-8 font-medium' >
      <li>
      <Link href='/'> Home</Link> 
        </li>
      <li>
      <Link href='/courses'> Courses</Link>
        </li>
    
    </ul>

    </header>
  )
}

export default Header