"use client"
import React, { createContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic from '../../../../public/icon/home.webp'
import 'swiper/css';
import pic2 from '../../../../public/icon/slier-inner-2.webp'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='flex flex-wrap bg-[#f4f4f4] z-0 justify-around w-screen my-5 '>
                        <div className='flex w-1/2 justify-center items-center'>
                            <div className=' pb-0 gap-10 justify-center m-10 '>
                                <div className='justify-center pt-3 text-4xl text-orange-600'>Top Selling!</div>
                                <div className='text-5xl pt-3 text-stone-950 font-bold'> NEW COLLECTION</div>
                                <div className='pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorum omnis obcaecati odio adipisci quia consequatur rerum.</div>
                                <div className='pt-4'>
                                    <button type='button' className='  pt-1 pr-6 pb-1 pl-6 w-44 text-white hover:bg-black h-12 border-2 bg-orange-600'>SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=' w-1/2 hidden lg:flex py-16'>
                            <Image src={pic} alt='error' />
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-wrap bg-[#f4f4f4] justify-around w-screen my-10 '>
                        <div className=' w-1/2 hidden lg:flex py-16 justify-end'>
                            <Image src={pic2} alt='error' />
                        </div>


                        <div className='flex w-1/2 justify-center items-center'>
                            <div className=' pb-0 gap-10 justify-start m-10'>
                                <div className='justify-center pt-3 text-4xl text-orange-600'>Top Selling!</div>
                                <div className='text-5xl pt-3 text-stone-950 font-bold'> NEW COLLECTION</div>
                                <div className='pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorum omnis obcaecati odio adipisci quia consequatur rerum.</div>
                                <div className='pt-4'>
                                    <button type='button' className='  pt-1 pr-6 pb-1 pl-6 w-44 text-white hover:bg-black h-12 border-2 bg-orange-600'>SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
