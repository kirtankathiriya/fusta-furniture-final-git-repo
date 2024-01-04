import React from 'react';
import { Product } from './path';

const Pric = ({ productData  }: { productData: Product[] }) => {
  return (
    <>
      <ul className="pt-4">
        {productData.map((product, index) => (
          <li key={index}>
          <h3 className="pt-2 hover:text-orange-500 cursor-pointer font-semibold text-lg">
            {product.title}</h3>
            <h3 className='font-semibold items-center flex justify-center gap-2'>
            {product.price2} <del className='text-sm font-light'>{product.price1}</del> 
            </h3>
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Pric
