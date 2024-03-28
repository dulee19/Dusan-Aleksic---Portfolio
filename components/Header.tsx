import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { headerLinks } from '@/constants'

const Header = () => {
    return (
        <header className='flex items-center justify-between h-20 max-width border-b border-beach'>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={40}
                />
            </Link>
            <nav className='flex items-center gap-12 max-tablet:hidden'>
                <ul className='flex items-center gap-8'>
                    {headerLinks.map((link) => (
                        <li key={link.label}>
                            <NavLink href={link.route} label={link.label} />
                        </li>
                    ))}
                </ul>
            </nav>
            <MobileMenu />
        </header>
    )
}

export default Header