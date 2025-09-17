import { useState, useMemo } from "react";
import SushiRushHeader from "@/components/SushiRushHeader";
import CategorySection from "@/components/CategorySection";
import MenuFilters from "@/components/MenuFilters";
import MenuCategory from "@/components/MenuCategory";
import Cart from "@/components/Cart";
import { menuData, menuCategories } from "@/data/menuData";

export default function Order() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleFilterToggle = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, newQuantity)
    }));
  };

  const filteredItems = useMemo(() => {
    return menuData.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filters
      const matchesFilters = activeFilters.length === 0 ||
                            activeFilters.every(filter => {
                              if (filter === "trending") return item.trending;
                              if (filter === "popular") return item.popular;
                              return item.tags.includes(filter);
                            });

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, activeFilters]);

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
      <MenuFilters
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
      />

      <main className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
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

            <div className="lg:col-span-1">
              <Cart
                items={menuData}
                quantities={quantities}
                onQuantityChange={handleQuantityChange}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
