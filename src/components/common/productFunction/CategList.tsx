import React from "react";
import { Product } from "./path";
import Hover from "./Hover";
import Pric from "./Pric";
import CommonTitle from "../Dividetitle/Commontitle";

const CategList = ({ productData }: { productData: Product[] }) => {
  return (
    <div className="flex flex-col text-center justify-between">
      {productData.map((product, index) => (
        <div
          className="box1 min-w-96  w-full py-2 flex flex-col md:flex-row text-left justify-between"
          key={index}
        >
          <div className="image_container min-w-48">
            <div>
              <div className="absolute z-10 py-2 px-0 pl-3 overflow-hidden">
                <ul>
                  <li className="bg-white font-medium w-14  text-center mb-1 py-1">
                    Sale
                  </li>
                  <li className="bg-white font-medium w-14  text-center mb-1 py-1">
                    {product.discount}
                  </li>
                </ul>
              </div>
              <img
                src={product.image}
                alt="not found"
                className="hover:brightness-50 duration-150 cursor-pointer"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col gap-2 px-2 text-left">
            <ul className="pt-4">
              <li className="pt-2 hover:text-orange-500 cursor-pointer font-semibold text-lg md:text-2xl shadow-md">
                {product.title}
              </li>
            </ul>
            <h3 className="font-semibold items-center flex justify-start text-left sm:text-xl gap-2">
              {product.price2}
              <del className="text-sm font-light">{product.price1}</del>
            </h3>
            <div>
            <p className="desc flex flex-wrap max-md:text-base max-lg:text-sm overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aspernatur non rem odio! Voluptas repellendus maiores, dicta totam
              asperiores est aut atque assumenda. Obcaecati quod labore quia
              temporibus non voluptas!
            </p>

            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategList;
