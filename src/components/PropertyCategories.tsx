import home1 from "../assets/home/home1.svg";
import home2 from "../assets/home/home2.svg";
import home3 from "../assets/home/home3.svg";
interface CategoryCard {
  title: string;
  image: string;
}

const PropertyCategories = () => {
  const categories: CategoryCard[] = [
    {
      title: "Penthouse",
      image: home1
    },
    {
      title: "Rented Apartment",
      image: home2
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Penthouse Card */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <img 
                src={categories[0].image}
                alt="Penthouse"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {categories[0].title}
              </h3>
            </div>

            {/* Rented Apartment Card */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden group">
              <img 
                src={categories[1].image}
                alt="Rented Apartment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {categories[1].title}
              </h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[720px] rounded-2xl overflow-hidden group mt-6 md:mt-0">
            <img 
              src={home3}
              alt="Luxury Apartment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
              Luxury Apartment
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;