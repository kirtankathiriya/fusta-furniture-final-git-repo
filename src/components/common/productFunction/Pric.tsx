import React from 'react';
import { Product } from './path';

const Pric = ({ productData  }: { productData: Product[] }) => {
  return (
    <>
      <ul className="pt-4">
        {productData.map((product, index) => (
          <li key={index}>
          <h3 className="pt-2 hover:text-red-500 cursor-pointer">
            {product.title}</h3>
            <h3>
              <del>{product.price1}</del> {product.price2}
            </h3>
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Pric
