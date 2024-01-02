import React from "react";
import Humar_card from "../Humar Card/HumarCard";
// import ReactStars from 'react-stars'

const humar_cardData = [
  {
    price: "700.00",
    title: "Availability:",
  },
];
const Humar_new_agregado = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <section>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        
          <div className="flex-[1] py-3">  
          
            <div className="text-[20px] font-normal   mb-2">
              <h2>Humor New Agregado</h2>
            
              {humar_cardData.map((item,index) => (
                <Humar_card
                 key={index}
                 price={item.price}
                 title={item.title} 
                 />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Humar_new_agregado;

{
  /* <ReactStars
               count={5}
               size={24}
               color2={'#ffd700'} // Selected star color
               />    */
}