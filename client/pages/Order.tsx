import { useState, useMemo } from "react";
import SushiRushHeader from "@/components/SushiRushHeader";
import CategorySection from "@/components/CategorySection";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import RestaurantView from "@/components/RestaurantView";
import { mockRestaurants, categoryLabels } from "@/data/restaurantData";

export default function Order() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = useMemo(() => {
    return mockRestaurants.filter((restaurant) => {
      // Search filter only
      return (
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SushiRushHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={0}
      />
      <CategorySection onCategoryClick={handleCategoryClick} />

      <main className="pt-2 pb-12">
        <div className="max-w-full mx-auto">
          {/* Restaurant Map/List View */}
          <div className="bg-white mb-8 p-6">
            <RestaurantView
              restaurants={filteredRestaurants}
              title="Restaurants Near You"
              showToggle={true}
              defaultView="list"
            />
          </div>

          <div className="bg-white">
            {Object.entries(categoryLabels).map(
              ([categoryId, categoryLabel]) => {
                const categoryRestaurants = filteredRestaurants.filter(
                  (restaurant) => restaurant.categories.includes(categoryId),
                );

                if (categoryRestaurants.length === 0) return null;

                return (
                  <RestaurantCarousel
                    key={categoryId}
                    title={categoryLabel}
                    restaurants={categoryRestaurants}
                    categoryId={categoryId}
                  />
                );
              },
            )}

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-medium">No restaurants found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
