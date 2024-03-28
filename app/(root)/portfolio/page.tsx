import React from 'react'
import { Metadata } from 'next'
import { PortfolioSection } from '@/components'
import { portfolios } from '@/constants'

export const metadata: Metadata = {
    title: "Portfolio - Dušan Aleksić"
}

const Portfolio = () => {
    return (
        <>
            <section className='max-width section-padding'>
                <div className="box text-center flex flex-col gap-3">
                    <h2 className="text-grey-700">My Creative Portfolios</h2>
                    <p className="text-gray-600 text-lg">Explore a showcase of my creative works, ranging from web designs to interactive prototypes, demonstrating my passion for blending aesthetics with functionality to deliver compelling user experiences.</p>
                </div>
            </section>

            <PortfolioSection data={portfolios} title="Recent projects I have done" />
        </>
    )
}

export default Portfolio