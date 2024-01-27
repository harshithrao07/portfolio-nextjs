import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: "Sneakers",
            about: [
                "Immerse yourself in the dynamic universe of sneakers, where we cover everything from the latest trends to timeless classics.",
                "Utilized React, React Router, Tailwind CSS, Material-Tailwind, Node.js, Express, MongoDB, Axios, JWT, and Stripe for a modern and robust e-commerce website."
            ],
            tech: ["React.js", "React-Router", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "Material-Tailwind", "Vercel"],
            liveSite: "https://sneakers-client.vercel.app/",
            sourceCode: "https://github.com/harshithrao07/sneakers",
            images: "/assets/projects/sneakers.png"
        },
        {
            name: "Vanlife",
            about: [
                "Welcome to our user-friendly Van Rental App, designed with a strong emphasis on providing a seamless navigation experience and a polished interface to enhance overall usability.",
                "Integrated Firebase Authentication and Firestore Database for efficient and streamlined data storage."
            ],
            tech: ["React.js", "React-Router", "Vite.js", "Firebase Auth", "Firestore DB",  "Netlify"],
            liveSite: "https://the-vanlife.netlify.app/",
            sourceCode: "https://github.com/harshithrao07/-vanlife",
            images: "/assets/projects/vanlife.png"
        },
        {
            name: "Space Tourism",
            about: [
                "Engaged in the Frontend Mentor Space Tourism Challenge, deploying an immersive webpage using Vue.js and Nuxt.js to create a dynamic and visually striking user interface.",
                "Integrated Vuetify for enhanced aesthetics and leveraged Firestore for seamless data storage.",
                "The outcome is a captivating front page inviting users to explore the marvels of outer space through a modern and feature-rich web experience."
            ],
            tech: ["Vue.js", "Nuxt.js", "Firebase", "Vuetify", "Vercel"],
            liveSite: "https://tourism-space.vercel.app/",
            sourceCode: "https://github.com/harshithrao07/space-tourism",
            images: "/assets/projects/space-tourism.png"
        },
        {
            name: "Kenfront and SpendControl",
            about: [
                "An engaging multi-page landing site for Kenfront Consulting Private Limited and its product , SpendControl with animations using Anime.js.",
                "Built using latest technologies which offers enhanced performance resulting in a seamless user experience."
            ],
            tech: ["Vue.js", "Nuxt.js", "Vuetify", "Anime.js", "Netlify"],
            liveSite: "https://kenfront.netlify.app/",
            images: "/assets/projects/kenfront.png"
        },
        {
            name: "Portfolio Website",
            about: [
                "An engaging multi-page landing site for Kenfront Consulting Private Limited and its product , SpendControl with animations using Anime.js.",
                "Built using latest technologies which offers enhanced performance resulting in a seamless user experience."
            ],
            tech: ["React.js", "Next.js", "Tailwind CSS", "Material-Tailwind"],
            images: "/assets/projects/portfolio.png"
        },
        {
            name: "Catadogs",
            about: [
                "Catadogs is an animal adoption website that allows users to choose animals for adoption from a list and send adoption requests to the admin",
                "It also provides admin capabilities to add or delete animals and their details as needed."
            ],
            tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap", "Cyclic"],
            liveSite: "https://frightened-ruby-stockings.cyclic.app/",
            sourceCode: "https://github.com/harshithrao07/Catadogs",
            images: "/assets/projects/catadogs.png"

        },
        {
            name: "Blogr",
            about: [
                "Blogr is a user-friendly blogging platform that prioritizes content creation.",
                "It also includes features for managing multiple blogs and day-to-day activities with a To-Do List."
            ],
            tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap", "Cyclic"],
            liveSite: "https://excited-jade-handkerchief.cyclic.app/",
            sourceCode: "https://github.com/harshithrao07/Blogr",
            images: "/assets/projects/blogr.png"

        }
    ]

    const renderProjects = () => {
        return projects.map((project, index) => (
            <div key={index} className={`w-full grid grid-cols-2 my-24`}>
                <div className={`projects-card p-8 rounded-2xl ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    <h1 className='font-semibold text-3xl mb-3 rainbow-words'>{project.name}</h1>
                    <div className='flex flex-wrap text-xs gap-2 mb-5'>
                        {
                            project.tech.map((tech, index) => (
                                <button key={index} className='py-0.5 px-1.5 bg-[#191919] rounded-xl cursor-default'>
                                    <span className=''>{tech}</span>
                                </button>
                            ))
                        }
                    </div>
                    <ul>
                        {
                            project.about.map((desc, index) => (

                                <li key={index}>{desc}</li>
                            ))
                        }
                    </ul>
                    <div className={`flex gap-5 mt-3`}>
                        {project.sourceCode && <button className='px-4 py-2 border rounded-full'><Link target='_blank' href={project.sourceCode}>Souce Code <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        </Link></button>}
                        {project.liveSite && <button className='px-4 py-2 border rounded-full golden-words border-[#ffae00]'><Link target='_blank' href={project.liveSite}>Live Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        </Link></button>}
                    </div>
                </div>
                <div className={`flex items-center justify-center ${index % 2 === 0 ? "order-2 ml-10" : "order-1 mr-10"}`}>
                    <Image
                        src={project.images}
                        height={1000}
                        width={1000}
                        alt={project.name}
                     />
                </div>
            </div>
        ))
    }

    return (
        <div className='px-6 lg:px-16 lg:mb-16 lg:mt-24'>
            <div className='flex justify-center md:justify-start'>
                <h1 className='font-semibold border-b-4 border-[#FFAE00] w-fit lg:mb-4 text-xl md:text-3xl'>Experiences</h1>
            </div>

            <div>
                {renderProjects()}
            </div>
        </div>
    )
}

export default Projects