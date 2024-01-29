import { Typewriter } from 'nextjs-simple-typewriter'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Tilt } from 'react-tilt';

const Intro = () => {

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(0.4, 0.0, 0.2, 1)",    // Easing on enter/exit.
    }

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
                    className='text-2xl md:text-3xl lg:text-4xl hover:cursor-pointer hover:text-[#FFAE00] transition duration-300 transform-gpu'
                    icon={icon.name}
                />
            </Link>
        ))
    }

    return (
        <div data-aos="fade-zoom-in" className='h-screen flex flex-col justify-evenly px-6 mb-5 lg:my-0 lg:px-0 md:grid place-items-center md:grid-cols-2 tracking-wide lg:tracking-wider cursor-default'>
            <div className='md:order-2 flex justify-center'>
                <Tilt className="tilt-container px-5 md:px-0 w-full md:w-3/4 lg:w-full" options={defaultOptions}>
                    <Image
                        src="/assets/harshith_rao.jpeg"
                        height={300}
                        width={300}
                        alt='Harshith Rao'
                        className='image w-full md:w-full transition duration-300 transform-gpu outline outline-2 outline-[#FFB000]'
                    />
                </Tilt>
            </div>
            <div className='md:order-1 text-center md:text-left'>
                <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl intro-text '>
                    Hey, I'm <span className='golden-words md:border-bottom-texts'>Harshith</span><span className="wave text-2xl md:text-3xl lg:text-5xl">👋</span><br />
                    and I am a passionate<br />
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
                <div className='flex gap-6 md:gap-10 lg:gap-14 mt-4 lg:mt-8 justify-center md:justify-start'>
                    {renderSocialMediaIcons()}
                </div>
            </div>
        </div>
    )
}

export default Intro