import React from 'react'

const ForCard = (props) => {
    return (
        <div className="flex flex-col lg:flex-row bg-white text-black rounded-3xl text-left px-8 py-12 lg:justify-between gap-6">
            <div className=" flex flex-col gap-4 md:w-1/3 ">
                <h1 className=' text-2xl font-bold'>
                    {props.title1}
                </h1>
                <div>
                    <p className="pb-6">
                        {props.service1}
                    </p>
                    <div>
                        <a href="#" className="text-[#febe12] hover:bg-black rounded-xl px-4 py-2 transition-all duration-300 ease-in-out">
                            Learn more
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:h-100 border-2 border-black rounded-full"></div>
            <div className=" flex flex-col gap-4 md:w-1/3 ">
                <h1 className=' text-2xl font-bold'>
                    {props.title2}
                </h1>
                <div>
                    <p className="pb-6">
                        {props.service2}
                    </p>
                    <div>
                        <a href="#" className="text-[#febe12] hover:bg-black rounded-xl px-4 py-2 transition-all duration-300 ease-in-out">
                            Learn more
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:h-100 border-2 border-black rounded-full"></div>
            <div className=" flex flex-col gap-4 md:w-1/3 ">
                <h1 className=' text-2xl font-bold'>
                    {props.title3}
                </h1>
                <div>
                    <p className="pb-6">
                        {props.service3}
                    </p>
                    <div>
                        <a href="#" className="text-[#febe12] hover:bg-black rounded-xl px-4 py-2 transition-all duration-300 ease-in-out">
                            Learn more
                            <img className="-rotate-45 w-6 inline-block pl-2" src="./LimeArrow.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForCard
