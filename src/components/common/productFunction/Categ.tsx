import React from 'react';
import { Product } from './path';
import Hover from './Hover';
import Pric from './Pric';
import CommonTitle from '@/components/Dividetitle/Commontitle';


const Categ = ({ productData }: { productData: Product[] }) => {
  return (
    <section className='md:p-16'>
      <CommonTitle title='New Arrivals' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {productData.map((product, index) => (
          <div className="pb-7 flex justify-center flex-col text-center" key={index}>
            <div className='relative group justify-center items-center'>
              <div className='box1 bg-white items-center justify-center'>
                <ul className='absolute z-10 py-2 px-0 pl-3'>
                  <li className='bg-white font-medium w-14 text-center mb-1 py-1'>Sale</li>
                  <li className='bg-white font-medium w-14 text-center mb-1 py-1'>{product.discount}</li>
                </ul>
                <img src={product.image} alt='not found' className='group-hover:brightness-50' />
              </div>
              <Hover />
            </div>
            <div>
              <Pric productData={[product]} />
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Categ;