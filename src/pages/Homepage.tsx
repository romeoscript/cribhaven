
import Hero from '../components/Hero'
import PropertySection from '../components/PropertyCarousel'
import PropertyCategories from '../components/PropertyCategories'
import DiscoverSection from '../components/Discover'
import FAQAccordion from '../components/FAQAccordion'
import WhyChooseUs from '../components/WhyChooseUs'


const Homepage = () => {
  const properties = [
    {
      id: 1,
      image: "https://placehold.co/400x240",
      title: "Harbor View",
      location: "UNI UYO",
      beds: 3,
      baths: 1,
      price: "N150,000"
    },
    {
      id: 4,
      image: "https://placehold.co/400x240",
      title: "Sunset Ridge",
      location: "RUST",
      beds: 1,
      baths: 1,
      price: "N300,000"
    },
    {
      id: 5,
      image: "https://placehold.co/400x240",
      title: "Royal Gardens Villas",
      location: "UNN",
      beds: 2,
      baths: 2,
      price: "N200,000"
    },
    {
      id: 6,
      image: "https://placehold.co/400x240",
      title: "Royal Gardens Villas",
      location: "UNN",
      beds: 2,
      baths: 2,
      price: "N200,000"
    },
    {
      id: 7,
      image: "https://placehold.co/400x240",
      title: "Royal Gardens Villas",
      location: "UNN",
      beds: 2,
      baths: 2,
      price: "N200,000"
    },
    // Add more properties as needed
  ];
  return (
    <div>
      <Hero />

      <PropertySection
        desktopCards={4}  
        mobileCards={1}  
        properties={properties}
      />

      <PropertyCategories />
      <DiscoverSection />
      <WhyChooseUs />
      <FAQAccordion />
    </div>
  )
}

export default Homepage
