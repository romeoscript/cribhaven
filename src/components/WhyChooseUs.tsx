

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/600x500" // Replace with your actual image
              alt="Luxury Building"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Content Container */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose us for the purchase of your dream home?
            </h2>
            
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Extensive Property Selection</h3>
                <p className="text-gray-600">
                  Access to a wide range of properties that match your preferences and budget, 
                  carefully curated to meet your needs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our experienced team provides personalized support throughout your 
                  journey, ensuring you make informed decisions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Transparent Process</h3>
                <p className="text-gray-600">
                  Clear communication and documentation at every step, making your 
                  property search and purchase stress-free.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-gray-600">
                  All properties undergo thorough verification to ensure they meet 
                  our high standards of quality and value.
                </p>
              </div>
            </div>

            {/* Contact Button */}
            <button className="mt-8 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;