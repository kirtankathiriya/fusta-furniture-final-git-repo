"use client";

import React, { useState, useEffect } from "react";

const Quotes: React.FC = () => {
  const slides = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Author 1",
    },
    {
      id: 2,
      text: "Quos temporibus quis ad itaque voluptatibus nulla magnam perferendis",
      author: "Author 2",
    },
    {
      id: 3,
      text: "Quos temporibus quis ad itaque voluptatibus  cupiditate dolorum",
      author: "Author 3",
    },
    {
      id: 4,
      text: "Quos temporibus quis ad itaque  nostrum consequatur",
      author: "Author 4",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div className="relative bg-black">
        {/* <img
        src="https://fusta-demo.myshopify.com/cdn/shop/files/02.jpg?v=1613745605"
        alt="Your Descriptive Alt Text"
        className=" opacity-50 w-full h-96 md:h-full min-"
        
      /> */}
        <div
          className=" justify-center top-8 bottom-0 left-0 right-0  text-center p-2 md:p-24 bg-no-repeat bg-scroll bg-center bg-cover opacity-70 backdrop-filter backdrop-blur-smop-blur-sm my-5 "
          style={{ backgroundImage: "url(/Quotes.jpg)" }}
        >
          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-serif">
              ❝
            </p>
            <p className="whitespace-normal font-semibold md:text-2x1  text-white">
              {slides[currentSlide].text}
            </p>
            <p className="flex justify-center py-3 text-sm  text-white ">
              {slides[currentSlide].author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
