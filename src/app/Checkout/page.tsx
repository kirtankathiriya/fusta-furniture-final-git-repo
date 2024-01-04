"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic from "../../../public/icon/logo.jpg";
import { FaShoppingBag } from "react-icons/fa";
import CommonForm from "./commonForm";
import Checkoutcard from "@/components/Checkoutcard";

const YourPage = () => {
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const handleBillingAddressToggle = () => {
    setShowBillingAddress(!showBillingAddress);
  };

  return (
    <>
      <section className=" border-t-7 p-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 caret-orange-500">
          <div className="container">
            <div className="contact flex sm:flex-row flex-col justify-between">
              <h2 className="font-semibold text-2xl">Contact</h2>
              <p className="text-black-100">
                Have an account ?{" "}
                <a
                  href="/Account/Loginpage"
                  className="text-[rgb(233,119,48)] underline"
                >
                  Log in
                </a>
              </p>
            </div>
            <form action="#">
              <label htmlFor="enter email" className="sr-only">
                Enter Email
              </label>
              <input
                type="email"
                placeholder="Email or Mobile Phone Number"
                className="w-full p-2 my-3"
              />

              <div className="flex flex-row gap-2 mt-1">
                <input
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  className="accent-orange-400 h-5 w-5"
                />
                <label htmlFor="news letter" className="items-center">
                  Email Me With News And Offer
                </label>
              </div>

              <h2 className="font-semibold text-2xl my-3">Delivery</h2>
              <CommonForm />

              <div className="flex flex-row gap-2 my-3">
                <label>
                  <input
                    type="checkbox"
                    className="accent-orange-400 h-5 w-5"
                  />
                </label>
                <label htmlFor="Information" className="items-center">
                  Save This Information For Next Time
                </label>
              </div>

              <div className="my-3">
                <h2 className="font-semibold text-2xl">Shipping Method</h2>
                <div className="flex p-5 border-1	border-orange-500 rounded bg-[#FEF4F2] justify-between">
                  <p>
                    Standard Shipping
                  </p>
                  <h3 className="font-semibold">$20</h3>
                </div>
              </div>

              <div className="payment">
                <h2 className="font-semibold text-2xl">Payment</h2>
                <p className="text-slate-400 font-normal p-5">
                  All Transactions Are Secure And Encrypted
                </p>
                <p className="p-5 border-1	border-orange-500 rounded bg-[#FEF4F2]">
                  Cash On Delivery (COD)
                </p>
              </div>

              <h2 className="font-semibold text-2xl mt-2">Billing address</h2>

              <div className="border-1 mt-3 border-orange-500 rounded bg-[#FEF4F2] mb-0">
                <div className="p-3 mt-2">
                  <input
                    type="radio"
                    name="same_shipment"
                    id="same_shipment"
                    className="w-4 h-4 border-gray-300"
                    checked={!showBillingAddress}
                    onChange={() => setShowBillingAddress(false)}
                  />
                  <label htmlFor="same_shipment" className="ml-2 p-2">
                    Same as shipping address
                  </label>
                </div>
                <span className="w-full h-0.5 bg-orange-500 block mt-[5px] mb-[5px]" />
                <div className="p-3 mt-2">
                  <input
                    type="radio"
                    name="same_shipment"
                    id="use_shipment"
                    className="w-4 h-4"
                    checked={showBillingAddress}
                    onChange={handleBillingAddressToggle}
                  />
                  <label htmlFor="use_shipment" className="ml-2 p-2">
                    Use a different billing address
                  </label>
                </div>
              </div>

              {showBillingAddress && (
                <div className="additional-billing-fields border-2 p-2 bg-[#0000000B] rounded mb-5">
                  <CommonForm />
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col self-start h-full bg-slate-100 rounded-md top px-4 gap-4 py-2">
            <div className="sticky top-32 flex flex-col gap-4">
              <div className="card-section flex flex-col gap-4">
                <Checkoutcard />
                <Checkoutcard />
                <Checkoutcard />
              </div>
              <div className="price-section flex flex-col gap-5 text-sm">
                <div className="subtotal flex flex-row justify-between">
                  <p>Subtotal</p>
                  <p>$1000</p>
                </div>
                <div className="shipping flex flex-row justify-between border-spacing-2 border-b-2 border-dashed">
                  <p>Shipping</p>
                  <p className="text-slate-400">$20</p>
                </div>
                <div className="total flex flex-row justify-between text-lg">
                  <p>Total</p>
                  <p>$1000</p>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-[#E97730] rounded text-white text-center p-2 font-medium">
            <button type="button">Complete Order</button>
          </section>
        </div>
      </section>
    </>
  );
};

export default YourPage;
