import { socialLinks } from '@/constants'
import { Mail, MapIcon, Phone } from 'lucide-react'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact - Dušan Aleksić"
}

const Contact = () => {
    return (
        <>
            <section className='max-width section-padding'>
                <div className="box text-center flex flex-col gap-3">
                    <h2 className="text-grey-700">I'd love to hear from you</h2>
                    <p className="text-gray-600 text-lg">
                        Feel free to reach out to me if you have any questions, project inquiries. I'm always open to new opportunities and collaborations. You can contact me via email or connect with me on social media. Looking forward to hearing from you!
                    </p>

                </div>
            </section>

            <section className="max-width w-full section-padding flex max-tablet:flex-col gap-16">
                <div className='w-full'>
                    <div className="space-y-4">
                        <div className="box !p-6">
                            <p className="text-grey-600 text-lg mb-2">You can email me here</p>
                            <div className="flex gap-2">
                                <Mail />
                                <a href="mailto:adusan53@gmail.com" className="text-grey-700 text-lg underline">adusan53@gmail.com</a> <br />
                            </div>
                        </div>

                        <div className="box !p-6">
                            <p className="text-grey-600 text-lg mb-2">You can contact me here</p>
                            <div className="flex gap-2">
                                <Phone />
                                <a href="tel:+381 1085057" className="text-grey-700 text-lg underline"> +381 1085057</a>
                            </div>
                        </div>

                        <div className="box !p-6">
                            <p className="text-grey-600 text-lg mb-2">Location</p>
                            <div className="flex gap-2">
                                <MapIcon />
                                <p className="text-grey-700 text-lg">Niš, Serbia</p>
                            </div>
                        </div>

                        <h5 className="mt-10 text-grey-700 max-tablet:text-center">
                            My Social Profiles
                        </h5>
                        <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.route} className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded">
                                    <link.icon strokeWidth={0} fill="currentColor" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact