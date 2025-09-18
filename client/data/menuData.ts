import { MenuItemType } from "@/components/MenuItem";

export const menuData: MenuItemType[] = [
  // Sashimi
  {
    id: "salmon-sashimi",
    name: "Salmon Sashimi",
    description: "6 pieces of fresh Atlantic salmon, no rice",
    price: 14.99,
    image: "/api/placeholder/80/80",
    category: "Sashimi",
    tags: ["raw", "gluten-free"],
  },
  {
    id: "tuna-sashimi",
    name: "Tuna Sashimi",
    description: "6 pieces of premium bluefin tuna, no rice",
    price: 18.99,
    image: "/api/placeholder/80/80",
    category: "Sashimi",
    tags: ["raw", "gluten-free"],
    trending: true,
  },
  {
    id: "mixed-sashimi",
    name: "Chef's Sashimi Selection",
    description: "9 pieces of chef's choice premium fish",
    price: 24.99,
    image: "/api/placeholder/80/80",
    category: "Sashimi",
    tags: ["raw", "gluten-free"],
    popular: true,
  },

  // Bento Boxes
  {
    id: "teriyaki-chicken-bento",
    name: "Teriyaki Chicken Bento",
    description: "Grilled chicken, rice, salad, miso soup, and 3 pieces California roll",
    price: 16.99,
    image: "/api/placeholder/80/80",
    category: "Bento Boxes",
    tags: ["cooked"],
  },
  {
    id: "salmon-teriyaki-bento",
    name: "Salmon Teriyaki Bento",
    description: "Grilled salmon, rice, salad, miso soup, and 3 pieces salmon roll",
    price: 18.99,
    image: "/api/placeholder/80/80",
    category: "Bento Boxes",
    tags: ["cooked"],
    popular: true,
  },
  {
    id: "vegetarian-bento",
    name: "Vegetarian Bento",
    description: "Tofu teriyaki, rice, salad, miso soup, and veggie roll",
    price: 14.99,
    image: "/api/placeholder/80/80",
    category: "Bento Boxes",
    tags: ["vegetarian", "cooked"],
  },

  // Tempura
  {
    id: "shrimp-tempura",
    name: "Shrimp Tempura",
    description: "6 pieces of crispy fried shrimp with tempura sauce",
    price: 12.99,
    image: "/api/placeholder/80/80",
    category: "Tempura",
    tags: ["cooked"],
  },
  {
    id: "vegetable-tempura",
    name: "Vegetable Tempura",
    description: "Mixed seasonal vegetables in crispy tempura batter",
    price: 9.99,
    image: "/api/placeholder/80/80",
    category: "Tempura",
    tags: ["vegetarian", "cooked"],
  },
  {
    id: "soft-shell-crab-tempura",
    name: "Soft Shell Crab Tempura",
    description: "Whole soft shell crab in tempura batter",
    price: 15.99,
    image: "/api/placeholder/80/80",
    category: "Tempura",
    tags: ["cooked"],
    trending: true,
  },

  // Appetizers
  {
    id: "gyoza",
    name: "Pork Gyoza",
    description: "6 pan-fried dumplings with ponzu dipping sauce",
    price: 8.99,
    image: "/api/placeholder/80/80",
    category: "Appetizers",
    tags: ["cooked"],
    popular: true,
  },
  {
    id: "edamame",
    name: "Edamame",
    description: "Steamed soybeans with sea salt",
    price: 5.99,
    image: "/api/placeholder/80/80",
    category: "Appetizers",
    tags: ["vegetarian", "cooked", "gluten-free"],
  },
  {
    id: "agedashi-tofu",
    name: "Agedashi Tofu",
    description: "Lightly fried tofu in savory dashi broth",
    price: 7.99,
    image: "/api/placeholder/80/80",
    category: "Appetizers",
    tags: ["vegetarian", "cooked"],
  },

  // Salads
  {
    id: "seaweed-salad",
    name: "Seaweed Salad",
    description: "Wakame seaweed with sesame dressing",
    price: 6.99,
    image: "/api/placeholder/80/80",
    category: "Salads",
    tags: ["vegetarian", "cooked", "gluten-free"],
  },
  {
    id: "spicy-tuna-salad",
    name: "Spicy Tuna Salad",
    description: "Mixed greens with spicy tuna and avocado",
    price: 13.99,
    image: "/api/placeholder/80/80",
    category: "Salads",
    tags: ["spicy", "raw"],
  },

  // Ramen
  {
    id: "tonkotsu-ramen",
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth with chashu, egg, and noodles",
    price: 14.99,
    image: "/api/placeholder/80/80",
    category: "Ramen",
    tags: ["cooked"],
    trending: true,
  },
  {
    id: "vegetarian-ramen",
    name: "Vegetarian Ramen",
    description: "Miso broth with tofu, vegetables, and noodles",
    price: 12.99,
    image: "/api/placeholder/80/80",
    category: "Ramen",
    tags: ["vegetarian", "cooked"],
  },

  // Desserts
  {
    id: "mochi-ice-cream",
    name: "Mochi Ice Cream",
    description: "3 pieces of assorted flavors (green tea, red bean, mango)",
    price: 7.99,
    image: "/api/placeholder/80/80",
    category: "Desserts",
    tags: ["vegetarian", "cooked", "gluten-free"],
  },
  {
    id: "dorayaki",
    name: "Dorayaki",
    description: "Pancake sandwich filled with sweet red bean paste",
    price: 5.99,
    image: "/api/placeholder/80/80",
    category: "Desserts",
    tags: ["vegetarian", "cooked"],
  },

  // Beverages
  {
    id: "green-tea",
    name: "Green Tea",
    description: "Traditional hot green tea",
    price: 2.99,
    image: "/api/placeholder/80/80",
    category: "Beverages",
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: "ramune",
    name: "Ramune Soda",
    description: "Japanese marble soda, original flavor",
    price: 3.99,
    image: "/api/placeholder/80/80",
    category: "Beverages",
    tags: ["vegetarian", "gluten-free"],
  },
];

export const menuCategories = [
  "Nigiri",
  "Sashimi",
  "Bento Boxes",
  "Tempura",
  "Appetizers",
  "Salads",
  "Ramen",
  "Desserts",
  "Beverages"
];
