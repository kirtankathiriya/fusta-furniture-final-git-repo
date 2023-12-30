import React from "react";
import Image from "next/image";
import i1 from "../../../../public/offerZone/yellowChair.jpg"
import i2 from "../../../../public/offerZone/redChair.jpg"
interface Props {}

const Offercard: React.FC<Props> = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-4 m-4">
      <div
        className={
          "relative h-full w-full md:w-1/2 overflow-hidden ${style.offerCardContainer}"
        }
      >
        <div className="relative">
          <Image src={i1} alt="red chair"></Image>
          <div className="absolute inset-0">
            <div className="z-10 shine-effect"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          <button className="absolute bottom-10 md:bottom-40 text-white py-2 px-4 transition duration-150 pt-1 pr-6 pl-6 z-20 hover:bg-transparent hover:underline">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-thin italic text-left p-2">
              30% OFF
            </h1>
            <p className="text-lg md:text-xl lg:text-4xl text-white mt-2 md:mt-4 font-serif font-bold p-2">
              Chair Collection
            </p>
            <h2 className="text-xl md:text-2xl lg:text-lg text-white font-serif hover:text-orange-600 text-left p-2">
              Shop Now
            </h2>
          </button>
        </div>
      </div>
      <div
        className={
          "relative h-full w-full md:w-1/2 overflow-hidden ${style.offerCardContainer}"
        }
      >
        <div className="relative">
          <Image src={i2} alt="red chair"></Image>
          <div className="absolute inset-0">
            <div className="z-10 shine-effect"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          <button className="absolute bottom-10 md:bottom-40 text-white py-2 px-4 transition duration-150 pt-1 pr-6 pl-6 z-20 hover:bg-transparent hover:underline">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-thin italic text-left p-2">
              30% OFF
            </h1>
            <p className="text-lg md:text-xl lg:text-4xl text-white mt-2 md:mt-4 font-serif font-bold p-2">
              Chair Collection
            </p>
            <h2 className="text-xl md:text-2xl lg:text-lg text-white font-serif text-left p-2">
              Shop Now
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offercard;