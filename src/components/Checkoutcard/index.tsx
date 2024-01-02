import React from 'react'

type Props = {}

const Checkoutcard = (props: Props) => {
  return (
    <div className='flex flex-row justify-between items-center bg-slate-200 rounded-md min-w-full p-2'>
        <div className='flex flex-row items-center gap-1'>
          <div className='photo-container relative'>
            <img src='./a.jpeg' alt='photo' className='h-16 aspect-square rounded-md'/>
            <span className='absolute z-10 top-0 right-0 h-5 aspect-square text-center justify-center rounded-full overflow-hidden bg-slate-400 opacity-80 border'>1</span>
          </div>
          <div className='flex flex-col'>
            <p className='text-sm'>Product Title</p>
            <p className='text-slate-400 text-xs'>xl / gray / cotton</p>
          </div>
        </div>
        <p className='text-sm'>$ 99.99</p>

    </div>
  )
}

export default Checkoutcard