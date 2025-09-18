export interface CustomerReview {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  helpfulCount: number;
}

export const customerReviews: Record<string, CustomerReview[]> = {
  "1": [
    // Sakura Sushi Palace
    {
      id: "r1-1",
      customerName: "Sarah M.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely incredible! The Dragon Roll was perfection and the fish was so fresh. Best sushi in the city!",
      helpfulCount: 12,
    },
    {
      id: "r1-2",
      customerName: "Mike R.",
      rating: 5,
      date: "1 week ago",
      comment:
        "Amazing quality and presentation. The salmon nigiri melted in my mouth. Will definitely order again!",
      helpfulCount: 8,
    },
    {
      id: "r1-3",
      customerName: "Jennifer L.",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Great sushi but delivery took a bit longer than expected. Food quality made up for it though!",
      helpfulCount: 5,
    },
  ],
  "2": [
    // Tsunami Roll House
    {
      id: "r2-1",
      customerName: "David K.",
      rating: 5,
      date: "3 days ago",
      comment:
        "The Tsunami Special Roll is incredible! Creative fusion that actually works. Highly recommend!",
      helpfulCount: 15,
    },
    {
      id: "r2-2",
      customerName: "Amanda P.",
      rating: 4,
      date: "5 days ago",
      comment:
        "Really good tempura and creative rolls. The gyoza were crispy and flavorful.",
      helpfulCount: 7,
    },
  ],
  "3": [
    // Zen Garden Sushi
    {
      id: "r3-1",
      customerName: "Robert T.",
      rating: 5,
      date: "1 day ago",
      comment:
        "Omakase was outstanding! Chef's selection was perfect and each piece was a work of art.",
      helpfulCount: 9,
    },
    {
      id: "r3-2",
      customerName: "Lisa W.",
      rating: 5,
      date: "4 days ago",
      comment:
        "Traditional and authentic. The sashimi was incredibly fresh and the presentation was beautiful.",
      helpfulCount: 6,
    },
  ],
  "4": [
    // Dragon Fire Sushi
    {
      id: "r4-1",
      customerName: "Carlos M.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Love the spicy options! Fire Dragon Roll had the perfect amount of heat and the torched salmon was amazing.",
      helpfulCount: 11,
    },
    {
      id: "r4-2",
      customerName: "Emily C.",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great spicy ramen! Broth was rich and flavorful. Portion size was generous.",
      helpfulCount: 8,
    },
  ],
  "5": [
    // Bento Box Central
    {
      id: "r5-1",
      customerName: "Kevin H.",
      rating: 5,
      date: "3 days ago",
      comment:
        "Perfect for lunch! The Deluxe Bento had everything I wanted and was great value for money.",
      helpfulCount: 14,
    },
    {
      id: "r5-2",
      customerName: "Rachel S.",
      rating: 4,
      date: "6 days ago",
      comment:
        "Vegetarian options are excellent! Finally found a place that does vegetarian Japanese food well.",
      helpfulCount: 9,
    },
  ],
  "6": [
    // Chopstick Express
    {
      id: "r6-1",
      customerName: "John D.",
      rating: 4,
      date: "1 day ago",
      comment:
        "Quick delivery and consistent quality. California roll is always fresh and well-made.",
      helpfulCount: 6,
    },
    {
      id: "r6-2",
      customerName: "Maria G.",
      rating: 5,
      date: "3 days ago",
      comment:
        "Fast and delicious! Perfect for when you need good sushi quickly. Edamame was perfectly seasoned.",
      helpfulCount: 4,
    },
  ],
  "7": [
    // Wasabi Warriors
    {
      id: "r7-1",
      customerName: "Alex B.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Bold and innovative! The Warrior Roll is unlike anything I've had before. Amazing creativity!",
      helpfulCount: 13,
    },
  ],
  "8": [
    // Ramen & Roll Co
    {
      id: "r8-1",
      customerName: "Tommy L.",
      rating: 5,
      date: "4 days ago",
      comment:
        "Perfect combination! Had the tonkotsu ramen and Philadelphia roll - both were excellent.",
      helpfulCount: 10,
    },
  ],
  "9": [
    // Tempura Temple
    {
      id: "r9-1",
      customerName: "Susan K.",
      rating: 4,
      date: "5 days ago",
      comment:
        "Light and crispy tempura. Vegetable selection was fresh and the batter was perfect.",
      helpfulCount: 7,
    },
  ],
  "10": [
    // Sweet Mochi Dreams
    {
      id: "r10-1",
      customerName: "Nicole F.",
      rating: 5,
      date: "1 day ago",
      comment:
        "Best mochi ice cream in town! The flavors are authentic and the texture is perfect.",
      helpfulCount: 18,
    },
  ],
  "11": [
    // Nigiri Ninja
    {
      id: "r11-1",
      customerName: "James P.",
      rating: 5,
      date: "3 days ago",
      comment:
        "Master-level nigiri! Each piece was perfectly formed and the fish quality is exceptional.",
      helpfulCount: 12,
    },
  ],
  "12": [
    // Miso Hungry
    {
      id: "r12-1",
      customerName: "Andrea R.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Best ramen in the area! Broth was rich and flavorful, chashu was tender and perfect.",
      helpfulCount: 16,
    },
  ],
  "13": [
    // Tokyo Salad Bar
    {
      id: "r13-1",
      customerName: "Chris M.",
      rating: 4,
      date: "4 days ago",
      comment:
        "Fresh and healthy options! Poke bowl was well-balanced with high-quality fish.",
      helpfulCount: 9,
    },
  ],
  "14": [
    // Green Tea & Co
    {
      id: "r14-1",
      customerName: "Maya T.",
      rating: 5,
      date: "1 week ago",
      comment:
        "Perfect matcha cheesecake! Not too sweet and the matcha flavor was authentic and strong.",
      helpfulCount: 11,
    },
  ],
};
