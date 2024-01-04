import React from 'react';
import { Product } from './path';
import Hover from './Hover';
import Pric from './Pric';
import CommonTitle from '../Dividetitle/Commontitle';


const CategList = ({ productData }: { productData: Product[] }) => {
  return (
    <div className="flex flex-col text-center justify-between">
      {productData.map((product, index) => (
        <div className="box1 min-w-96  w-full mb-2 flex flex-row text-left justify-between" key={index}>
          <div className='w-1/2'>
            <div>
              <div className='absolute z-10 py-2 px-0 pl-3 overflow-hidden'>
                <ul>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>Sale</li>
                  <li className='bg-white font-medium w-14  text-center mb-1 py-1'>{product.discount}</li>
                </ul>
              </div>
              <img src={product.image} alt='not found' className='hover:brightness-50 duration-150 cursor-pointer'/>
            </div>
          </div>
          <div className='bg-white w-1/2 ml-2 *:mb-2'>
            <ul className="pt-4">
              <li className="pt-2 hover:text-orange-500 cursor-pointer">{product.title}</li>
            </ul>
            <h3><del>{product.price1}</del> {product.price2}</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aspernatur non rem odio! Voluptas repellendus maiores, dicta totam asperiores est aut atque assumenda. Obcaecati quod labore quia temporibus non voluptas!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategList;