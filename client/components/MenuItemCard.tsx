import { Star, Plus, Flame, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RestaurantMenuItem } from "@/data/menuItemData";

interface MenuItemCardProps {
  menuItem: RestaurantMenuItem;
}

export default function MenuItemCard({ menuItem }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img
            src={menuItem.image}
            alt={menuItem.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.classList.add(
                "flex",
                "items-center",
                "justify-center",
              );
              target.parentElement!.innerHTML =
                '<div class="text-4xl">🍣</div>';
            }}
          />
        </div>

        {/* Item badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {menuItem.popular && (
            <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
          )}
          {menuItem.spicy && (
            <Badge variant="destructive" className="text-xs">
              <Flame className="w-3 h-3 mr-1" />
              Spicy
            </Badge>
          )}
          {menuItem.vegetarian && (
            <Badge className="bg-green-500 text-white text-xs">
              <Leaf className="w-3 h-3 mr-1" />
              Vegetarian
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              {menuItem.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {menuItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">
                {menuItem.reviews.rating}
              </span>
              <span className="text-gray-500 text-sm">
                ({menuItem.reviews.count})
              </span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600 text-sm">{menuItem.category}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${menuItem.price.toFixed(2)}
            </span>

            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
