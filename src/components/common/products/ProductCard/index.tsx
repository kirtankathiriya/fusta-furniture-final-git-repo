"use client";
import Image from "next/image";
import Styles from "./productCard.module.css";
import Link from "next/link";

// type Product = {
//   image: string;
//   title: string;
//   discount: string;
//   price1: string;
//   price2: string;
// };

// async function getData() {
//   const res = await fetch("https://fakestoreapi.com/products/categories");

//   const json = await res.json();

//   if (!res.ok) {
//     throw new Error(json);
//   }
//   type Product = {json}
//   return json;
// }

const ProductCard = ({ product }: Product) => {
  return (
    <div className="flex flex-col justify-between w-full items-center relative my-[10%]">
      <div className="flex flex-col gap-2 w-full items-center px-4">
        {/* <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={Styles.productImage}
        > */}
        {product?.image && (
          <Image
            src={product?.image}
            alt={product?.title || "image"}
            className=" w-full relative rounded-lg overflow-hidden"
            priority
            fill
            style={{ objectFit: "contain" }}
          />
        )}
        {/* </Link> */}
        <div className="flex flex-col items-center">
          <p className="font-semibold">{product?.title}</p>
          {/* <Price id={product.id as string} /> */}
          <p>$100</p>
        </div>
      </div>
      {/* <div className={Styles.btnWrapper}>
        <AddToCartBtn type="icon" product={product} />
      </div> */}
    </div>
  );
};

export default ProductCard;
