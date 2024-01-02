import React from 'react'
import { CiHeart, CiZoomIn } from 'react-icons/ci';
import { PiHandbagThin } from 'react-icons/pi';
import 'tailwindcss/tailwind.css';

type Props = {}

const Hover = (props: Props) => {
    return (
        <>
            <div className=" flex justify-center absolute bottom-1/4 inset-x-1/2 opacity-0 transition duration-500 scale-0 group-hover:opacity-100 group-hover:-translate-y-20 group-hover:scale-100 items-center">
                <div className="grid grid-flow-col gap-x-2 justify-center">
                    <div className='w-11 h-11 bg-white rounded-sm hover:bg-[#e97730] cursor-pointer hover:text-white flex justify-center items-center'>
                        <CiZoomIn size={20} />
                    </div>
                    <div className='w-11 h-11 bg-white  rounded-sm hover:bg-[#e97730] cursor-pointer hover:text-white flex justify-center items-center'>
                        <PiHandbagThin size={20} />
                    </div>
                    <div className='w-11 h-11 bg-white  rounded-sm hover:bg-[#e97730] cursor-pointer hover:text-white flex justify-center items-center' title='Wishlist'>
                        <CiHeart size={20} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hover