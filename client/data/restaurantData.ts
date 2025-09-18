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
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "nigiri", "sashimi"],
    featured: true
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
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "tempura", "appetizers"]
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
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    categories: ["nigiri", "sashimi", "bento-boxes"]
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
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "tempura", "ramen"]
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
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    categories: ["bento-boxes", "tempura", "salads"]
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "appetizers", "beverages"]
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
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    categories: ["sushi-rolls", "sashimi", "appetizers"]
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
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    categories: ["ramen", "sushi-rolls", "appetizers"]
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
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    categories: ["tempura", "bento-boxes", "salads"]
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
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    categories: ["desserts", "beverages"]
  }
];

export const categoryLabels: Record<string, string> = {
  "sushi-rolls": "Sushi Rolls",
  "nigiri": "Nigiri",
  "sashimi": "Sashimi", 
  "bento-boxes": "Bento Boxes",
  "tempura": "Tempura",
  "appetizers": "Appetizers",
  "salads": "Salads",
  "ramen": "Ramen",
  "desserts": "Desserts",
  "beverages": "Beverages"
};
