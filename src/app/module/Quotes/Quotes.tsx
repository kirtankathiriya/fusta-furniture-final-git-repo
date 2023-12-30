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
      text: "Quos temporibus quis ad itaque voluptatibus nulla magnam perferendis reiciendis cupiditate culpa earum at, odio sed aut suscipit?",
      author: "Author 2",
    },
    {
      id: 3,
      text: "Quos temporibus quis ad itaque voluptatibus  cupiditate dolorum nostrum consequatur culpa earum at, odio sed aut suscipit?",
      author: "Author 3",
    },
    {
      id: 4,
      text: "Quos temporibus quis ad itaque  nostrum consequatur culpa earum at, odio sed aut suscipit?",
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
    <div className="relative ">
      {/* <img
        src="https://fusta-demo.myshopify.com/cdn/shop/files/02.jpg?v=1613745605"
        alt="Your Descriptive Alt Text"
        className=" opacity-50 w-full h-96 md:h-full min-"
        
      /> */}
        <div
          className=" justify-center top-8 bottom-0 left-0 right-0  min-w-full text-center p-24 bg-no-repeat bg-scroll bg-center bg-cover backdrop-filter backdrop-blur-smop-blur-sm my-5"
          style={{ backgroundImage: "url(/Quotes.jpg)" }}
        >
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-serif">
            ❝
          </p>
          <p className="whitespace-normal font-semibold text-2x1  text-white">
            {slides[currentSlide].text}
          </p>
          <p className="flex justify-center py-3 text-sm  text-white ">
            {slides[currentSlide].author}
          </p>
        </div>
    </div>
  );
};

export default Quotes;