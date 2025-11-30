
// import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
// import { useRouter } from "next/router";
// import PropertyDetail from "@/components/property/PropertyDetail";

// export default function PropertyPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

//   if (!property) return <p>Property not found</p>;

//   return (
//     <div>
//       <PropertyDetail property={property} />
//     </div>
//   );
// }

import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center text-lg mt-10">Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <div className="text-gray-600 mb-6">
        <span className="text-yellow-500">{property.rating} ★</span> — {property.address.city}, {property.address.country}
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Property Detail */}
        <div className="flex-1">
          <PropertyDetail property={property} />
        </div>

        {/* Right: Booking Section (Sticky on large screens) */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-28">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <ReviewSection reviews={property.reviews} />
      </div>
    </div>
  );
}
