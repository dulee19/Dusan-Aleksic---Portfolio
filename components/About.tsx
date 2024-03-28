import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

const About = () => {
    return (
        <>
            <section className='flex items-center max-width flex-col-reverse tablet:md:flex-row my-10'>
                <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
                    <div className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
                        <h1 className='py-2' data-aos="fade-down">Dušan Aleksić</h1>
                        <p className='text-grey-600 text-lg' data-aos="fade-up">Hi there! I'm Dušan Aleksić, a passionate frontend developer with a keen eye for design and a love for crafting beautiful, user-friendly experiences. With a background in Computer Science. I bring a combination of technical expertise and creativity to every project I work on.</p>
                    </div>

                    <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
                        <Link href="/contact" className='btn btn-primary'>
                            <Phone />
                            Contact
                        </Link>

                        <Link href="/contact" className='btn'>
                            <ArrowRight size={16} />
                            View Portfolio
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:flex gap-3 mt-16">
                        <div className='py-8 px-10 rounded-lg bg-peach-400 col-span-2'>
                            <h3 className="text-grey-700">
                                55 <span className="text-purple">+</span>
                            </h3>
                            <p className="text-grey-600">Projects Completed</p>
                        </div>
                        <div className='py-8 px-10 rounded-lg bg-peach-400 col-span-2'>
                            <h3 className="text-grey-700">
                                4 <span className="text-purple">+</span>
                            </h3>
                            <p className="text-grey-600">Years of Experience</p>
                        </div>
                    </div>

                </div>


                <div data-aos="fade-down" className='relative w-full tablet:w-1/3 h-[65dvh] tablet:h-[650px] rounded-b-2xl overflow-hidden'>
                    <Image
                        src="/me.jpg"
                        alt="Me"
                        fill
                        className='object-cover'
                    />
                </div>

            </section>

        </>
    )
}

export default About