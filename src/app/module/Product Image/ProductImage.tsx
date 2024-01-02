
"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Props {
  image: string;
  allProduct: Product[];
}

function ProductImageSection({ image, allProduct }: Props) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  function getVisibleProducts() {
    const lastIndex = allProduct.length - 1;

    // Calculate the indices for the three visible products
    const indices = [
      (currentProductIndex - 1 + allProduct.length) % allProduct.length,
      currentProductIndex,
      (currentProductIndex + 1) % allProduct.length,
    ];

    // Map the indices to the corresponding products
    return indices.map((index) => allProduct[index]);
  }

  const visibleProducts = getVisibleProducts();

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % allProduct.length);
  };
  
  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
    prevIndex === 0 ? allProduct.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-10">
      <div>
        <Image src={image} alt="Product" width={300} height={600} />
      </div>
      <div className="scroll-view flex sm:flex-col gap-3 relative">
        <div
          onClick={handlePrevProduct}
          className="absolute cursor-pointer left-0 object-contain h-full flex items-center justify-center"
        >
          
          {/* <Image
            src="/assets/pre.svg"
            alt="previous"
            width={10}
            height={10}
            className="text-orange-500"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path opacity="1" fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
        {visibleProducts.map((product) => (
          <div key={product.id} className="bg-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              width={90}
              height={90}
              id="scroll-image"
            />
          </div>
        ))}
        <div
          onClick={handleNextProduct}
          className="absolute cursor-pointer right-0 object-contain h-full flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path opacity="1" fill="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          {/* <Image
            src="/assets/next.svg"
            alt="previous"
            width={10}
            height={10}
            className="text-orange-500"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductImageSection;


 export const allProduct = [
    {
      id: 1,
      name: "Product 2",
      description: "This is the description of Product 2.",
      image: "/b.jpeg",
    },
    {
      id: 1,
      name: "Product 2",
      description: "This is the description of Product 2.",
      image: "/d.jpeg",
    },
    {
      id: 1,
      name: "Product3",
      description: "This is the description of Product 2.",
      image: "/e.jpeg",
    },
    {
      id: 1,
      name: "Product 2",
      description: "This is the description of Product 2.",
      image: "/f.jpeg",
    },
    {
      id: 1,
      name: "Product 2",
      description: "This is the description of Product 2.",
      image: "/g.jpeg",
    },

    
  ];