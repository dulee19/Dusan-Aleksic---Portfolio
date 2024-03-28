"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { headerLinks, socialLinks } from '@/constants'
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className='tablet:hidden'>
            <button onClick={toggleMenu} className="text-grey-700 hover:text-purple transition-colors">
                <Menu />
            </button>

            <aside className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex w-full items-center justify-between h-20 max-width border-b border-peach'>
                    <Link href="/">
                        <h5 className="text-purple text-xl font-semibold">Dušan Aleksić</h5>
                    </Link>
                    <button onClick={toggleMenu} className="text-grey-700 hover:text-purple transition-colors">
                        <X />
                    </button>
                </div>

                <nav className='flex flex-col items-center flex-1 justify-center gap-12'>
                    <ul className='flex items-center flex-col gap-8'>
                        {headerLinks.map((link) => (
                            <li key={link.label}>
                                <NavLink href={link.route} label={link.label} className="text-2xl" />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="w-full h-20 flex items-center justify-between max-width border-t border-peach">
                    {socialLinks.map((link) => (
                        <a href={link.route} className="text-grey-700 hover:text-purple transition-colors" target="_blank">
                            {link.label}
                        </a>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default MobileMenu