import './Home.scss'

import Header from '../../components/Header/Header'
import HeroSection from './HeroSection'
import FeatureSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Home