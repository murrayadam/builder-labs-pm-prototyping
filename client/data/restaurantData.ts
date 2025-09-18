export interface Restaurant {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: string;
  distance: string;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  categories: string[];
  featured?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Sakura Sushi Palace",
    description: "Premium authentic Japanese sushi and sashimi",
    rating: 4.8,
    reviewCount: "500+",
    distance: "0.8 mi",
    deliveryTime: "25-35 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "nigiri", "sashimi"],
    featured: true,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: "2",
    name: "Tsunami Roll House",
    description: "Creative fusion rolls and fresh fish daily",
    rating: 4.7,
    reviewCount: "350+",
    distance: "1.2 mi",
    deliveryTime: "30-40 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "tempura", "appetizers"],
    coordinates: { lat: 37.7849, lng: -122.4094 },
  },
  {
    id: "3",
    name: "Zen Garden Sushi",
    description: "Traditional omakase experience with seasonal selections",
    rating: 4.9,
    reviewCount: "200+",
    distance: "1.5 mi",
    deliveryTime: "35-45 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    categories: ["nigiri", "sashimi", "bento-boxes"],
    coordinates: { lat: 37.7649, lng: -122.4294 },
  },
  {
    id: "4",
    name: "Dragon Fire Sushi",
    description: "Spicy specialty rolls and grilled options",
    rating: 4.6,
    reviewCount: "400+",
    distance: "0.9 mi",
    deliveryTime: "20-30 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "tempura", "ramen"],
    coordinates: { lat: 37.7799, lng: -122.4094 },
  },
  {
    id: "5",
    name: "Bento Box Central",
    description: "Complete Japanese meals in convenient boxes",
    rating: 4.5,
    reviewCount: "250+",
    distance: "1.1 mi",
    deliveryTime: "25-35 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    categories: ["bento-boxes", "tempura", "salads"],
    featured: true,
    coordinates: { lat: 37.7699, lng: -122.4144 },
  },
  {
    id: "6",
    name: "Chopstick Express",
    description: "Quick and fresh sushi for busy lifestyles",
    rating: 4.4,
    reviewCount: "600+",
    distance: "0.7 mi",
    deliveryTime: "15-25 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "appetizers", "beverages"],
    coordinates: { lat: 37.7809, lng: -122.4144 },
  },
  {
    id: "7",
    name: "Wasabi Warriors",
    description: "Bold flavors and innovative sushi creations",
    rating: 4.7,
    reviewCount: "300+",
    distance: "1.3 mi",
    deliveryTime: "30-40 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "sashimi", "appetizers"],
    coordinates: { lat: 37.7649, lng: -122.4044 },
  },
  {
    id: "8",
    name: "Ramen & Roll Co",
    description: "Perfect pairing of ramen bowls and sushi rolls",
    rating: 4.6,
    reviewCount: "450+",
    distance: "1.0 mi",
    deliveryTime: "25-35 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    categories: ["ramen", "sushi-rolls", "appetizers"],
    coordinates: { lat: 37.7719, lng: -122.4244 },
  },
  {
    id: "9",
    name: "Tempura Temple",
    description: "Crispy tempura and light Japanese fare",
    rating: 4.5,
    reviewCount: "275+",
    distance: "1.4 mi",
    deliveryTime: "30-40 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    categories: ["tempura", "bento-boxes", "salads"],
    coordinates: { lat: 37.7599, lng: -122.4344 },
  },
  {
    id: "10",
    name: "Sweet Mochi Dreams",
    description: "Traditional and modern Japanese desserts",
    rating: 4.8,
    reviewCount: "150+",
    distance: "1.6 mi",
    deliveryTime: "35-45 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    categories: ["desserts", "beverages"],
    coordinates: { lat: 37.7569, lng: -122.4394 },
  },
  {
    id: "11",
    name: "Nigiri Ninja",
    description: "Master crafted nigiri with premium fish",
    rating: 4.9,
    reviewCount: "180+",
    distance: "1.1 mi",
    deliveryTime: "30-40 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    categories: ["nigiri", "sashimi"],
    coordinates: { lat: 37.7889, lng: -122.4144 },
  },
  {
    id: "12",
    name: "Miso Hungry",
    description: "Comfort ramen and traditional Japanese soups",
    rating: 4.6,
    reviewCount: "380+",
    distance: "0.9 mi",
    deliveryTime: "20-30 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    categories: ["ramen", "appetizers"],
    coordinates: { lat: 37.7779, lng: -122.4244 },
  },
  {
    id: "13",
    name: "Tokyo Salad Bar",
    description: "Fresh Japanese-inspired salads and healthy options",
    rating: 4.4,
    reviewCount: "220+",
    distance: "1.3 mi",
    deliveryTime: "25-35 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    categories: ["salads", "bento-boxes"],
    coordinates: { lat: 37.7619, lng: -122.4044 },
  },
  {
    id: "14",
    name: "Green Tea & Co",
    description: "Premium teas and Japanese beverages",
    rating: 4.7,
    reviewCount: "95+",
    distance: "1.8 mi",
    deliveryTime: "40-50 min",
    deliveryFee: "$0 delivery fee",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    categories: ["beverages", "desserts"],
    coordinates: { lat: 37.7529, lng: -122.4444 },
  },
];

export const categoryLabels: Record<string, string> = {
  "sushi-rolls": "Sushi Rolls",
  nigiri: "Nigiri",
  sashimi: "Sashimi",
  "bento-boxes": "Bento Boxes",
  tempura: "Tempura",
  appetizers: "Appetizers",
  salads: "Salads",
  ramen: "Ramen",
  desserts: "Desserts",
  beverages: "Beverages",
};
