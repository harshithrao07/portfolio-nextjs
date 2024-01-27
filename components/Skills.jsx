import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const languages = [
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
    ]

    const frameworks = [
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
    ]

    const tools = [
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
        },
        {
            name: "PlatformIO",
            image: "/assets/skills/tools/PlatformIO_logo.svg"
        }
    ]

    const renderLanguages = () => {
        return languages.map((language, index) => (
            <div className='flex-col items-center' key={index}>
                <Image
                    src={language.image}
                    alt={language.name}
                    height={75}
                    width={75}
                    className='skill-icons'
                />
                <p className='mt-2'>{language.name}</p>
            </div>
        ))
    }

    const renderFrameworks = () => {
        return frameworks.map((framework, index) => (
            <div className='flex-col items-center' key={index}>
                <Image
                    src={framework.image}
                    alt={framework.name}
                    height={75}
                    width={75}
                    className='skill-icons'
                />
                <p className='mt-2'>{framework.name}</p>
            </div>
        ))
    }

    const renderTools = () => {
        return tools.map((tool, index) => (
            <div className='flex-col items-center' key={index}>
                <Image
                    src={tool.image}
                    alt={tool.name}
                    height={75}
                    width={75}
                    className='skill-icons'
                />
                <p className='mt-2'>{tool.name}</p>
            </div>
        ))
    }

    return (
        <div className='px-16 my-16'>
            <h1 className='font-semibold border-b-4 border-[#FFAE00] w-fit mb-4'>Skills</h1>

            <div className='text-center'>
                <div className='my-16'>
                    <h3 className='text-2xl my-8 rainbow-words font-semibold'>Languages</h3>
                    <div className='flex justify-center gap-20'>
                        {renderLanguages()}
                    </div>
                </div>
                <div className='my-16 border-t border-[#ffffff20]'>
                    <h3 className='text-2xl my-8 rainbow-words font-semibold'>Frameworks and Libraries</h3>
                    <div className='flex justify-center gap-20 flex-wrap'>
                        {renderFrameworks()}
                    </div>
                </div>
                <div className='my-16 border-t border-[#ffffff20]'>
                    <h3 className='text-2xl my-8 rainbow-words font-semibold'>Tools and Tech</h3>
                    <div className='flex justify-center gap-20 flex-wrap'>
                        {renderTools()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills