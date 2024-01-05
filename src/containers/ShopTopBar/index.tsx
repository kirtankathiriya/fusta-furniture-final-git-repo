import React from "react";
import { IoIosGrid, IoIosList } from "react-icons/io";
import clsx from "clsx";

type Props = {};

const Shoptopbar = ({ variant }: { variant?: any }) => {
  return (
    <div className="shop-top-bar flex justify-between py-3 px-1 sm:px-4 border border-slate-300 border-solid">
      <div className="product-view-mode">
        <a
          href="/Products"
          className={clsx(
            "change-view block bg-none border-0 float-left leading-none cursor-pointer select-text ",
            {
              "text-[#e97730]": variant === "grid",
              "text-black hover:text-[#e97730]": variant === "list",
            }
          )}
        >
          <i className="ion-ios-grid-outline">
            <IoIosGrid size={30} />
          </i>
        </a>
        <a
          href="/Productslist"
          className={clsx(
            "change-view block bg-none border-0 float-left leading-none cursor-pointer select-text mx-1",
            {
              "text-[#e97730]": variant === "list",
              "text-black hover:text-[#e97730]": variant === "grid",
            }
          )}
        >
          <i className="ion-ios-list-outline">
            <IoIosList size={30} />
          </i>
        </a>
      </div>
      <div className="product-sort flex gap-2 items-center text-base">
        <p className="sortby">Sort By</p>
        <select
          name="sortby"
          id="Sortby"
          className="nice-select cursor-pointer border-slate-300 border-solid border w-24 sm:w-44 m-0 max-w-full rounded-sm bg-transparent indent-[0.1] px-2 font-normal"
        >
          <option value="1">Featured</option>
          <option value="2">Best Selling</option>
          <option value="3">Alphabeticaly, A to Z</option>
          <option value="4">Alphabeticaly, Z to A</option>
          <option value="5">Price, Low to High</option>
          <option value="6">Price, High to Low</option>
          <option value="7">Date, Old to New</option>
          <option value="8">Date, New to Old</option>
        </select>
      </div>
    </div>
  );
};

export default Shoptopbar;
