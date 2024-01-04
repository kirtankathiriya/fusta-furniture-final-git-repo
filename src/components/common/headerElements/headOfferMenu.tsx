"use client"
import React, { useState } from "react";

type Props = {}

const HeadOfferMenu = (props: Props) => {
    const [topBarVisible, setTopBarVisible] = useState(true);
    const hideTopBar = () => {
        setTopBarVisible(false);
    }

    return (
        <>
            {/* header offer menu  */}
            {topBarVisible && (
                <section className="top0 bg-gradient-to-r from-[#600300] to-[#092f00] flex items-center py-2 justify-center gap-2 flex-col md:flex-row">
                    <h3 className="text-white flex text-sm items-end">
                        All Featured Product 50% Off
                        <span className="ml-1">*</span>
                    </h3>

                    <div className="flex items-start flex-row md:flex-cols justify-between">
                        <button className="text-white  text-sm  rounded border-2 border-white  bg-black hover:bg-slate-400 px-2" type="button">
                            Shop Now
                        </button>
                        {/* <button className="text-white border-2 border-white absolute bg-transparent w-7 rounded-sm hover:bg-slate-400 right-3 md:right-5" type="button" onClick={hideTopBar}>X</button> */}
                        <button className="text-white border-2 border-white absolute bg-transparent w-5 text-sm rounded-sm hover:bg-slate-400 right-3 md:right-5 md:mx-14" type="button" onClick={hideTopBar}>X</button>
                    </div>
                </section>
            )}
        </>
    )
}

export default HeadOfferMenu