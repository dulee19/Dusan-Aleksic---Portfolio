import { skills } from '@/constants'
import Image from 'next/image'
import React from 'react'
import SectionHeading from './SectionHeading'

const Skills = () => {
    return (
        <section className='max-width section-padding'>
            <SectionHeading
                title="Creative Skills"
                subtitle="Bringing Ideas to Life"
            />

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
                {skills.map((skill, index) => (
                    <div key={index} className="box flex flex-1 flex-col items-center gap-5">
                        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 mb-2">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={35}
                                height={35}
                            />
                        </div>
                        <div className="text-center xl:h-[30dvh]">
                            <h4 className="text-grey-700">{skill.name}</h4>
                            <p className='text-grey-600 my-2'>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills