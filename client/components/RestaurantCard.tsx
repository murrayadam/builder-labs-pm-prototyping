import { Star } from "lucide-react";
import { Restaurant } from "@/data/restaurantData";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="flex-shrink-0 w-60 mb-4 relative">
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden h-44">
          <div className="absolute inset-0 bg-gray-100">
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
          </div>
        </div>
        
        <div className="mt-2 relative">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-lg text-gray-900 truncate">
              {restaurant.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-1 mb-1">
            <div className="flex items-center">
              <span className="font-bold text-sm text-gray-900">{restaurant.rating}</span>
              <Star className="w-3 h-3 ml-1 fill-current text-gray-600" />
              <span className="text-sm text-gray-600 ml-1">({restaurant.reviewCount})</span>
            </div>
            <span className="text-gray-500 text-sm px-1">•</span>
            <span className="text-sm text-gray-600">{restaurant.distance}</span>
            <span className="text-gray-500 text-sm px-1">•</span>
            <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
          </div>
          
          <div className="text-sm text-gray-600">
            {restaurant.deliveryFee}
          </div>
        </div>
      </div>
    </div>
  );
}
