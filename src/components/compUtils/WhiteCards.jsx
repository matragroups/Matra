import React from "react";

export default function WhiteCards(props) {
    return (
        <div>
            <div className="flex flex-col sm:flex-row border-2 border-black rounded-3xl ">

                <div className=" sm:w-1/2 flex flex-col text-center sm:text-left justify-between p-10 lg:pr-0 gap-6 ">
                    <div className="lg:text-lg xl:text-2xl lg:font-medium xl:font-semibold flex justify-center sm:flex-col xl:gap-2 flex-wrap">
                        <div className="mb-4">
                            <span className="bg-lime-400 rounded-l-lg sm:rounded-lg p-2 sm:p-2">{props.line1}</span>
                        </div>
                        <div className="mb-4">
                            <span className="bg-lime-400 rounded-r-lg sm:rounded-lg p-2 pl-0 sm:p-2">{props.line2}</span>
                        </div>
                    </div>

                    <div className=" flex sm:hidden justify-center items-center">
                        <img className=" w-40 " src={props.image} />
                    </div>


                    <div className="flex items-center justify-center sm:justify-start">
                        <a
                            href={props.link}
                            className="h-auto lg:text-base xl:text-lg text-center transition duration-30  hover:bg-black hover:text-white pr-8 rounded-full"
                        >
                            <img
                                className="-rotate-45 w-12 h-12 inline-block p-3 bg-black rounded-full"
                                src="./LimeArrow.svg"
                            />
                            <span className="pl-4 text-center">Learn more</span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 hidden sm:flex justify-center items-center">
                    <img className=" w-40 " src={props.image} />
                </div>
            </div>
        </div>
    );
}
