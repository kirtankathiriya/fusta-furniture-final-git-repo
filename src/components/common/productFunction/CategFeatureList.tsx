import React from 'react';
import { Product } from './path';
import Pric from './Pric';
import CommonTitle from '@/components/Dividetitle/Commontitle';

const Categ1 = ({ productData }: { productData: Product[] }) => {
  return (
    <div className='p-2 md:p-16'>
      <CommonTitle title='Featured Products' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit'/>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 text-center justify-between items-center ">
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
      </section>
    </div>
  );
};

export default Categ1;