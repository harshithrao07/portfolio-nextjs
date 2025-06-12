"use client"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Skills from "@/components/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Contact from "@/components/Contact"

const Home = () => {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <section className="md:pt-10 w-full">
      <Intro />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </section>
  )
}

export default Home