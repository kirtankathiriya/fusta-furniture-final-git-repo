import React from 'react'
import Image from 'next/image';
import i from '../../../../public/icon/topSellingImage.jpg'
type Props = {}

const Topselling = (props: Props) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-5 mr-5">
                <div className='relative  md:ml-20'>
                    <Image src={i} alt='Top Selling Photo' className='relative' />
                    <div className='absolute top-1/2 left-0 transform -translate-x-1/2  -rotate-90'>
                        <button type='button' className='p-2 rounded-full bg-slate-100 w-72'>
                            WELCOME TO FURNITURE
                        </button>
                    </div>
                </div>

                <div className="mt-[48px] ml-[25px]">
                    <h1 className='text-4xl p-2 mb-3'>Top Selling !</h1>
                    <div className='flex gap-3 p-2 text-[18px] mb-3'>
                        <del>$330.00</del>
                        <h2 className='text-orange-500'>$230.00</h2>
                    </div>
                    <p className='p-2 mb-3'>Experience the epitome of comfort and style with our top-selling furniture piece, the "Harmony Chair." Crafted with precision and upholstered in sumptuous fabrics, it offers the perfect blend of modern aesthetics and ergonomic support. Designed to complement any living space, the Harmony Chair invites you to relax and unwind in unparalleled luxury. Redefine your home with this timeless statement.</p>
                    <button type='button' className='  pt-1 pr-6 pb-1 pl-6 w-44 text-white hover:bg-black h-12 border-2 bg-orange-600 mb-3'>SHOP NOW
                    </button>
                </div>
            </div>
        </>
    )
}; export default Topselling