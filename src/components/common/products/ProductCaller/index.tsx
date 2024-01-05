"use client";
import Image from "next/image";
import Styles from "./productCard.module.css";
import Link from "next/link";
import Hover from "../../productFunction/Hover";
import Pric from "../../productFunction/Pric";
import { Product } from "../../productFunction/path";
import ProductCardTEST from "../ProductCard";
import clsx from "clsx";

const ProductCaller = ({
  productData,
  variant,
}: {
  productData: Product[];
  variant?: any;
}) => {
  return (
    // <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <section
      className={clsx("gap-2", {
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":
          variant === "grid4",
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3": variant === "grid3",
        "flex flex-col text-center justify-between": variant === "list",
      })}
    >
      {productData.map((product, index) => (
        //
        <ProductCardTEST data={product} />
      ))}
    </section>
  );
};

export default ProductCaller;
