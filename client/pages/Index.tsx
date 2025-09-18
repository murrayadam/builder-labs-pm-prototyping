import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Clock, Shield, Truck, Star, ArrowRight, Package, Fish } from "lucide-react";
import { Link } from "react-router-dom";
import { restaurantMenus } from "@/data/menuItemData";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-8">
            Fresh sushi delivery
            <br />
            <span className="text-primary">in 30 minutes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Fresh, authentic sushi delivered to your door. From classic
            rolls to premium sashimi.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full font-semibold"
          >
            <Link to="/order">Order now</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Fast delivery
              </h3>
              <p className="text-gray-600">
                Get fresh sushi in 30 minutes or less with our network of
                local delivery partners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Fish className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Fresh ingredients
              </h3>
              <p className="text-gray-600">
                Made with premium fish, seasoned rice, and authentic Japanese
                ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Quality guaranteed
              </h3>
              <p className="text-gray-600">
                100% satisfaction promise. Not happy? We'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get fresh sushi delivered in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <Package className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Choose your sushi
              </h3>
              <p className="text-gray-600">
                Browse our selection of fresh sushi rolls, sashimi, and sets and add to
                cart.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <Truck className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                We prepare fresh
              </h3>
              <p className="text-gray-600">
                Our expert sushi chefs prepare your order fresh and pack carefully for delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <Clock className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Delivered fast
              </h3>
              <p className="text-gray-600">
                Track your order and receive it at your door in 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Popular sushi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">
                  California Roll
                </h3>
                <p className="text-sm text-gray-600 mb-3">8 pieces</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$12.99</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">
                  Salmon Avocado Roll
                </h3>
                <p className="text-sm text-gray-600 mb-3">8 pieces</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$15.99</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">
                  Spicy Tuna Roll
                </h3>
                <p className="text-sm text-gray-600 mb-3">8 pieces</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$13.99</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Fish className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">Rainbow Roll</h3>
                <p className="text-sm text-gray-600 mb-3">8 pieces</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$18.99</span>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Craving sushi? We deliver
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands who trust SushiRush for fresh, authentic sushi
            delivery.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-full font-semibold"
          >
            <Link to="/order">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Get more from your neighborhood */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Get more from your neighborhood
          </h2>

          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8 justify-center">
              <button className="border-b-2 border-black pb-4 text-black font-medium">
                Top Cities
              </button>
              <button className="border-b-2 border-transparent pb-4 text-gray-500 font-medium hover:text-gray-700">
                Top Brands
              </button>
              <button className="border-b-2 border-transparent pb-4 text-gray-500 font-medium hover:text-gray-700">
                Top Categories
              </button>
            </nav>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            <div className="space-y-4">
              <a
                href="/city/new-york"
                className="block text-gray-600 hover:text-black text-sm"
              >
                New York
              </a>
              <a
                href="/city/houston"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Houston
              </a>
              <a
                href="/city/san-francisco"
                className="block text-gray-600 hover:text-black text-sm"
              >
                San Francisco
              </a>
              <a
                href="/city/vancouver"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Vancouver, BC
              </a>
            </div>
            <div className="space-y-4">
              <a
                href="/city/los-angeles"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Los Angeles
              </a>
              <a
                href="/city/brooklyn"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Brooklyn
              </a>
              <a
                href="/city/seattle"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Seattle
              </a>
              <a
                href="/city/miami"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Miami
              </a>
            </div>
            <div className="space-y-4">
              <a
                href="/city/toronto"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Toronto
              </a>
              <a
                href="/city/san-diego"
                className="block text-gray-600 hover:text-black text-sm"
              >
                San Diego
              </a>
              <a
                href="/city/atlanta"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Atlanta
              </a>
              <a
                href="/city/san-antonio"
                className="block text-gray-600 hover:text-black text-sm"
              >
                San Antonio
              </a>
            </div>
            <div className="space-y-4">
              <a
                href="/city/chicago"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Chicago
              </a>
              <a
                href="/city/las-vegas"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Las Vegas
              </a>
              <a
                href="/city/queens"
                className="block text-gray-600 hover:text-black text-sm"
              >
                Queens
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="text-gray-600 hover:text-black font-medium text-sm flex items-center mx-auto">
              See more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">SushiRush</h3>
              <p className="text-gray-600 text-sm">
                Fresh, authentic sushi delivery in 30 minutes or less.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/about" className="text-gray-600 hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/how-it-works"
                    className="text-gray-600 hover:text-black"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-600 hover:text-black">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/help" className="text-gray-600 hover:text-black">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-black">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/track" className="text-gray-600 hover:text-black">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-black">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-black">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2024 SushiRush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
