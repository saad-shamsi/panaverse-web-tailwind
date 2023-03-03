import React from 'react'
import Logo from "../../../public/logos.png"
import Image from "next/image"
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
function Header() {
  return (
    <Wrapper>
    <header className='flex justify-between   py-4   bg-white sticky top-0 items-center'>

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
    </Wrapper>
  )
}

export default Header