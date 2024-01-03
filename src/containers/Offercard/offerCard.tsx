import React from "react";
import Image from "next/image";
import i1 from "../../../public/offerZone/yellowChair.jpg"
import i2 from "../../../public/offerZone/redChair.jpg"

type Props = {}

function offerCard({ }: Props) {
  return (
    <section className="md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
        <div className="relative">
          <Image src={i1} alt="yellow chair photo" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-30 p-6">
            <h3 className="text-2xl">30% Off</h3>
            <h2 className="text-4xl font-bold">Chair Collection</h2>
            <a href="#" className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-md text-black text-lg font-semibold uppercase">Shop Now</a>
          </div>
        </div>

        <div className="relative">
          <Image src={i2} alt="yellow chair photo" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black bg-opacity-30 p-6">
            <h3 className="text-2xl">30% Off</h3>
            <h2 className="text-4xl font-bold">Chair Collection</h2>
            <a href="#" className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-400 rounded-md text-black text-lg font-semibold uppercase">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default offerCard