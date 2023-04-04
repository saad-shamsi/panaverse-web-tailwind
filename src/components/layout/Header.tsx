import React from "react";
import Logo from "../../../public/logos.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
function Header() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <Wrapper>
        <div className="flex justify-between   py-4    items-center">
          {/* LOgo */}

          <Image src={Logo} alt="panverse"></Image>
          {/* <h2 className='text-xl font-bold'>Panverse Dao</h2> */}

          {/* Navigation bar */}
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/courses"> Courses</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
