import { timeline } from '@/constants'
import React from 'react'
import SectionHeading from './SectionHeading'

const Timeline = () => {
    return (
        <section className='max-width section-padding'>
            <SectionHeading
                title="Milestones of my career"
                subtitle="Key Achievements and Professional Highlights"
            />

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30">
                {timeline.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
                    >
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1 tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full group-first:before:bg-peach-600 group:last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full group-last:before:top-full group-last:before:bg-peach-600'>
                            <span className='w-3 h-3 bg-purple rounded-full'></span>
                        </div>
                        <div className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8">
                            <div>
                                <h5 className='text-grey-700'>{item.title}</h5>
                                <p className="font-semibold text-purple">{item.duration}</p>
                            </div>
                            <div className="text-grey-600">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline