import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/data/restaurantData";
import { useRef } from "react";

interface RestaurantCarouselProps {
  restaurants: Restaurant[];
  title: string;
  categoryId?: string;
}

export default function RestaurantCarousel({
  restaurants,
  title,
  categoryId,
}: RestaurantCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (restaurants.length === 0) return null;

  return (
    <div id={categoryId} className="mb-8">
      <div className="flex items-center justify-between mb-4 px-8">
        <div className="flex items-center flex-1">
          <h2 className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full h-8 px-3 bg-gray-100 hover:bg-gray-200 text-sm font-bold"
          >
            See All
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-8 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
