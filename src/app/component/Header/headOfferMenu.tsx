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
                <div className="top1 bg-gradient-to-r from-[#600300] to-[#092f00] flex items-center p-3 justify-center gap-2 flex-col md:flex-row">
                    <h3 className="text-white flex text-base items-end">
                        All Featured Product 50% Off
                        <span className="ml-1">*</span>
                    </h3>

                    <div className="flex items-start flex-row md:flex-cols">
                        <button className="text-white  text-sm  rounded border-2 border-white  bg-black hover:bg-slate-400 w-18 h-7" type="button">
                            Shop Now
                        </button>
                        <button className="text-white border-2 border-white absolute right-36  bg-transparent w-7 rounded-sm hover:bg-slate-400" type="button" onClick={hideTopBar}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default HeadOfferMenu