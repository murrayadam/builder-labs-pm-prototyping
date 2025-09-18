export interface Coordinates {
  lat: number;
  lng: number;
}

// Default user location (San Francisco downtown for demo)
export const DEFAULT_USER_LOCATION: Coordinates = {
  lat: 37.7849,
  lng: -122.4194,
};

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  point1: Coordinates,
  point2: Coordinates,
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(point2.lat - point1.lat);
  const dLng = toRadians(point2.lng - point1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) *
      Math.cos(toRadians(point2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Format distance for display
export function formatDistance(miles: number): string {
  return `${miles.toFixed(1)} mi`;
}

// Get user's current location using browser geolocation API
export function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        // If geolocation fails, fall back to default location
        console.warn("Geolocation failed, using default location:", error);
        resolve(DEFAULT_USER_LOCATION);
      },
      { timeout: 10000, enableHighAccuracy: false },
    );
  });
}

// Check if restaurant is within delivery radius (3 miles for demo)
export function isWithinDeliveryRadius(
  restaurantCoords: Coordinates,
  userCoords: Coordinates,
  radiusMiles: number = 3,
): boolean {
  return calculateDistance(restaurantCoords, userCoords) <= radiusMiles;
}
