import Image from 'next/image'
import React from 'react'
import i1 from '/public/subscribePhoto/image1.jpg'
import i2 from '/public/subscribePhoto/image2.jpg'
import { FiInstagram } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa'
import ButtonCommon from '@/components/common/Button/button'


type Props = {}

const SubsCribePage = (props: Props) => {
    return (
        <section className="grid grid-cols-1  lg:grid-cols-2 md:p-16 mb-3">
            <div className=' '>
                <h3 className='col-span-1 md:col-span-2 text-2xl mb-5 md:text-center text-center'>Follow us on Instagram <a href="#" className='hover:text-orange-500'>@furniture</a></h3>
                <div className="flex flex-col sm:flex-row sm:justify-center gap-3 ml-0 items-center lg:justify-start">
                    <div className=' bg-slate-600 relative group' >
                        <div><Image src={i1} alt='network slow' className='hover:opacity-50' /></div>
                        <div className="z-10 flex justify-center absolute bottom-1/4 inset-x-1/2 opacity-0 transition duration-500 scale-0 group-hover:opacity-100 group-hover:-translate-y-14 group-hover:scale-100 items-center">
                            <div className=' w-10 h-10 cursor-pointer text-white hover:text-orange-500 flex justify-center items-center'>
                                <FiInstagram size={30} />
                            </div>
                        </div>
                    </div>
                    <div className='  bg-slate-600 relative group'  >
                        <div><Image src={i2} alt='network slow' className='hover:opacity-50' /></div>
                        <div className="z-10 flex justify-center absolute bottom-1/4 inset-x-1/2 opacity-0 transition duration-500 scale-0 group-hover:opacity-100 group-hover:-translate-y-14 group-hover:scale-100 items-center">
                            <div className=' w-10 h-10 cursor-pointer text-white hover:text-orange-500 flex justify-center items-center'>
                                <FiInstagram size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center max-md:justify-center ">
                <div className=' flex flex-col  items-center  gap-2 my-5'>
                    <h1 className='text-2xl md:text-4xl font-medium items-center'>subscribe</h1>
                    <p className='text-start md:text-center'>Lorem ipsum dolor sit, consect adipisicing elit. </p>
                    <div className='flex flex-col   md:w-1/2 items-center'>
                        <label htmlFor="email" className=' m-screen sr-only'>Enter E-mail</label>
                        <input type="email" placeholder='your email address' className='p-4   border border-slate-400 justify-end'></input>
                        <ButtonCommon Name='Subscribe' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubsCribePage