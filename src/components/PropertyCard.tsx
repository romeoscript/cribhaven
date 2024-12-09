import { HiLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: string;
}

const PropertyCard = ({ image, title, location, beds, baths, price }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-1 mb-4 text-gray-600">
          <HiLocationMarker className="text-lg" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Features and Price Container */}
        <div className="flex items-center justify-between">
          {/* Features */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IoBedOutline className="text-lg text-gray-600" />
              <span className="text-sm text-gray-600">{beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <LuBath className="text-lg text-gray-600" />
              <span className="text-sm text-gray-600">{baths}</span>
            </div>
          </div>

          {/* Price and View Button */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">{price}</span>
            <button className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
