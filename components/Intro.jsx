import { Typewriter } from 'nextjs-simple-typewriter'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Intro = () => {

    const icons = [
        {
            name: faLinkedin,
            link: "https://www.linkedin.com/in/harshithrao07/"
        },
        {
            name: faGithub,
            link: "https://github.com/harshithrao07/"
        },
        {
            name: faInstagram,
            link: "https://www.instagram.com/harshith._.rao/"
        },
        {
            name: faEnvelope,
            link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=harshithrao316@gmail.com"
        }
    ]

    const renderSocialMediaIcons = () => {
        return icons.map((icon, index) => (
            <Link key={index} href={icon.link} target='_blank'>
                <FontAwesomeIcon
                    className='hover:cursor-pointer hover:text-[#FFAE00] transition duration-300 transform'
                    icon={icon.name}
                    style={{ fontSize: 40 }}
                />
            </Link>
        ))
    }

    return (
        <div className='h-screen grid place-items-center md:grid-cols-2 tracking-wider cursor-default'>
            <div>
                <h1 className='font-semibold leading-normal text-4xl'>
                    Hey, I'm <span className='golden-words border-bottom-texts'>Harshith</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                    and I am a<br />
                    <span className='rainbow-words'><Typewriter
                        words={['Fullstack Developer.', 'Tech Enthusiast.', 'Philomath.']}
                        loop={0}
                        cursor
                        cursorBlinking={true}
                        cursorStyle='_'
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    /></span>
                </h1>
                <div className='flex gap-14 mt-8'>
                    {renderSocialMediaIcons()}
                </div>
            </div>
            <div>
                <Image
                    src="/assets/harshith_rao.jpeg"
                    height={300}
                    width={300}
                    alt='Harshith Rao'
                    className='image transition duration-300 transform outline outline-2 outline-[#FFB000]'
                />
            </div>
        </div>
    )
}

export default Intro