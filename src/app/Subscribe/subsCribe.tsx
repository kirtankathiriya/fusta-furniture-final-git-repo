import Image from 'next/image'
import React from 'react'
import i1 from '../../../public/subscribePhoto/image1.jpg'
import i2 from '../../../public/subscribePhoto/image2.jpg'
import CommonTitle from '../component/ReUseable/Dividetitle/Commontitle'
import ButtonCommon from '../component/ReUseable/Button/button'
import { FiInstagram } from "react-icons/fi";

type Props = {}

const SubsCribePage = (props: Props) => {
    return (
        <section className="grid grid-cols-1  md:grid-cols-2 md:p-16 mb-3">

            <div className=' '>
                <h3 className='col-span-1 md:col-span-2 text-2xl mb-5 md:text-center sm:justify-center text-center'>Follow us on Instagram <a href="#" className='hover:text-orange-500'>@furniture</a></h3>
                <div className="flex flex-col sm:flex-row sm:justify-center gap-3 ml-0 items-center lg:justify-start">
                    <div className=' bg-slate-600 relative' >
                        <Image src={i1} alt='network slow' className='hover:opacity-50' />
                        <div className='absolute  opacity-0 hover:opacity-100 left-1/2  top-[45%] '><FiInstagram size={20} />
                        </div>
                    </div>
                    <div className='  bg-slate-600 relative'  >
                        <Image src={i2} alt='network slow' className='hover:opacity-50' />
                        <div className='absolute opacity-0 hover:opacity-100 left-1/2 top-[45%]'> <FiInstagram size={20} />
                        </div>

                    </div>

                </div>
            </div>
            <div className="justify-center flex  ">
                <div className=' flex flex-col pt-8 w-screen lg:w-1/2 items-center  gap-3'>
                    <h1 className='text-2xl  mb-5 md:text-4xl font-medium items-center'>subscribe</h1>
                    <p className='text-base items-center'>Lorem ipsum dolor sit, consect adipisicing elit. </p>

                    {/* <CommonTitle title='Subscribe' subtitle='Lorem ipsum dolor sit amet consectetur elit.' /> */}

                    <div className='flex flex-col  w-screen md:w-1/2 items-center'>


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


// hi welcome to code 