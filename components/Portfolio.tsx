import React from 'react'
import Link from 'next/link'
import PortfolioItem from './PortfolioItem'
import SectionHeading from './SectionHeading'
import { portfolios } from '@/constants'

const Portfolio = () => {
    return (
        <section className='max-width section-padding'>
            <SectionHeading
                title="My Works"
                subtitle="Explore My Portfolio Projects"
            />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5">
                {portfolios.map((portfolio, index) => (
                    <PortfolioItem key={index} portfolio={portfolio} />
                ))}
            </div>

            <Link href="/portfolio" className='btn btn-primary mt-10 mx-auto w-max'>View All Projects</Link>
        </section>
    )
}

export default Portfolio