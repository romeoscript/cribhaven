

import FAQAccordion from '../components/FAQAccordion'
import WhyChooseUs from '../components/WhyChooseUs'
import AnimatedHero from '../components/AnimatedHero'
import CoreFeatures from '../components/CoreFeatures'
import HowItWorks from '../components/HowItWorks'


const Homepage = () => {
 
  return (
    <div>
      <AnimatedHero />
      <CoreFeatures />
      <HowItWorks />
      {/* <PropertySection
        desktopCards={4}
        mobileCards={1}
        properties={properties}
      />

      <PropertyCategories />
      <DiscoverSection /> */}
      <WhyChooseUs />
      <FAQAccordion />
    </div>
  )
}

export default Homepage
