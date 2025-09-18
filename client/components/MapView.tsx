import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Restaurant } from '@/data/restaurantData';
import { Coordinates, getCurrentLocation, calculateDistance, formatDistance, DEFAULT_USER_LOCATION } from '@/lib/location';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';

interface MapViewProps {
  restaurants: Restaurant[];
  onRestaurantSelect?: (restaurant: Restaurant) => void;
  showDeliveryRadius?: boolean;
  className?: string;
}

// Custom icons for map markers
const restaurantIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/64/3448/3448339.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const userIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/64/447/447031.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Component to recenter map when user location changes
function MapUpdater({ center }: { center: Coordinates }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView([center.lat, center.lng], map.getZoom());
  }, [center, map]);
  
  return null;
}

export default function MapView({ restaurants, onRestaurantSelect, showDeliveryRadius = true, className = '' }: MapViewProps) {
  const [userLocation, setUserLocation] = useState<Coordinates>(DEFAULT_USER_LOCATION);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  useEffect(() => {
    const loadUserLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setUserLocation(location);
      } catch (error) {
        console.warn('Could not get user location, using default:', error);
        setUserLocation(DEFAULT_USER_LOCATION);
      } finally {
        setIsLoadingLocation(false);
      }
    };
    
    loadUserLocation();
  }, []);

  // Calculate distances for restaurants based on user location
  const restaurantsWithDistance = restaurants.map(restaurant => ({
    ...restaurant,
    actualDistance: calculateDistance(userLocation, restaurant.coordinates),
    distance: formatDistance(calculateDistance(userLocation, restaurant.coordinates)),
  }));

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoadingLocation && (
        <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            <span className="text-sm">Finding your location...</span>
          </div>
        </div>
      )}
      
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapUpdater center={userLocation} />
        
        {/* User location marker */}
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-black mb-1">Your Location</h3>
              <p className="text-sm text-gray-600">Delivery address</p>
            </div>
          </Popup>
        </Marker>
        
        {/* Delivery radius circle */}
        {showDeliveryRadius && (
          <Circle
            center={[userLocation.lat, userLocation.lng]}
            radius={4828} // 3 miles in meters
            fillColor="#ff5722"
            fillOpacity={0.1}
            color="#ff5722"
            weight={2}
            opacity={0.6}
          />
        )}
        
        {/* Restaurant markers */}
        {restaurantsWithDistance.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={[restaurant.coordinates.lat, restaurant.coordinates.lng]}
            icon={restaurantIcon}
          >
            <Popup maxWidth={300} className="restaurant-popup">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div
                    className="h-24 rounded-t-lg bg-cover bg-center mb-3"
                    style={{
                      backgroundImage: `url(${restaurant.image})`,
                    }}
                  />
                  <div className="px-1">
                    <h3 className="font-bold text-black mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {restaurant.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="text-sm">{restaurant.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="text-sm">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                    {onRestaurantSelect && (
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                        onClick={() => onRestaurantSelect(restaurant)}
                      >
                        View Menu
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
