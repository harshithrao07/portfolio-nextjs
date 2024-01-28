"use client"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Skills from "@/components/Skills"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <section className="pt-16 md:pt-24">
      <Intro />
      <About />
      <Education />
      <Experience />
      <Skills />
    </section>
  )
}

export default Home