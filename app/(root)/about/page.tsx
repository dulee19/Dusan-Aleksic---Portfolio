import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { Timeline } from '@/components'

export const metadata: Metadata = {
    title: 'About - Dušan Aleksić'
}

const About = () => {
    return (
        <>
            <section className='max-width section-padding flex flex-col tablet:flex-row gap-20 items-center'>
                <div className='relative w-full tablet:w-1/3 h-[65dvh] tablet:h-[650px] rounded-b-2xl overflow-hidden'>
                    <Image
                        src="/me.jpg"
                        alt="Me"
                        fill
                        className='object-cover'
                    />
                </div>

                <div className="tablet:w-1/2">
                    <div className="space-y-6 max-tablet:text-center flex flex-col">
                        <p className='px-4 py-2 bg-peach-500 text-grey-600 text-lg w-max rounded tablet:w-max max-tablet:mx-auto'>
                            Welcome to the world of captivating web development.
                        </p>
                        <h1 className="text-grey-700 my-5">I'm Dušan Aleksić</h1>
                        <p className='text-lg'> Crafting delightful user experiences with over 4 years of experience in frontend development, specializing in the MERN stack, TypeScript, and Next.js!</p>

                    </div>

                    <div className="rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2 tablet:border-b-2 tablet:border-purple w-full py-8 mt-10 gap-12 flex flex-col tablet:flex-row">
                        <div className='flex-1 py-8 px-10 rounded-lg bg-peach-400 col-span-2'>
                            <h3 className="text-grey-700">
                                55 <span className="text-purple">+</span>
                            </h3>
                            <p className="text-grey-600">Projects Completed</p>
                        </div>
                        <div className='flex-1 py-8 px-10 rounded-lg bg-peach-400 col-span-2'>
                            <h3 className="text-grey-700">
                                4 <span className="text-purple">+</span>
                            </h3>
                            <p className="text-grey-600">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            <Timeline />
        </>
    )
}

export default About