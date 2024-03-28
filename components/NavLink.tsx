"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type INavLinkProps = {
    href: string
    label: string
    className?: string
}

const NavLink = ({ href, label, className }: INavLinkProps) => {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`
            py-3 text-grey-700 hover:text-purple 
            transition-colors relative block after:block after:absolute 
            after:left-0 after:h-0.5 after:bg-purple 
            after:w-full after:scale-x-0 after:hover:scale-x-100 
            after:transtion after:duration-300 after:origin-right 
            after:hover:origin-right ${className} ${pathname === href ? 'after:scale-x-100 after:origin-right' : 'after:scale-x-0 after:origin-left'}
            `}
        >
            {label}
        </Link>
    )
}

export default NavLink