export interface MenuItemReview {
  rating: number;
  count: number;
}

export interface RestaurantMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
  reviews: MenuItemReview;
}

export const restaurantMenus: Record<string, RestaurantMenuItem[]> = {
  "1": [
    // Sakura Sushi Palace
    {
      id: "1-1",
      name: "Dragon Roll",
      description:
        "Shrimp tempura, avocado, cucumber topped with eel and avocado",
      price: 18.95,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      popular: true,
      reviews: { rating: 4.8, count: 45 },
    },
    {
      id: "1-2",
      name: "Salmon Nigiri (2pc)",
      description: "Fresh Atlantic salmon over seasoned sushi rice",
      price: 8.5,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
      category: "Nigiri",
      reviews: { rating: 4.9, count: 67 },
    },
    {
      id: "1-3",
      name: "Chirashi Bowl",
      description: "Assorted sashimi over sushi rice with pickled vegetables",
      price: 24.95,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Sashimi",
      reviews: { rating: 4.7, count: 32 },
    },
    {
      id: "1-4",
      name: "Spicy Tuna Roll",
      description: "Fresh tuna with spicy mayo, cucumber, and sesame seeds",
      price: 12.95,
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      spicy: true,
      popular: true,
      reviews: { rating: 4.6, count: 89 },
    },
  ],
  "2": [
    // Tsunami Roll House
    {
      id: "2-1",
      name: "Tsunami Special Roll",
      description: "Salmon, tuna, yellowtail with spicy mayo and eel sauce",
      price: 22.95,
      image:
        "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      spicy: true,
      popular: true,
      reviews: { rating: 4.8, count: 78 },
    },
    {
      id: "2-2",
      name: "Shrimp Tempura",
      description: "Crispy battered shrimp with tempura sauce",
      price: 9.95,
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
      category: "Tempura",
      reviews: { rating: 4.5, count: 56 },
    },
    {
      id: "2-3",
      name: "Gyoza (6pc)",
      description: "Pan-fried pork dumplings with ponzu dipping sauce",
      price: 8.5,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop",
      category: "Appetizers",
      popular: true,
      reviews: { rating: 4.7, count: 43 },
    },
  ],
  "3": [
    // Zen Garden Sushi
    {
      id: "3-1",
      name: "Omakase Selection",
      description: "Chef's choice of 8 pieces nigiri with miso soup",
      price: 35.95,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
      category: "Nigiri",
      popular: true,
      reviews: { rating: 4.9, count: 34 },
    },
    {
      id: "3-2",
      name: "Sashimi Deluxe",
      description: "15 pieces of assorted premium sashimi",
      price: 29.95,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Sashimi",
      reviews: { rating: 4.8, count: 28 },
    },
    {
      id: "3-3",
      name: "Zen Bento Box",
      description: "Teriyaki chicken, California roll, tempura, and rice",
      price: 16.95,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Bento Boxes",
      reviews: { rating: 4.6, count: 52 },
    },
  ],
  "4": [
    // Dragon Fire Sushi
    {
      id: "4-1",
      name: "Fire Dragon Roll",
      description: "Spicy tuna, jalapeño, topped with torched salmon",
      price: 19.95,
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      spicy: true,
      popular: true,
      reviews: { rating: 4.7, count: 92 },
    },
    {
      id: "4-2",
      name: "Spicy Miso Ramen",
      description: "Rich pork broth with spicy miso, chashu, and green onions",
      price: 14.95,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      category: "Ramen",
      spicy: true,
      reviews: { rating: 4.6, count: 76 },
    },
    {
      id: "4-3",
      name: "Volcano Tempura",
      description: "Mixed tempura with spicy tempura sauce",
      price: 12.95,
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
      category: "Tempura",
      spicy: true,
      reviews: { rating: 4.4, count: 38 },
    },
  ],
  "5": [
    // Bento Box Central
    {
      id: "5-1",
      name: "Deluxe Bento",
      description: "Salmon teriyaki, California roll, tempura, salad, and rice",
      price: 18.95,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Bento Boxes",
      popular: true,
      reviews: { rating: 4.8, count: 65 },
    },
    {
      id: "5-2",
      name: "Vegetarian Bento",
      description: "Inari sushi, vegetable tempura, cucumber roll, and edamame",
      price: 15.95,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      category: "Bento Boxes",
      vegetarian: true,
      reviews: { rating: 4.5, count: 41 },
    },
    {
      id: "5-3",
      name: "Seaweed Salad",
      description: "Fresh wakame seaweed with sesame dressing",
      price: 6.95,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      category: "Salads",
      vegetarian: true,
      reviews: { rating: 4.3, count: 29 },
    },
  ],
  "6": [
    // Chopstick Express
    {
      id: "6-1",
      name: "California Roll",
      description: "Crab, avocado, cucumber with sesame seeds",
      price: 8.95,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      popular: true,
      reviews: { rating: 4.6, count: 124 },
    },
    {
      id: "6-2",
      name: "Edamame",
      description: "Steamed young soybeans with sea salt",
      price: 4.95,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop",
      category: "Appetizers",
      vegetarian: true,
      reviews: { rating: 4.4, count: 67 },
    },
    {
      id: "6-3",
      name: "Green Tea",
      description: "Premium Japanese sencha green tea",
      price: 3.5,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      category: "Beverages",
      vegetarian: true,
      reviews: { rating: 4.2, count: 23 },
    },
  ],
  "7": [
    // Wasabi Warriors
    {
      id: "7-1",
      name: "Warrior Roll",
      description: "Spicy salmon, cucumber, topped with tuna and wasabi mayo",
      price: 20.95,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      spicy: true,
      popular: true,
      reviews: { rating: 4.8, count: 87 },
    },
    {
      id: "7-2",
      name: "Tuna Sashimi",
      description: "8 pieces of premium bluefin tuna sashimi",
      price: 22.95,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Sashimi",
      reviews: { rating: 4.9, count: 45 },
    },
  ],
  "8": [
    // Ramen & Roll Co
    {
      id: "8-1",
      name: "Tonkotsu Ramen",
      description: "Rich pork bone broth with chashu, egg, and bamboo shoots",
      price: 16.95,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      category: "Ramen",
      popular: true,
      reviews: { rating: 4.7, count: 98 },
    },
    {
      id: "8-2",
      name: "Philadelphia Roll",
      description: "Salmon, cream cheese, cucumber with sesame seeds",
      price: 11.95,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      category: "Sushi Rolls",
      reviews: { rating: 4.5, count: 73 },
    },
  ],
  "9": [
    // Tempura Temple
    {
      id: "9-1",
      name: "Vegetable Tempura",
      description: "Assorted seasonal vegetables in light crispy batter",
      price: 11.95,
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
      category: "Tempura",
      vegetarian: true,
      reviews: { rating: 4.6, count: 54 },
    },
    {
      id: "9-2",
      name: "Temple Bento",
      description: "Vegetable tempura, cucumber roll, miso soup, and rice",
      price: 14.95,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Bento Boxes",
      vegetarian: true,
      reviews: { rating: 4.4, count: 37 },
    },
  ],
  "10": [
    // Sweet Mochi Dreams
    {
      id: "10-1",
      name: "Mochi Ice Cream (3pc)",
      description: "Green tea, strawberry, and vanilla mochi ice cream",
      price: 7.95,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Desserts",
      vegetarian: true,
      popular: true,
      reviews: { rating: 4.8, count: 156 },
    },
    {
      id: "10-2",
      name: "Matcha Latte",
      description: "Premium ceremonial grade matcha with steamed milk",
      price: 5.5,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      category: "Beverages",
      vegetarian: true,
      reviews: { rating: 4.6, count: 43 },
    },
  ],
  "11": [
    // Nigiri Ninja
    {
      id: "11-1",
      name: "Nigiri Platter",
      description: "10 pieces of chef's selection premium nigiri",
      price: 28.95,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop",
      category: "Nigiri",
      popular: true,
      reviews: { rating: 4.9, count: 67 },
    },
    {
      id: "11-2",
      name: "Yellowtail Sashimi",
      description: "8 pieces of fresh yellowtail sashimi",
      price: 19.95,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Sashimi",
      reviews: { rating: 4.8, count: 34 },
    },
  ],
  "12": [
    // Miso Hungry
    {
      id: "12-1",
      name: "Shoyu Ramen",
      description: "Classic soy sauce based broth with tender chashu pork",
      price: 13.95,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      category: "Ramen",
      popular: true,
      reviews: { rating: 4.7, count: 89 },
    },
    {
      id: "12-2",
      name: "Agedashi Tofu",
      description: "Lightly fried tofu in savory dashi broth",
      price: 7.95,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop",
      category: "Appetizers",
      vegetarian: true,
      reviews: { rating: 4.5, count: 42 },
    },
  ],
  "13": [
    // Tokyo Salad Bar
    {
      id: "13-1",
      name: "Poke Bowl",
      description: "Salmon, tuna, avocado, edamame over mixed greens",
      price: 16.95,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      category: "Salads",
      popular: true,
      reviews: { rating: 4.6, count: 78 },
    },
    {
      id: "13-2",
      name: "Healthy Bento",
      description: "Grilled salmon, brown rice, steamed vegetables, miso soup",
      price: 17.95,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop",
      category: "Bento Boxes",
      reviews: { rating: 4.5, count: 61 },
    },
  ],
  "14": [
    // Green Tea & Co
    {
      id: "14-1",
      name: "Matcha Cheesecake",
      description: "Creamy matcha cheesecake with black sesame crust",
      price: 8.95,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
      category: "Desserts",
      vegetarian: true,
      popular: true,
      reviews: { rating: 4.8, count: 89 },
    },
    {
      id: "14-2",
      name: "Jasmine Tea",
      description: "Fragrant jasmine green tea served hot or iced",
      price: 4.5,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      category: "Beverages",
      vegetarian: true,
      reviews: { rating: 4.4, count: 23 },
    },
  ],
};
