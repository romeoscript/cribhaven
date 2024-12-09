import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import footerimg from '../assets/home/footerimg.svg';
import logo from '../assets/home/logo.svg';

const NewsletterSection = () => {
  return (
    <div className="w-full h-[400px] bg-[#4CA32F] flex  rounded-3xl overflow-hidden relative">
      <div className="max-w-[1240px]  px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-8 md:mb-0 flex flex-col gap-8">
          <aside>
            <h2 className="text-2xl font-bold text-white mb-2">
              Unlock Exclusive Apartment Insights!
            </h2>
            <p className="text-white/90">
              Get exclusive real estate insights delivered straight to your inbox. Sign up now for the latest property listings, market trends, and expert advice!
            </p>
          </aside>
          <aside>
            <div className="relative z-10 w-full md:w-auto">
              <div className="flex max-w-md mx-auto md:mx-0 bg-white p-[0.2rem] rounded-lg">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4  rounded-lg focus:outline-none focus:outline-none "
                />
                <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Building Image - Absolute positioned */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-20 md:opacity-100">
          <img
            src={footerimg}
            alt="Buildings"
            className="h-full object-cover object-left"
          />
        </div>

        {/* Subscribe Form */}

      </div>
    </div>
  );
};

const Footer = () => {
  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    Resources: [
      { label: 'FAQ', href: '#' },
      { label: 'Career', href: '#' },
      { label: 'Videos', href: '#' },
      { label: 'Our Homes', href: '#' }
    ],
    'Contact Us': []
  };

  return (
    <footer className="w-full py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div>
            <img src={logo} alt="Crib Haven"  />
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Hello Crib Haven
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedinIn size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Agreement
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Licenses
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Combine both components
const FooterWithNewsletter = () => {
  return (
    <div className="space-y-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default FooterWithNewsletter;