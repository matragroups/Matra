import React from "react";
import ForCard from "./ForCard";
import { ForData } from "./ComponentsData/ForData";

export default function For() {
    return (
        <div className="container mx-auto px-5 py-8 xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">
            <div className="border-2 border-neutral-900 bg-gradient-to-r from-yellow-200 to-blue-900 rounded-3xl p-8 flex flex-col gap-12  ">
                <div className=" flex flex-col justify-center text-white gap-2">
                    <h1 className=" text-3xl lg:text-5xl font-bold text-center">
                    Transforming Businesses
                    </h1>
                    <p className=" text-center"> Matra's Impactful Solutions for Every Business</p>
                </div>

                <div className="flex flex-col gap-12">
                {ForData.map((data, index)=><ForCard key={index} title1={data.title1} service1={data.service1} title2={data.title2} service2={data.service2} title3={data.title3} service3={data.service3}/>)}
                </div>
            </div>
        </div>
    )
}