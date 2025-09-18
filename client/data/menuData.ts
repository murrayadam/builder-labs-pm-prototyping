import { MenuItemType } from "@/components/MenuItem";

export const menuData: MenuItemType[] = [
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
  "Salads",
  "Ramen",
  "Desserts",
  "Beverages"
];
