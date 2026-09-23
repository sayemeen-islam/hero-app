'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import logo from '@/assets/logo.png'

const Navbar = () => {
  const pathname = usePathname();
  const links=<>
   <li><Link href='/' className={pathname ==='/' ? 'text-blue-500':''}>Home</Link></li>
   <li><Link href='/apps' className={pathname ==='/apps' ? 'text-blue-500':''}>Apps</Link></li>
   <li><Link href='/installation' className={pathname ==='/installation' ? 'text-blue-500':''}>Installation</Link></li>
  </>
  return (
<div className="bg-base-100 shadow-sm">
    <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    {links}
      </ul>
    </div>
    <Link href='/' className=" text-md flex items-center font-bold"><Image src={logo} alt='Hero App logo' width={50} ></Image><span className='text-[#9F62F2]' >Hero App</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='' className="btn rounded-lg text-white bg-[#9F62F2] hover:bg-9752f7 ">Contribute</Link>
  </div>
</div>
</div>
  );
};

export default Navbar;