import Hero from "../components/Hero"
import InspirationSection from "../components/InspirationSection"
import OurProducts from "../components/OurProducts"
import Range from "../components/Range"
import products from "../data/ProductData"
import ShareSetup from "../components/ShareSetup"

function Home() {
  return (
    <>
    <Hero />
    <Range />
    <OurProducts products={products.slice(0, 8)} />
    <InspirationSection />
    <ShareSetup />
    </>
  )
}

export default Home