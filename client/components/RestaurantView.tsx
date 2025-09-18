import { useState } from 'react';
import { Restaurant } from '@/data/restaurantData';
import { useLocation } from '@/contexts/LocationContext';
import { calculateDistance, formatDistance, isWithinDeliveryRadius } from '@/lib/location';
import MapView from '@/components/MapView';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, List, Star, Clock, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantViewProps {
  restaurants: Restaurant[];
  title?: string;
  showToggle?: boolean;
  defaultView?: 'list' | 'map';
}

export default function RestaurantView({ 
  restaurants, 
  title = "Restaurants Near You",
  showToggle = true,
  defaultView = 'list'
}: RestaurantViewProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>(defaultView);
  const { userLocation, refreshLocation, isLoadingLocation } = useLocation();

  // Calculate distances and filter restaurants within delivery radius
  const restaurantsWithDistance = restaurants
    .map(restaurant => ({
      ...restaurant,
      actualDistance: calculateDistance(userLocation, restaurant.coordinates),
      distance: formatDistance(calculateDistance(userLocation, restaurant.coordinates)),
      withinRadius: isWithinDeliveryRadius(restaurant.coordinates, userLocation),
    }))
    .sort((a, b) => a.actualDistance - b.actualDistance);

  const availableRestaurants = restaurantsWithDistance.filter(r => r.withinRadius);
  const unavailableRestaurants = restaurantsWithDistance.filter(r => !r.withinRadius);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    // Navigate to restaurant detail or handle selection
    console.log('Selected restaurant:', restaurant.name);
  };

  return (
    <div className="space-y-6">
      {/* Header with toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          <p className="text-gray-600 flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {availableRestaurants.length} restaurants available
            {unavailableRestaurants.length > 0 && (
              <span className="text-gray-400 ml-2">
                • {unavailableRestaurants.length} outside delivery area
              </span>
            )}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshLocation}
            disabled={isLoadingLocation}
            className="flex items-center"
          >
            <Navigation className={`h-4 w-4 mr-2 ${isLoadingLocation ? 'animate-spin' : ''}`} />
            Update Location
          </Button>
          
          {showToggle && (
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-md"
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="rounded-md"
              >
                <Map className="h-4 w-4 mr-2" />
                Map
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      {viewMode === 'map' ? (
        <div className="h-96 rounded-lg overflow-hidden border">
          <MapView
            restaurants={availableRestaurants}
            onRestaurantSelect={handleRestaurantSelect}
            showDeliveryRadius={true}
          />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Available restaurants */}
          {availableRestaurants.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Available for Delivery</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    onSelect={handleRestaurantSelect}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Unavailable restaurants */}
          {unavailableRestaurants.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-4">Outside Delivery Area</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 opacity-60">
                {unavailableRestaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    disabled={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RestaurantCard({ 
  restaurant, 
  onSelect, 
  disabled = false 
}: { 
  restaurant: Restaurant & { actualDistance: number }; 
  onSelect?: (restaurant: Restaurant) => void;
  disabled?: boolean;
}) {
  return (
    <Card className={`hover:shadow-md transition-shadow ${disabled ? 'opacity-60' : ''}`}>
      <CardContent className="p-4">
        <div
          className="rounded-lg h-32 mb-3 bg-cover bg-center bg-gray-100"
          style={{
            backgroundImage: `url(${restaurant.image})`,
          }}
        />
        
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-black">{restaurant.name}</h3>
            {restaurant.featured && (
              <Badge variant="secondary" className="text-xs">Featured</Badge>
            )}
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{restaurant.description}</p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{restaurant.distance}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
          
          {!disabled && (
            <Button
              asChild
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-3"
            >
              <Link to={`/restaurant/${restaurant.id}`}>View Menu</Link>
            </Button>
          )}
          
          {disabled && (
            <Button
              disabled
              size="sm"
              className="w-full rounded-full mt-3"
            >
              Outside Delivery Area
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
