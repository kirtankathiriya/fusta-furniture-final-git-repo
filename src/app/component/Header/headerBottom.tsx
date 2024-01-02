"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '../../../../public/icon/logo.jpg';
import { SlUser } from "react-icons/sl";
import { ImMenu3 } from 'react-icons/im';


export const HeaderBottom = () => {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
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

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <section className='flex items-center shadow-sm sticky bg-white h-[83px] top-0 z-20 justify-between md:p-14'>
      {/* Left section with logo */}
      <div className=' '>
        <Image src={logo1} alt='Fusta Logo' />
      </div>

      {/* Middle section with menu */}
      <div className="hidden md:block">
        <ul className='flex w-full gap-5 font-normal '>
          <li
            onMouseEnter={toggleHomeMenu}
            onMouseLeave={toggleHomeMenu}
            className='relative'
          >
            <a href='#' className='hover:text-[#E97730]'>Home</a>
            {isHomeMenuOpen && (
              <ul className='absolute bg-white p-2 mt-1 w-28'>
                <li>
                  <a href='#' className='hover:text-[#E97730]'>Home 1</a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#E97730]'>Home 2</a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#E97730]'>Home 3</a>
                </li>
                <li>
                  <a href="#" className='hover:text-[#E97730]'>Home Rtl</a>
                </li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={menuList}
            onMouseLeave={menuList}
            className='relative ml-0'
          >
            <a href="#" className='hover:text-[#E97730]'>Pages</a>
            {
              isMenu && (
                <div className='grid grid-cols-3 fixed'>
                  <div className='relative'>
                    <ul className='aabsolute bg-white p-3 mt-1 shadow-md'>
                      <li>
                        <h3 className='font-bold'>Column Three</h3>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Faq</a>
                      </li >
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Login</a>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Register</a>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">My Account Page</a>
                      </li>
                    </ul>
                  </div>

                  <div className='relative'>
                    <ul className='absolute bg-white p-3 mt-1 shadow-md'>
                      <li>
                        <h3 className='font-bold'>Column Two</h3>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Product Detail</a>
                      </li >
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Shop Left Sidebar</a>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Shop Rigth Sidebar</a>
                      </li>
                    </ul>
                  </div>

                  <div className='relative'>
                    <ul className='absolute bg-white p-3 mt-1 shadow-md'>
                      <li>
                        <h3 className='font-bold'>Column One</h3>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Product Detail 2</a>
                      </li >
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Error 404</a>
                      </li>
                      <li className='hover:text-[#E97730]'>
                        <a href="#">Curt Page</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            }
          </li>


          <li
            onMouseEnter={toggleShopMenu}
            onMouseLeave={toggleShopMenu}
            className='relative ml-3'
          >
            <a href='#' className='hover:text-[#E97730]'>Shop</a>
            {isShopMenuOpen && (
              <ul className='absolute bg-white p-3 mt-1 shadow-md w-28'>
                <li>
                  <a href='#' className='hover:text-[#E97730]'>Product 1</a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#E97730]'>Product 2</a>
                </li>
              </ul>
            )}
          </li>

          <li className='relative ml-3'>
            <a href="#" className='hover:text-[#E97730]'>Product</a>
          </li>

          <li className='relative ml-3'>
            <a href="#" className='hover:text-[#E97730]'>About</a>
          </li>

          <li className='relative ml-3'>
            <a href="#" className='hover:text-[#E97730]'>Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Right section with icons */}
      <div className='flex items-center'>
        <div className='flex gap-4 mr-0'>
          <a href='#' className='hover:text-[#E97730]'>
            {/* <FaSearch className='w-7 h-7' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </a>
          <a href='/Account/Loginpage' className='hover:text-[#E97730]'>
            < SlUser className='w-6 h-6' />


          </a>
          <a href='#' className='hover:text-[#E97730]'>
            {/* <IoCart className='w-7 h-7' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[26px] h-[26px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

          </a>
        </div>
        <div className='md:hidden ml-2'>
        <ImMenu3 className='w-8 h-8' onClick={toggleMobileMenu} />
        {isMobileMenuOpen && (
          <div className='grid grid-cols-1 fixed bg-white p-3 shadow-md w-full right-0 mt-6'>
            {/* Add your mobile menu items here */}
            <a href='#' className='block py-2 hover:text-[#E97730]'>Home</a>
            <a href='#' className='block py-2 hover:text-[#E97730]'>Pages</a>
            <a href='#' className='block py-2 hover:text-[#E97730]'>shop</a>
            <a href='#' className='block py-2 hover:text-[#E97730]'>Product</a>
            <a href='#' className='block py-2 hover:text-[#E97730]'>About Us</a>
            <a href='#' className='block py-2 hover:text-[#E97730]'>Contact US</a>
          </div>
        )}
      </div>
      </div>
    </section>
  )
};
