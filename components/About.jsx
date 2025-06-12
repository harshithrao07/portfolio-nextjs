import Link from "next/link"

const About = () => {
    return (
        <div data-aos="fade-up" className='px-6 lg:px-16 lg:my-16' id="about-me">
            <div className="flex justify-start">
                <h1 className='font-semibold border-b-2 md:border-b-4 border-[#FFAE00] w-fit mb-2 md:mb-4 text-xl md:text-3xl'>About Me</h1>
            </div>
            <div className='leading-relaxed text-xs md:text-lg text-center md:text-left'>
                <p className="mb-3">
                    Greetings! <span className="wave text-md lg:text-xl">👋</span>
                </p>
                <p className="mb-3">
                    I'm someone who finds real excitement in the world of computer science and engineering. I enjoy solving problems, building creative solutions, and diving into projects that challenge my thinking. Whether it’s contributing to a team or taking the lead when needed, I value collaboration and clear communication.                </p>
                <p>
                    Outside of work, I’m into gaming, staying active at the gym, watching anime and shows, exploring music, or tinkering with side projects. I believe in keeping a good balance between productivity and fun — it keeps things interesting! 😊
                </p>
            </div>
            <div className="flex justify-center md:justify-start">
                <button
                    className="py-1 px-3 mt-5 lg:py-2 lg:mt-7 lg:px-9 bg-transparent rounded-none border source-code group transition duration-300 transform-gpu"
                >
                    <span className="font-normal text-xs lg:text-lg uppercase"><Link href="projects">Check out my Projects <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-5 md:h-5 inline group-hover:translate-x-2 duration-300 transition transform-gpu group-hover:scale-110">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg></Link></span>
                </button>
            </div>
        </div>
    )
}

export default About