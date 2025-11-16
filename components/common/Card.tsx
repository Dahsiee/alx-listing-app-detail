import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces";
import {
  Bath,
  Bed,
  DollarSign,
  SquaresSubtract,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ property }) => {
  console.log(property);
  return (
    <div className="relative w-full h-full cursor-pointer hover:shadow-md hover:rounded-lg">
      <Link href={`/property/${property.name}`}>
        <Image
          src={property.image || "/images/fallback.jpg"}
          alt={property.name}
          width={400}
          height={300}
          onError={() => console.log("image error")}
          className="rounded-t-lg"
        />

        <div className="flex flex-col justify-between p-4">
          <div className="flex flex-wrap justify-start gap-4 mb-4">
            {property.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-4">
              <h3 className="font-semibold text-[22px]">{property.name}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-[#FAC02B]" />
                <p className="font-medium text-[17px] ml-2">
                  {property.rating}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-[16px]">
              {property.address.city}, {property.address.country}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 pt-4">
            <div className="flex justify-between gap-1 px-2 bg-gray-200 rounded-lg">
              <span className="flex items-center gap-1">
                {property.offers.bed} <Bed className="w-4 h-auto" />
              </span>{" "}
              <span className="flex items-center gap-1">
                {property.offers.shower} <Bath className="w-4 h-auto" />
              </span>{" "}
              <span className="flex items-center gap-1">
                {property.offers.occupants} <Users className="w-4 h-auto" />
              </span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 text-[#FAC02B]" />
              <p className="font-medium text-[17px] ml-2">{property.price}</p>
            </div>
          </div>
        </div>
        {property.discount && (
          <div className="absolute z-10 flex items-center justify-between gap-4 bg-green-500 rounded-t-lg rounded-br-lg left-1 top-1 w-fit">
            <span className="flex items-center text-sm font-medium text-white">
              <SquaresSubtract className="w-3 h-auto" />
              {property.discount}% Off
            </span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
