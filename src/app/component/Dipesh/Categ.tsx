import React from 'react';
import { Product } from './index';


const Categ = ({ productData }: { productData: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-2 text-center justify-between">
      {productData.map((product, index) => (
        <div className="box1 mb-2" key={index}>
          <div>
            <div>
              <div className='absolute z-10 py-2 px-0 pl-3 overflow-hidden'>
                <ul>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>Sale</li>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>{product.discount}</li>
                </ul>
              </div>
              <img src={product.image} alt='not found' className='hover:opacity-50 duration-150 cursor-pointer'/>
            </div>
          </div>
          <div className='bg-white'>
            <ul className="pt-4">
              <li className="pt-2 hover:text-red-500 cursor-pointer">{product.title}</li>
            </ul>
            <h3><del>{product.price1}</del> {product.price2}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categ;