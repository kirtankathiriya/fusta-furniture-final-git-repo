import React from "react";
import Hover from "../../productFunction/Hover";
import Pric from "../../productFunction/Pric";
import { Product } from "../../productFunction/path";

type Props = {};

const ProductCardTEST = ({ data }: Product[], index) => {
  return (
    <div className="pb-7 flex justify-center flex-col text-center" key={index}>
      <div className="relative group justify-center items-center">
        <div className="box1 bg-white items-center justify-center">
          <ul className="absolute z-10 py-2 px-0 pl-3">
            <li className="bg-white font-medium w-14 text-center mb-1 py-1">
              Sale
            </li>
            <li className="bg-white font-medium w-14 text-center mb-1 py-1">
              {data.discount}
            </li>
          </ul>
          <img
            src={data.image}
            alt="not found"
            className="group-hover:brightness-50"
          />
        </div>
        <Hover />
      </div>
      <div>
        <Pric productData={[data]} />
      </div>
    </div>
  );
};

export default ProductCardTEST;
