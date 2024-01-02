import React from "react";

interface propsType {
  price: string;
  title: string;
}
const Humar_card: React.FC<propsType> = ({ price, title }) => {
  return (
    <div>
      <div className="space-y-2 py-3">
        <div className="flex gap-10 ">
            <div className="flex w-4 h-4 gap-1  ">
         <img src="./images/star.png"/>   
         <img src="./images/star.png"/>   
         <img src="./images/star.png"/>   
         <img src="./images/star.png"/>   
         <img src="./images/star.png"/> 

            </div>
        &nbsp;<div className="text-[15px] font-light">No reviews</div>
          
        </div>
        <div className=" text-[15px] font-semibold flex gap-1">
          ${price}
          <del className="text-orange-400 font-normal">
            ${parseInt(price) + 90}.00
          </del>
          <br></br>
        </div>

        {/* <h4 className="text-gray-200 font-normal">{title}</h4> */}

        <div className="font-light text-[15px]">{title}</div>
      </div>
      <div className="text-[15px] font-medium">
        Size : <small className="font-sans">32 x 16 x 72</small>{" "}
      </div>
      <div className="text-[15px] font-medium py-2">
        Color : &nbsp;
        <button className="bg-orange-400  rounded-full object-cover  w-7 h-7 py-2" />
        &nbsp;
        <button className="bg-purple-400  rounded-full object-cover  w-7 h-7 py-2" />
        &nbsp;
        <button className="bg-red-400     rounded-full object-cover  w-7 h-7 py-2" />
      </div>
      <div className="flex text-[15px] font-medium py-1">
        Material :
        &nbsp;<ul className="flex gap-2 text-[13px] font-normal ">
          <a href="#"><li className="hover:text-[#666666]">Cotton</li></a>
          <a href="#"><li className="hover:text-[#666666]">Wool</li></a>
          <a href="#"><li className="hover:text-[#666666]">Fiber</li></a>
          <a href="#"><li className="hover:text-[#666666]">Plastic</li></a>
        </ul>
      </div>
      <div className="flex text-[15px] font-medium py-2 ">
        <label>Quantity: </label>
        &nbsp;<input type="number" id="quantity" name="quantity" min="0" max="100" className="rounded-sm border-2 border-gray-200 px-2 "/>
      </div>
      <div className="flex py-2">
      <button className="bg-orange-500 text-white px-1 w-32 h-7 text-[10px]">ADD TO CART</button>
      &nbsp;<a href="#">
      <img src="./images/heart.png" alt="heart logo" className="w-9 h-7 rounded-sm border-2 border-gray-200  px-2 hover:bg-orange-400"/>
      </a>
      </div>
      <div className="flex text-[15px] font-medium ">Share :
        <div className="flex w-20 h-8 gap-2 py-1 ">
      <a href="#"><img src="./images/facebook.png" alt="facebook logo" className="hover:bg-orange-400"/></a>
      <a href="#"><img src="./images/twitter.png" alt="twitter logo"/></a>
      <a href="#"><img src="./images/google-plus-logo.png" alt="google logo"/></a>
      <a href="#"><img src="./images/pinterest.png" alt="pinterest logo"/></a>
       </div>
      </div>
      <div className="text-[12px]">Guaranteed safe checkout</div>
      <div className="flex gap-2 py-2">
        <img src="./images/amazon.svg"/>
        <img src="./images/apple_pay.svg"/>
        <img src="./images/bitcoin.svg"/>
        <img src="./images/google_pay.svg"/>
        <img src="./images/paypal-paytm.svg"/>
        <img src="./images/visa.svg"/>
      </div>
    </div>
  );
};
export default Humar_card;