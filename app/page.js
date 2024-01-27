import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Intro from "@/components/Intro"
import Skills from "@/components/Skills"

const Home = () => {
  return (
    <section className="pt-10">
      <Intro />
      <About />
      <Education />
      <Experience />
      <Skills />
    </section>
  )
}

export default Home