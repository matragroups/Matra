import React from "react";

export default function Hero() {
    return (
        <div className=" px-5 py-8 lg:px-10 xl:px-16 lg:py-6">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex w-1/2 justify-center items-center mx-auto rounded-3xl">
                    <img className="my-auto" src="./matra.png" width={"100%"} />
                </div>
                <div className="md:w-[60%] md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                    <h1 className="text-3xl text-center md:text-start lg:text-5xl font-bold pb-6 leading-12 lg:leading-20">Empowering Local Businesses Online with Stunning Websites.</h1>
                    <p className="text-base md:text-lg text-center md:text-start ">
                        At Matra, we're not just building websites, we're crafting digital experiences that propel businesses forward. <br /> <br />
                        {/* With personalized attention, affordable prices, and lightning-fast turnaround times, we craft online solutions that elevate your brand. Experience the Matra difference today and unlock your business's full potential! */}
                    </p>
                    <div className="mt-6 py-3 flex justify-center md:justify-start">
                        <a href="#" className="lg:border-2 border-black rounded-lg text-[#febe12] hover:text-black bg-black px-6 py-3 hover:bg-[#febe12] transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-[#febe12]">Book a consultation</a>
                    </div>
                </div>

            </div>

        </div>
    )
}