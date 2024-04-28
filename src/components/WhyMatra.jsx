import React from 'react'
import WhyCard from './compUtils/WhyCard'
import Tailored from './Animation/Tailored.json'
import Expert from './Animation/Expert.json'
import Affordable from './Animation/Affordable.json'
import Personalized from './Animation/Personalized.json'
import Quick from './Animation/Quick.json'
import CustomerService from './Animation/CustomerService.json'
import TrackRecord from './Animation/TrackRecord.json'
import { WhyData } from './ComponentsData/WhyData'

const WhyMatra = () => {
    return (
        <div className=' px-5 py-8 lg:px-10 xl:px-16 lg:py-6 flex flex-col gap-12'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className=' text-3xl font-bold'>Why Choose Matra?</h1>
                <p className=' text-center'>Matra is your trusted partner for all your web services needs.</p>
            </div>
            <div className=' flex flex-col gap-20'>
                <WhyCard class="lg:flex-row" title={WhyData[0].title} description={WhyData[0].description} animation={Tailored} />
                <WhyCard class="lg:flex-row-reverse" title={WhyData[1].title} description={WhyData[1].description} animation={Expert} />
                <WhyCard class="lg:flex-row" title={WhyData[2].title} description={WhyData[2].description} animation={Affordable} />
                <WhyCard class="lg:flex-row-reverse" title={WhyData[3].title} description={WhyData[3].description} animation={Personalized} />
                <WhyCard class="lg:flex-row" title={WhyData[4].title} description={WhyData[4].description} animation={Quick} />
                <WhyCard class="lg:flex-row-reverse" title={WhyData[5].title} description={WhyData[5].description} animation={CustomerService} />
                <WhyCard class="lg:flex-row" title={WhyData[6].title} description={WhyData[6].description} animation={TrackRecord} />
            </div>
        </div>
    )
}

export default WhyMatra
