"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '../../../../public/icon/logo.jpg';
import { SlUser } from "react-icons/sl";
import { ImMenu3 } from 'react-icons/im';
import Link from 'next/link';


export const HeaderBottom = () => {

  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Add a 2-second delay before displaying the sticky navbar
      if (!isSticky && scrollY > 400) {
        setTimeout(() => {
          setIsSticky(false);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);


  const menuList = () => {
    setMenu(!isMenu);
  }

  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <section className='flex items-center shadow-sm sticky bg-white h-[70px] top-0 z-20 justify-between  md:py-4 md:px-16'>

      <div className='md:hidden'>
        <ImMenu3 className='w-7 h-7' onClick={toggleMobileMenu} />
        {isMobileMenuOpen && (
          <section className='absolute w-full mt-5 p-2 left-0 text-white font-bold bg-gradient-to-r from-[#E97730] to-[#ffd4a4] text-center'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Products">Product</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </section>
        )}
      </div>

      {/* Left section with logo */}
      <Link href="/" className='p-5 sm:p-0 justify-center'>
        <Image src={logo1} alt='Fusta Logo' />
      </Link>

      {/* Middle section with menu */}
      <div className="hidden md:block">
        <ul className='flex w-full gap-5 font-normal '>
          <li
            className='relative'
          >
            <a href='/' className='hover:text-[#E97730]'>Home</a>
          </li>

          <li className='relative ml-3'>
            <a href="/Products" className='hover:text-[#E97730]'>Product</a>
          </li>

          <li className='relative ml-3'>
            <a href="/About" className='hover:text-[#E97730]'>About</a>
          </li>

          <li className='relative ml-3'>
            <a href="/Contact" className='hover:text-[#E97730]'>Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Right section with icons */}
      <div className='flex items-center '>
        <div className='flex gap-2 md:mr-0 mr-2 '>
          <a href='#' className='hover:text-[#E97730]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </a>
          <a href='/Account/Loginpage' className='hover:text-[#E97730]'>
            < SlUser className='w-6 h-6 md:w-7 md:h-7' />
          </a>
          <a href='Checkout' className='hover:text-[#E97730]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

          </a>
        </div>
      </div>
    </section>
  );
};