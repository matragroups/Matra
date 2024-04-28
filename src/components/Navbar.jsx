import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full py-3 px-5 lg:px-10 xl:px-16 fixed z-50 bg-white shadow-lg">
            <div className="mx-auto lg:flex lg:items-center  h-full">
                <div className="flex items-center justify-between">
                    <div className="w-auto pr-6 flex justify-start items-center gap-4">
                        <a href="#" className="bg-[#12111f] h-16 w-16 rounded-lg" >
                            <img className=" h-16 w-16 object-cover " src="./logo.png" alt="logo" />
                        </a>
                        <a href="#" className="text-2xl font-bold">
                        Matra
                        </a>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex items-center lg:justify-between text-center lg:mt-0 h-full`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center w-full gap-4 justify-end lg:pr-12">
                        
                        <a
                            href="#"
                            className=" px-4 py-2 bg-transparent text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-[#febe12] hover:underline"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 bg-transparent text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-[#febe12] hover:underline"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 bg-transparent text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-[#febe12] hover:underline"
                        >
                            About
                        </a>
                        
                        <a
                            href="#"
                            className=" px-4 py-2 bg-transparent text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-[#febe12] hover:underline"
                        >
                            Let's Talk
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 bg-transparent text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-[#febe12] hover:underline"
                        >
                            Work with us
                        </a>

                    </div>


                    <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 gap-4 rounded-full text-black lg:flex-row">
                        <a
                            href="#"
                            className=" py-2 px-8 w-56 flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#12111f] hover:bg-[#febe12] border-[#febe12] border-2 hover:bg-[#7defe0]focus:outline-none focus:ring-2 
                             transition-all duration-300 ease-in-out text-[#febe12] hover:text-[#12111f] items-center uppercase rounded-lg justify-center hover:shadow-lg hover:shadow-[#febe12]"
                        >
                            Contact us
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

