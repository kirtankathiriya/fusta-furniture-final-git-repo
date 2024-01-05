import React from "react";
import { Product } from "./path";
import Hover from "./Hover";
import Pric from "./Pric";
import CommonTitle from "@/components/Dividetitle/Commontitle";

const Categ3 = ({ productData }: { productData: Product[] }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {productData.map((product, index) => (
          <div
            className="box1 pb-7 flex justify-center flex-col text-center"
            key={index}
          >
            <div className="relative group justify-center items-center">
              <div>
                <ul className="absolute z-10 py-2 px-0 pl-3">
                  <li className="bg-white font-medium w-14 text-center mb-1 py-1">
                    Sale
                  </li>
                  <li className="bg-white font-medium w-14 text-center mb-1 py-1">
                    {product.discount}
                  </li>
                </ul>
              </div>
              <div className="">
                <img
                  src={product.image}
                  alt="not found"
                  className="group-hover:brightness-50"
                />
              </div>
              <Hover />
            </div>
            <div>
              <Pric productData={[product]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categ3;
