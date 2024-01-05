import React from "react";
import CommonTitle from "@/components/Dividetitle/Commontitle";
import ProductCaller from "@/components/common/products/ProductCaller";
import { Product } from "@/components/common/productFunction/path";

const productData: Product[] = [
  {
    image: "a.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "b.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "c.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "d.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "e.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "f.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "g.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
  {
    image: "h.jpeg",
    title: "Humor New Agregado",
    discount: "-7%",
    price1: "$700.00",
    price2: "$650.00",
  },
];

const ProductTest = () => {
  return (
    <section className="md:p-16">
      <CommonTitle
        title="New Arrivals"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <div>
        <ProductCaller productData={productData} />
      </div>
    </section>
  );
};

export default ProductTest;
