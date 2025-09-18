import { Star } from "lucide-react";
import { Restaurant } from "@/data/restaurantData";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="flex-shrink-0 w-60 mb-4 relative cursor-pointer hover:transform hover:scale-105 transition-transform">
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden h-44 bg-gray-100">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
              target.parentElement!.innerHTML = '<div class="text-4xl">🍣</div>';
            }}
          />
          {restaurant.featured && (
            <div className="absolute top-2 left-2">
              <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                Featured
              </div>
            </div>
          )}
        </div>

        <div className="mt-2 relative">
          <h3 className="font-bold text-lg text-gray-900 truncate mb-1">
            {restaurant.name}
          </h3>

          <div className="flex items-center gap-1 mb-1 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-bold text-gray-900">{restaurant.rating}</span>
              <Star className="w-3 h-3 ml-1 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">({restaurant.reviewCount})</span>
            </div>
            <span className="px-1">•</span>
            <span>{restaurant.distance}</span>
            <span className="px-1">•</span>
            <span>{restaurant.deliveryTime}</span>
          </div>

          <div className="text-sm text-gray-600 mb-1">
            {restaurant.deliveryFee}
          </div>

          <div className="text-xs text-gray-500 truncate">
            {restaurant.description}
          </div>
        </div>
      </div>
    </div>
  );
}
