"use client"
import {
    Navbar,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";


const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Contact Me",
            href: "/contact"
        }
    ]

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                navItems.map((navItem, index) => (
                    <span className="p-1 font-normal hover:text-[#FFAE00] transition duration-300 transform-gpu" key={index}>
                        <Link href={navItem.href} className="flex items-center text-sm md:text-[15px]">
                            {navItem.name}
                        </Link>
                    </span>
                ))
            }
        </ul>
    );

    return (
        <div>
            <Navbar className="fixed top-0 z-20 h-max max-w-full rounded-none px-4 py-2 md:px-8 md:py-4 navbar border-0">
                <div className="flex items-center justify-between">
                    <Link href="/" className="font-semibold text-xl md:text-3xl">
                        <h1><span className="golden-words">H</span>arshith <span className="golden-words">R</span>ao.</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                className="hidden lg:inline-block bg-transparent rounded-none border hover:border-[#FFAE00] group transition duration-300 transform-gpu"
                            >
                                <span className="font-normal text-md group-hover:text-[#FFAE00] transition duration-300 transform-gpu">View Resume</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button
                            className="w-full md:w-fit py-2 mb-2 bg-transparent rounded-none border live-site hover:border-[#FFAE00] group transition duration-300 transform-gpu"
                        >
                            <span className="font-normal text-xs md:text-md group-hover:text-[#FFAE00] transition duration-300 transform-gpu"><Link href="https://flowcv.com/resume/hj7caj6o85">View Resume</Link></span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Nav