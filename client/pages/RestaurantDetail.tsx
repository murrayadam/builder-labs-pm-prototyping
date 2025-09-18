import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockRestaurants } from "@/data/restaurantData";
import { restaurantMenus } from "@/data/menuItemData";
import { customerReviews } from "@/data/reviewData";
import MenuItemCard from "@/components/MenuItemCard";
import CustomerReviews from "@/components/CustomerReviews";

export default function RestaurantDetail() {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  const restaurant = mockRestaurants.find((r) => r.id === restaurantId);
  const menuItems = restaurantMenus[restaurantId || ""] || [];
  const reviews = customerReviews[restaurantId || ""] || [];

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurant not found
          </h1>
          <Link to="/order" className="text-blue-600 hover:text-blue-800">
            Return to restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <Link to="/order">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">
              {restaurant.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Restaurant hero section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={restaurant.image}
                alt={restaurant.name}
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

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {restaurant.name}
                </h1>
                {restaurant.featured && (
                  <Badge className="bg-orange-500 text-white">Featured</Badge>
                )}
              </div>

              <p className="text-gray-600 mb-3">{restaurant.description}</p>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">
                    {restaurant.rating}
                  </span>
                  <span className="text-gray-600">
                    ({restaurant.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{restaurant.distance}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>

              <div className="text-green-600 font-medium">
                {restaurant.deliveryFee}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="bg-white mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} menuItem={item} />
            ))}
          </div>

          {menuItems.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Menu items coming soon...</p>
            </div>
          )}
        </div>
      </div>

      {/* Customer Reviews section */}
      <div className="bg-white mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <CustomerReviews reviews={reviews} restaurantName={restaurant.name} />
        </div>
      </div>
    </div>
  );
}
