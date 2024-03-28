import React from 'react'
import { Footer, Header } from '@/components'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </>
    )
}

export default layout