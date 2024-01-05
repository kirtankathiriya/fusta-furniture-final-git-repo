"use client";
import ProductCard from "@/components/common/products/ProductCaller";
import React from "react";

// const ProductsGrid = () => {
// type Product = {
//   image: string;
//   title: string;
//   discount: string;
//   price1: string;
//   price2: string;
// };

// const productData: Product[] = [
//   {
//     image: "a.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "b.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "c.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "d.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "e.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "f.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "g.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
//   {
//     image: "h.jpeg",
//     title: "Humor New Agregado",
//     discount: "-7%",
//     price1: "$700.00",
//     price2: "$650.00",
//   },
// ];

// const products = { productData };

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (res.ok) {
    const json = await res.json();
    return json;
  }
  throw new Error("error while fetching");
}

export default async function ProductsGrid() {
  const data = await getData();

  console.log(data);

  if (!data || data.length == 0) {
    return <h1>data not available</h1>;
  }

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <>
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
        {products}
      </>
    </section>
  );
}

// export default ProductsGrid;
