import { Button } from "@/components/ui/button";

const categories = [
  { emoji: "🍣", label: "Sushi Rolls" },
  { emoji: "🍱", label: "Bento Boxes" },
  { emoji: "🥢", label: "Sashimi" },
  { emoji: "🍤", label: "Tempura" },
  { emoji: "🥗", label: "Salads" },
  { emoji: "🍜", label: "Ramen" },
  { emoji: "🍲", label: "Miso Soup" },
  { emoji: "🥟", label: "Gyoza" },
  { emoji: "🍘", label: "Nigiri" },
  { emoji: "🧊", label: "Cold Dishes" },
  { emoji: "🍵", label: "Tea" },
  { emoji: "🍰", label: "Desserts" },
  { emoji: "🥤", label: "Beverages" },
  { emoji: "🌶️", label: "Spicy" },
  { emoji: "🥑", label: "Vegetarian" },
];

export default function CategorySection() {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-32 z-[300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center gap-1 p-3 h-auto min-w-[80px] hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                <span className="text-2xl">{category.emoji}</span>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                  {category.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
