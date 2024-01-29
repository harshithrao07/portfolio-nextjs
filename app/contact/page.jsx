"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    const form = useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await emailjs.sendForm('service_vod1p0a', 'template_al95c7n', form.current,
                '57cwqyYgGke5oEHhS')
            if (res) alert("Sent message succesfully.")
        } catch (error) {
            alert("Unfortunately we could not send the message. Try again later.")
        }
    }

    const icons = [
        {
            icon: faLinkedin,
            name: "Linkedin",
            link: "https://www.linkedin.com/in/harshithrao07/"
        },
        {
            icon: faGithub,
            name: "Github",
            link: "https://github.com/harshithrao07/"
        },
        {
            icon: faInstagram,
            name: "Instagram",
            link: "https://www.instagram.com/harshith._.rao/"
        },
        {
            icon: faEnvelope,
            name: "Gmail",
            link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=harshithrao316@gmail.com"
        }
    ]

    return (
        <div className='px-6 lg:px-16 lg:mb-14 mt-16 mb-5 md:mt-28 md:h-max'>
            <div className='flex justify-start'>
                <h1 className='font-semibold border-b-2 md:border-b-4 border-[#FFAE00] w-fit mb-2 lg:mb-6 text-xl md:text-3xl'>Contact Me</h1>
            </div>

            <div className='grid md:grid-cols-2'>
                <div>
                    <form ref={form} onSubmit={handleSubmit} className='flex-col flex items-center justify-center'>
                        <input name="from_name" type='text' required placeholder='Your name' className='block bg-[#191919] my-2 md:my-3 py-2 px-2 md:px-4 rounded-md w-full focus:bg-[#07070761] text-sm md:text-md' />
                        <textarea name="message" required placeholder='Your message' className='block bg-[#191919] my-2 md:my-3 py-2 px-2 md:px-4 rounded-md w-full focus:bg-[#07070761] h-28 text-sm md:text-md' />
                        <button className='uppercase py-1 px-3 lg:py-2 lg:px-9 border shadow-none text-xs mt-2 md:mt-0 md:text-sm font-thin bg-transparent rounded-md hover:bg-[#191919]'><span>Submit</span></button>
                    </form>
                </div>
                <div className='grid place-content-center place-items-center gap-y-2 md:gap-y-3 mt-8 md:mt-0'>
                    <h3 className='text-2xl md:text-3xl rainbow-words font-semibold'>Get in touch!</h3>
                    {
                        icons.map((icon, index) => (
                            <Link key={index} href={icon.link} target='_blank' className='hover:cursor-pointer flex text-gray-400 hover:text-white'>
                                <FontAwesomeIcon
                                    className='text-md md:text-lg lg:text-xl'
                                    icon={icon.icon}
                                /><span className='ml-2 text-sm'>{icon.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact