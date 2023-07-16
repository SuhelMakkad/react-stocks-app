import { Link } from "react-router-dom";

import OverviewCard from "@/components/overview-card";
import ThemeToggle from "@/components/theme-toggle";
import StocksListTable from "@/components/stocks-list-table";

import { getGroupedStocks } from "@/assets/data/stocks";

const groupedStocks = getGroupedStocks();
const overviewStocks = groupedStocks.overview;

const Dashboard = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex justify-between items-center gap-2 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Markets</h1>
        <span className="text-muted-foreground">
          <ThemeToggle />
        </span>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Quick Overview of the Market
        </h3>
        <div className="flex md:grid gap-2 md:gap-4 grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-auto hide-scroll -mx-3 md:mx-0 px-3 md:px-0">
          {overviewStocks.map((overview) => (
            <Link key={overview.symbol} to={`/stock/${overview.symbol}`}>
              <OverviewCard
                title={overview.name}
                currentPrice={overview.currentPrice}
                percentageChange={overview.percentageChange}
                trend={overview.trend}
              />
            </Link>
          ))}
        </div>
      </section>

      <StocksTableSection />
    </div>
  );
};

import { useState } from "react";
import { categories } from "@/assets/data/category";

import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";

import "swiper/css";

const StocksTableSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="mt-12 mb-8 md:mt-16 space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground">Stocks Details</h3>

      <ul className="flex">
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

export default Dashboard;
