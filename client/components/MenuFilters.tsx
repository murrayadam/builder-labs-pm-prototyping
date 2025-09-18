import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";

interface MenuFiltersProps {
  activeFilters: string[];
  onFilterToggle: (filter: string) => void;
}

const filterOptions = [
  { id: "vegetarian", label: "Vegetarian", color: "bg-green-100 text-green-800" },
  { id: "spicy", label: "Spicy", color: "bg-red-100 text-red-800" },
  { id: "raw", label: "Raw", color: "bg-blue-100 text-blue-800" },
  { id: "cooked", label: "Cooked", color: "bg-orange-100 text-orange-800" },
  { id: "gluten-free", label: "Gluten Free", color: "bg-purple-100 text-purple-800" },
  { id: "trending", label: "Trending", color: "bg-yellow-100 text-yellow-800" },
];

export default function MenuFilters({ activeFilters, onFilterToggle }: MenuFiltersProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-36 z-[250] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 text-sm font-medium text-gray-600 whitespace-nowrap">
            <Filter className="h-4 w-4" />
            <span>Filters:</span>
          </div>
          
          {filterOptions.map((filter) => (
            <Button
              key={filter.id}
              variant="ghost"
              size="sm"
              onClick={() => onFilterToggle(filter.id)}
              className={`whitespace-nowrap transition-colors ${
                activeFilters.includes(filter.id)
                  ? filter.color
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
              {activeFilters.includes(filter.id) && (
                <X className="h-3 w-3 ml-1" />
              )}
            </Button>
          ))}

          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => activeFilters.forEach(filter => onFilterToggle(filter))}
              className="text-gray-500 hover:text-gray-700 whitespace-nowrap"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
