import { About, Approach, Contact, Experience, Hero, Skills, TechStrip, Work } from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Work />
      <Approach />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
