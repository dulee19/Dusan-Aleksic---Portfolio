import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { contactDetails, headerLinks, socialLinks } from '@/constants'

const Footer = () => {
    return (
        <footer className='py-10 border-t border-peach max-width'>
            <div className="flex items-center justify-center sm:justify-between flex-wrap gap-5">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={40}
                    />
                </Link>

                <div className="flex gap-3">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.route}
                            target="_blank"
                            className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
                        >
                            <link.icon strokeWidth={0} fill="currentColor" />
                        </a>
                    ))}
                </div>

            </div>

            <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
                {contactDetails.map((link) => (
                    <a key={link.id} className="flex justify-center flex-col items-center gap-1" href={link.id === 3 ? `` : `${link.id === 1 ? `tel:${link.text}` : `mailto:${link.text}`}`}>
                        <link.icon /> {link.text}
                    </a>

                ))}
            </div>

            <div className='text-center mt-5'>
                <p>&copy; {new Date().getFullYear()} | Dušan Aleksić | All Rights Reserved</p>
            </div>

        </footer>
    )
}

export default Footer