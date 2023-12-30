import React from 'react';
import { Product } from './path';
import Pric from './Pric';


const Categ1 = ({ productData }: { productData: Product[] }) => {
  return (
    <>
    <div className='text-center p-10'>
      <h1 className='text-2xl mb-5 md:text-4xl'>Featured Products</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 pl-14 pr-14 text-center justify-between items-center ">
        {productData.map((product, index) => (
          <div className="box1 pb-7" key={index}>
            <div className='relative group bg-slate-600 '>
              <div>
                <ul className='absolute z-10 py-2 px-0 pl-3'>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>Sale</li>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>{product.discount}</li>
                </ul>
              </div>
              <div><img src={product.image} alt='not found' className='group-hover:opacity-50 ' /></div>
            </div>
            <div>
              <Pric productData={[product]} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categ1;