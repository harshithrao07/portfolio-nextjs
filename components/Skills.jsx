import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Skills = () => {
    const skills = {
        languages: [
            {
                name: "C",
                image: "/assets/skills/languages/c.png"
            },
            {
                name: "C++",
                image: "/assets/skills/languages/c-.png"
            },
            {
                name: "Java",
                image: "/assets/skills/languages/java.png"
            },
            {
                name: "HTML",
                image: "/assets/skills/languages/html.png"
            },
            {
                name: "CSS",
                image: "/assets/skills/languages/css-3.png"
            },
            {
                name: "JavaScript",
                image: "/assets/skills/languages/js.png"
            }
        ],
        frameworks: [
            {
                name: "React.js",
                image: "/assets/skills/frameworks/react.png"
            },
            {
                name: "Vue.js",
                image: "/assets/skills/frameworks/vuejs.png"
            },
            {
                name: "Next.js",
                image: "/assets/skills/frameworks/nextjs.png"
            },
            {
                name: "Nuxt.js",
                image: "/assets/skills/frameworks/nuxt-js-icon.png"
            },
            {
                name: "Node.js",
                image: "/assets/skills/frameworks/nodejs.png"
            },
            {
                name: "Express.js",
                image: "/assets/skills/frameworks/express.png"
            },
            {
                name: "Spring Boot",
                image: "/assets/skills/frameworks/spring.svg"
            },
            {
                name: "EJS",
                image: "/assets/skills/frameworks/ejs.svg"
            },
            {
                name: "MySql",
                image: "/assets/skills/frameworks/mysql.png"
            },
            {
                name: "MongoDB",
                image: "/assets/skills/frameworks/mongodb.png"
            },
            {
                name: "Tailwind CSS",
                image: "/assets/skills/frameworks/tailwind.png"
            },
            {
                name: "Bootstrap",
                image: "/assets/skills/frameworks/bootstrap.png"
            },
            {
                name: "Vuetify",
                image: "/assets/skills/frameworks/vuetify.svg"
            },
        ],
        tools: [
            {
                name: "Git",
                image: "/assets/skills/tools/git.png"
            },
            {
                name: "GitHub",
                image: "/assets/skills/tools/github.png"
            },
            {
                name: "Netlify",
                image: "/assets/skills/tools/netlify.png"
            },
            {
                name: "Vercel",
                image: "/assets/skills/tools/vercel.png"
            },
            {
                name: "Postman",
                image: "/assets/skills/tools/postman-icon.png"
            }
        ]
    }

    const renderSkills = (category, index) => {
        const data = skills[category];

        return (
            <div key={index} className={`my-5 lg:my-12 ${category !== 'languages' ? 'border-t border-[#ffffff20]' : ''}`}>
                <h3 className='text-xl lg:text-2xl my-5 lg:my-10 rainbow-words font-semibold'>{category === 'languages' ? 'Languages' : category === 'frameworks' ? 'Frameworks and Libraries' : 'Tools and Tech'}</h3>
                <div className='flex justify-center gap-4 md:gap-10 lg:gap-x-20 lg:gap-y-10 flex-wrap'>
                    {data.map((item, index) => (
                        <div className='flex-col items-center' key={index}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                height={80}
                                width={80}
                                className='skill-icons mx-auto pt-[20%] md:pt-0'
                            />
                            <p className='mt-3 text-xs lg:text-[14px]'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='px-6 lg:px-16 lg:my-16'>
            <div className='flex justify-start'>
                <h1 className='font-semibold border-b-2 md:border-b-4 border-[#FFAE00] w-fit lg:mb-4 text-xl lg:text-3xl'>Skills</h1>
            </div>

            <div className='text-center'>
                {renderSkills('languages')}
                {renderSkills('frameworks')}
                {renderSkills('tools')}
            </div>

        </div>
    )
}

export default Skills