import Header from "./components/Header"
import Hero from "./components/Hero"
import OurWork from "./components/OurWork"
import Services from "./components/Services"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <OurWork />
      <Services />
      <Footer />
    </div>
  )
}
