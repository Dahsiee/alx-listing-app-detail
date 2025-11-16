import { useEffect, useState } from "react";
import Category from "@/components/common/Category";
import Pill from "@/components/common/Pill";
import {
  CATEGORIES,
  HEROSECTION_BG_IMAGE,
  PROPERTYLISTINGSAMPLE,
} from "@/constants";
import Card from "@/components/common/Card";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allCategories = [
    "All",
    ...Array.from(
      new Set(PROPERTYLISTINGSAMPLE.flatMap((property) => property.category))
    ),
  ];

  const visibleCategories = allCategories.slice(0, 5);
  const mobileVisibleCategories = allCategories.slice(0, 2);
  const hiddenCategories = allCategories.slice(isTabletView ? 2 : 5);

  const filteredProperties =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((property) =>
          property.category.includes(activeFilter)
        );

  return (
    <main className="w-full space-y-4 font-quicksand">
      <section className="text-center">
        <div className="flex items-center justify-between gap-2 overflow-auto">
          {CATEGORIES.map((category) => (
            <Category
              label={category.name}
              key={category.name}
              icon={category.image}
              active={activeFilter === category.name}
              onClick={() => setActiveFilter(category.name)}
            />
          ))}
        </div>
      </section>

      <section
        className="relative flex items-center justify-center w-full h-full p-4"
        style={{
          backgroundImage: `url(${HEROSECTION_BG_IMAGE})`,
          width: "100%",
          minHeight: "280px",
          backgroundSize: "cover",
          borderRadius: "27px",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-2xl gap-5 md:max-w-4xl">
          <h1 className="font-bold text-[28.28px] sm:text-[66.63px] text-center text-white lg:text-[94px]">
            Find your favorite place here!
          </h1>
          <p className="px-4 text-xs font-semibold text-center text-white sm:text-lg lg:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="flex flex-wrap items-center gap-3">
          {(isTabletView ? mobileVisibleCategories : visibleCategories).map(
            (category) => (
              <Pill
                key={category}
                label={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              />
            )
          )}

          {hiddenCategories.length > 0 && (
            <select
              className="px-4 py-2 text-sm border rounded-md"
              onChange={(e) => setActiveFilter(e.target.value)}
              value={activeFilter}
            >
              <option value="">More...</option>
              {hiddenCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProperties.map((property) => (
          <Card key={property.name} property={property} title={property.name} />
        ))}
      </section>
    </main>
  );
}
