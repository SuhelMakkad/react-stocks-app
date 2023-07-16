import { useState } from "react";

import StocksListTable from "@/components/stocks-list-table";
import { categories } from "@/assets/data/category";

import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";

import { getGroupedStocks } from "@/assets/data/stocks";

const groupedStocks = getGroupedStocks();

const StocksTableSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="mt-12 mb-8 md:mt-16 space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground">Stocks Details</h3>

      <ul className="flex overflow-auto shrink-0 whitespace-nowrap hide-scroll">
        {categories.map((category, index) => (
          <li key={category.id}>
            <button
              className="text-xs px-3 py-1.5 rounded-full aria-selected:bg-accent aria-selected:font-semibold"
              aria-selected={activeSlide === index}
              onClick={() => swiperInstance?.slideTo(index)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={50}
        onSlideChange={(e) => setActiveSlide(e.activeIndex)}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <StocksListTable stocks={groupedStocks[category.id]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StocksTableSection;
