"use client"

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
            name: "Socials",
            about: [
                "Socials is a dynamic blogging platform that blends content creation with AI-driven features for enhanced user experience and engagement.",
                "Leverages Google Gemini for AI support, enabling powerful content generation and editing assistance.",
                "Built on Cloudflare Workers using Hono JS, ensuring scalable and performant backend operations.",
                "Utilizes Prisma with connection pooling for fast and reliable database operations."
            ],
            tech: ["React.js", "React-Router", "Redux", "Prisma", "Google Gemini API", "Amazon S3", "Hono JS", "PostgreSQL", "Tailwind CSS", "Material-Tailwind"],
            liveSite: "https://socials-lilac.vercel.app/",
            sourceCode: "https://github.com/harshithrao07/socials",
            images: "/assets/projects/socials.png"
        },
        {
            name: "Serverless Library Portal",
            about: [
                "User authentication and authorization with Amazon Cognito, secure storage of book images and PDFs using Amazon S3, and seamless API integration with GraphQL and AWS AppSync.",
                "Payment processing and subscription management are handled through Stripe, while DynamoDB manages database storage for book, order, and cart-related information.",
                "Received commendation prize from WENAMITAA (NITTE Alumni Association) for undertaking this project."
            ],
            tech: ["React.js", "React-Router", "AWS Amplify", "AppSync", "GraphQL", "Amazon S3", "Cognito", "AWS Lambda", "DynamoDB", "Stripe", "Tailwind CSS", "Material-Tailwind"],
            liveSite: "https://dev.d3h7yvv3paeq66.amplifyapp.com/",
            sourceCode: "https://github.com/harshithrao07/serverless-libary",
            images: "/assets/projects/serverless-libray-portal.png"
        },
        {
            name: "Vanlife",
            about: [
                "Welcome to our user-friendly Van Rental App, designed with a strong emphasis on providing a seamless navigation experience and a polished interface to enhance overall usability.",
                "Integrated Firebase Authentication and Firestore Database for efficient and streamlined data storage."
            ],
            tech: ["React.js", "React-Router", "Vite.js", "Firebase Auth", "Firestore DB", "Netlify"],
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
            name: "Catadogs",
            about: [
                "Catadogs is an animal adoption website that allows users to choose animals for adoption from a list and send adoption requests to the admin",
                "It also provides admin capabilities to add or delete animals and their details as needed."
            ],
            tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap", "Cyclic"],
            // liveSite: "https://frightened-ruby-stockings.cyclic.app/",
            sourceCode: "https://github.com/harshithrao07/Catadogs",
            images: "/assets/projects/catadogs.png"

        },
        // {
        //     name: "Blogr",
        //     about: [
        //         "Blogr is a user-friendly blogging platform that prioritizes content creation.",
        //         "It also includes features for managing multiple blogs and day-to-day activities with a To-Do List."
        //     ],
        //     tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap", "Cyclic"],
        //     liveSite: "https://excited-jade-handkerchief.cyclic.app/",
        //     sourceCode: "https://github.com/harshithrao07/Blogr",
        //     images: "/assets/projects/blogr.png"

        // }
    ]

    const renderProjects = () => {
        return projects.map((project, index) => (
            <div
                key={index} className={`w-full grid md:grid-cols-2 ${index != 0 ? index == projects.length - 1 ? "mt-24" : "my-24" : "mb:24"}`}>
                <div className={`flex items-center md:order-2 justify-center ${index % 2 === 0 ? "md:order-2 md:ml-10" : "md:order-1 md:mr-10"}`}>
                    <Image
                        src={project.images}
                        height={1000}
                        width={1000}
                        alt={project.name}
                        className='relative translate-y-1 z-10'
                    />
                </div>
                <div className={`projects-card md:order-1 lg:p-6 rounded-2xl ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <h1 className='font-semibold text-2xl mt-3 lg:mt-0 px-3 lg:px-0 md:text-3xl mb-2 md:mb-3 rainbow-words'>{project.name}</h1>
                    <div className='flex px-3 lg:px-0 flex-wrap text-[10px] font-semibold md:text-xs gap-2 mb-2 md:mb-5'>
                        {
                            project.tech.map((tech, index) => (
                                <button key={index} className='py-0.5 md:py-1 px-2 bg-[#191919] rounded-xl cursor-default'>
                                    <span className=''>{tech}</span>
                                </button>
                            ))
                        }
                    </div>
                    <ul className='text-sm px-1 lg:px-0'>
                        {
                            project.about.map((desc, index) => (

                                <li key={index}>{desc}</li>
                            ))
                        }
                    </ul>
                    <div className={`flex md:gap-5 mt-2 justify-around md:mt-3 px-2 text-xs md:text-md mb-6 lg:mb-0`}>
                        {project.sourceCode && <button className='px-2 py-1 md:px-4 md:py-2 border rounded-full group source-code'><Link target='_blank' href={project.sourceCode}>Souce Code <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 inline group-hover:translate-x-1 group-hover:scale-110 duration-300 transform-gpu">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        </Link></button>}
                        {project.liveSite && <button className='px-2 py-1 md:px-4 md:py-2 border rounded-full golden-words border-[#ffae00] group live-site'><Link target='_blank' href={project.liveSite}>Live Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 inline group-hover:translate-x-1 group-hover:scale-110 duration-300 transform-gpu">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        </Link></button>}
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className='px-6 lg:px-16 lg:mb-16 mt-16 md:mt-24'>
            <div className='flex justify-start'>
                <h1 className='font-semibold border-b-2 md:border-b-4 border-[#FFAE00] w-fit mb-6 lg:mb-12 text-xl md:text-3xl'>Experiences</h1>
            </div>

            <div>
                {renderProjects()}
            </div>
            <div className='text-center my-10 lg:my-16'>
                <h1 className='text-xl lg:text-3xl font-semibold'>Check out some of my other projects on <Link href="https://github.com/harshithrao07" className='rainbow-words'>Github</Link></h1>
            </div>
        </div>
    )
}

export default Projects