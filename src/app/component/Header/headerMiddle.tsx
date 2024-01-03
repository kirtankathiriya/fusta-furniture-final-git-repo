"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {};

const HeaderMiddleMenu = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="grid   md:px-28 grid-cols-1 md:grid-cols-2 bg-[#E97730] text-white font-semibold">
           
            <div className="m-3 text-center  md:text-start ">
                <h2>Welcome To Fusta-Demo</h2>
            </div>
            <div className="relative flex justify-center items-center md:justify-end ">
                <button type="button" onClick={toggleMenu}>
                    India USD($)
                </button>
                <IoMdArrowDropdown
                    className="mt-1 md:mt-0 cursor-pointer mr-0"
                    onClick={toggleMenu}
                />
                {isMenuOpen && (
                    <div className="absolute right-0 bg-[#333333] flex flex-col text-center z-30 top-5 md:top-11 pl-5">
                        <a href="#" className="hover:text-[#E97730]">Argentina USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Algeria USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Afghanistan USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Angola USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Australia USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Austria USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Albania USD($)</a>
                        <a href="#" className="hover:text-[#E97730]">Armenia USD($)</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeaderMiddleMenu;
