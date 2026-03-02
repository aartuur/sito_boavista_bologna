import EventsDjNightSection from '../components/sections/EventsDjNightSection'
import HeroSection from '../components/sections/HeroSection'
import InfoOrariSection from '../components/sections/InfoOrariSection'
import InsideBoavistaSection from '../components/sections/InsideBoavistaSection'
import NightlifeSection from '../components/sections/NightlifeSection'
import SignatureCocktailsSection from '../components/sections/SignatureCocktailsSection'
import FooterBoaVista from '../components/ui/FooterBoaVista'

const HomePage = () => {
  return (
    <div className='w-screen'>
      <HeroSection />
      <NightlifeSection />
      <SignatureCocktailsSection />
      <InsideBoavistaSection />
      <EventsDjNightSection />
      <InfoOrariSection />
      <FooterBoaVista />
    </div>
  )
}

export default HomePage
