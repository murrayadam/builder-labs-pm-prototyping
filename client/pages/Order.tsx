import SushiRushHeader from "@/components/DoorDashHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Star, Clock, Plus, Minus, ShoppingCart } from "lucide-react";

export default function Order() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SushiRushHeader />
      
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Restaurant Header */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Fish className="h-12 w-12 text-gray-400" />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold text-black mb-2">SushiRush</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.8</span>
                    <span>(2,000+ ratings)</span>
                  </div>
                  <span>•</span>
                  <span>Japanese, Sushi</span>
                  <span>•</span>
                  <span>$$ • 0.3 mi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">25-35 min</span>
                  <span className="text-gray-600">• $1.99 delivery fee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Menu */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">Popular Sushi</h2>
                
                <div className="space-y-4">
                  {/* California Roll */}
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-grow">
                          <h3 className="font-bold text-black mb-1">California Roll</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Crab, avocado, cucumber with sesame seeds
                          </p>
                          <p className="text-lg font-bold text-black">$12.99</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Fish className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium min-w-[20px] text-center">0</span>
                            <Button size="sm" className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Salmon Avocado Roll */}
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-grow">
                          <h3 className="font-bold text-black mb-1">Salmon Avocado Roll</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Fresh salmon, avocado, cucumber with spicy mayo
                          </p>
                          <p className="text-lg font-bold text-black">$15.99</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Fish className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium min-w-[20px] text-center">0</span>
                            <Button size="sm" className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Spicy Tuna Roll */}
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-grow">
                          <h3 className="font-bold text-black mb-1">Spicy Tuna Roll</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Spicy tuna mix, cucumber, topped with sriracha
                          </p>
                          <p className="text-lg font-bold text-black">$13.99</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Fish className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium min-w-[20px] text-center">0</span>
                            <Button size="sm" className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rainbow Roll */}
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-grow">
                          <h3 className="font-bold text-black mb-1">Rainbow Roll</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            California roll topped with assorted fish and avocado
                          </p>
                          <p className="text-lg font-bold text-black">$18.99</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Fish className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium min-w-[20px] text-center">0</span>
                            <Button size="sm" className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-36">
                <h3 className="text-xl font-bold text-black mb-4">Your Order</h3>
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Your cart is empty</p>
                  <p className="text-sm">Add items to get started</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
