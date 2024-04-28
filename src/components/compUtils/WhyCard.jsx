import React from 'react'
import Lottie from 'lottie-react'

const WhyCard = (props) => {
  return (
    <div className={` flex flex-col-reverse gap-6 ${props.class} `}>
      <div className=' lg:w-3/5 flex flex-col gap-2 justify-center items-center px-16'>
        <h1 className=' text-center text-3xl font-bold'>{props.title}</h1>
        <p className=' text-center'>{props.description}</p>
      </div>
      <div className=' lg:w-2/5 bg-gradient-to-r from-yellow-200 to-blue-900 p-6 rounded-3xl '>
        <div className=' flex justify-center bg-white rounded-3xl items-center p-4 h-[250px]'>
        <Lottie className=' w-full h-full' animationData={props.animation} />
        </div>
      </div>
    </div>
  )
}

export default WhyCard
