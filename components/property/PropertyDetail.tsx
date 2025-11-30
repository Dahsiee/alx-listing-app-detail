import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="flex space-x-4 border-b pb-2">
          <button onClick={() => setActiveTab("offer")} className={activeTab === "offer" ? "font-bold" : ""}>What we offer</button>
          <button onClick={() => setActiveTab("reviews")} className={activeTab === "reviews" ? "font-bold" : ""}>Reviews</button>
          <button onClick={() => setActiveTab("host")} className={activeTab === "host" ? "font-bold" : ""}>About host</button>
        </div>

        <div className="mt-4">
          {activeTab === "offer" && <p>{property.description}</p>}
          {activeTab === "reviews" && <p>See reviews below 👇</p>}
          {activeTab === "host" && <p>{property.hostInfo}</p>}
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
