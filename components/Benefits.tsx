import React from 'react'
import SectionHeading from './SectionHeading'
import { benefits } from '@/constants'

const Benefits = () => {
    return (
        <section className='max-width section-padding'>
            <SectionHeading
                title="Benefits"
                subtitle="Discover What Sets Me Apart"
            />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5">
                {benefits.map((benefit, index) => (
                    <div key={index} className="box">
                        <h4 className="text-grey-700">{benefit.name}</h4>
                        <p className='text-grey-600 my-2'>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits