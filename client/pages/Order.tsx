import { useState, useMemo } from "react";
import SushiRushHeader from "@/components/SushiRushHeader";
import CategorySection from "@/components/CategorySection";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import { mockRestaurants, categoryLabels } from "@/data/restaurantData";

export default function Order() {
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, newQuantity)
    }));
  };

  const filteredItems = useMemo(() => {
    return menuData.filter(item => {
      // Search filter only
      return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalCartItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SushiRushHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartItems}
      />
      <CategorySection onCategoryClick={handleCategoryClick} />

      <main className="pt-2 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            {menuCategories.map(category => {
              const categoryItems = filteredItems.filter(item => item.category === category);
              return (
                <MenuCategory
                  key={category}
                  title={category}
                  items={categoryItems}
                  quantities={quantities}
                  onQuantityChange={handleQuantityChange}
                />
              );
            })}

            {filteredItems.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-medium">No items found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
