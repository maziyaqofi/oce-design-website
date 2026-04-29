import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Portfolio from "./sections/Portfolio"
import Testimonial from "./sections/Testimonial"
import Pricing from "./sections/Pricing"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App