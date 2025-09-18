import { Button } from "@/components/ui/button";

const categories = [
  { emoji: "🍣", label: "Sushi Rolls", id: "sushi-rolls" },
  { emoji: "🍘", label: "Nigiri", id: "nigiri" },
  { emoji: "🥢", label: "Sashimi", id: "sashimi" },
  { emoji: "🍱", label: "Bento Boxes", id: "bento-boxes" },
  { emoji: "🍤", label: "Tempura", id: "tempura" },
  { emoji: "🥟", label: "Appetizers", id: "appetizers" },
  { emoji: "🥗", label: "Salads", id: "salads" },
  { emoji: "🍜", label: "Ramen", id: "ramen" },
  { emoji: "🍰", label: "Desserts", id: "desserts" },
  { emoji: "🥤", label: "Beverages", id: "beverages" },
];

interface CategorySectionProps {
  onCategoryClick?: (categoryId: string) => void;
}

export default function CategorySection({ onCategoryClick }: CategorySectionProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-[300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex flex-col items-center gap-1 p-3 h-auto min-w-[80px] hover:bg-gray-100 transition-colors flex-shrink-0"
                onClick={() => onCategoryClick?.(category.id)}
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
