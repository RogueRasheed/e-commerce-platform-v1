import Hero from '../features/home/Hero'
import FeaturedProducts from '../features/home/FeaturedProducts'
import TrustSignals from '../features/home/TrustSignals'
import ValueProps from '../features/home/ValueProps'
import Footer from '../components/layout/Footer'


export default function Home() {
  return (
    <>
        <Hero />
        <FeaturedProducts />
        <TrustSignals />
        <ValueProps />
        <Footer />
    </>
  )
}
