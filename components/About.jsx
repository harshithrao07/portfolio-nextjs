const About = () => {
    return (
        <div className='px-16 my-16' id="about-me">
            <h1 className='font-semibold border-b-4 border-[#FFAE00] w-fit mb-4'>About Me</h1>
            <div className='leading-relaxed'>
                <p className="mb-3">
                    Greetings! <span className="wave text-xl">👋</span>
                </p>
                <p className="mb-3">
                    I'm currently a fourth-year student majoring in Computer Science and Engineering at NMAM Institute of Technology (NMAMIT). My main passion lies in web development - it's where I thrive and continuously explore. I bring innovation and leadership to the table when needed, but I'm also a dependable team player.
                </p>
                <p>
                    Beyond the academic realm, you'll often find me immersed in video games, keeping up with my fitness routine at the gym, enjoying shows and anime, listening to music or working on intriguing web projects. Maintaining that balance between work and play is key, don't you think? 😊
                </p>
            </div>
            <button
                className="py-2 mt-7 px-9 bg-transparent rounded-none border hover:border-[#FFAE00] group transition duration-300 transform"
            >
                <span className="font-normal text-md group-hover:text-[#FFAE00] transition duration-300 transform uppercase">Check out my Projects</span>
            </button>
        </div>
    )
}

export default About