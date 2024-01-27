import Link from 'next/link'
import React from 'react'

const Experience = () => {

    const experiences = [
        {
            name : "Access Research Labs (ARL)",
            title : "Fullstack Developer",
            link : "https://accessresearchlabs.com/",
            duration : "Jan 2024 - present",
            description: [
                "Developed master-slave ESP32 communication using ESP-NOW and C programming.",
                "Implemented MAC learning for efficient communication, configuring clear master and slave roles with unique identifiers.",
                "Configured ESP32 system for both unicast and broadcast data communication, ensuring reliability in real device testing.",
                "Thoroughly tested on real ESP32 devices using PlatformIO commands for building, uploading, and debugging."
            ],
        },
        {
            name : "Exelon Circuits Pvt. Ltd.",
            title : "Frontend Web Developer",
            link : "https://exeloncircuits.com/",
            duration : "Jul 2023 - Aug 2023",
            description: [
                "Worked on building a multi page landing site for a US client, Kenfront Consulting Private Limited and its product, SpendControl using the latest technologies such as Nuxt 3 and Vue 3.",
                "Planning and developing Interactive Static websites with Animations using Anime.js",
                "Involved in designing, building & optimizing pages, with performance, user experience and SEO in mind."
            ],
            certificate : "https://drive.google.com/file/d/1ExALBSUU37tgpmQmStKxYJBSch5oeA6y/view"
        },
    ]

    const renderExperiences = () => {
        return experiences.map((experience, index) => (
            <div key={index} className='experience-card my-10'>
                <div className='p-4'>
                    <h1 className='font-semibold'>{experience.name}&nbsp;
                        <Link href={experience.link} className="text-white" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                        </Link>
                    </h1>
                    <p className='rainbow-words font-semibold'>{experience.title}</p>
                    <p>{experience.duration}</p>
                </div>
                <div className='p-4 border-t border-[#ffffff20]'>
                    {
                        experience.description.map((desc, index) => (
                            <ul key={index}>
                                <li>{desc}</li>
                            </ul>
                        ))
                    }
                    {
                        experience.certificate && 
                        <button className='mt-3 ml-3 uppercase border px-4 py-2 border-[#ffffff20] hover:border-[#FFAE00] group transition duration-300 transform'>
                            <Link href={experience.certificate} className='group-hover:text-[#ffae00] transition duration-300 transform' target='_blank'>
                                Certificate
                            </Link>
                        </button>
                    }
                </div>
            </div>
        ))
    }

    return (
        <div className='px-16 my-16'>
            <h1 className='font-semibold border-b-4 border-[#FFAE00] w-fit mb-4'>Experiences</h1>

            <div className='my-10'>
                {renderExperiences()}
            </div>
        </div>
    )
}

export default Experience