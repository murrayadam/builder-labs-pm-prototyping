import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Clock, 
  Shield, 
  Truck, 
  Star, 
  ArrowRight, 
  Package
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-8">
            Toilet paper delivery
            <br />
            <span className="text-primary">in 30 minutes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Premium toilet paper delivered to your door. 
            From everyday essentials to luxury brands.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full font-semibold">
            Order now
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
              <h3 className="text-xl font-bold text-black mb-3">Fast delivery</h3>
              <p className="text-gray-600">
                Get your toilet paper in 30 minutes or less with our network of local runners.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Premium brands</h3>
              <p className="text-gray-600">
                Choose from Charmin, Cottonelle, Angel Soft and other trusted brands.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Quality guaranteed</h3>
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
              Get toilet paper delivered in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <Package className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Choose your products</h3>
              <p className="text-gray-600">
                Browse our selection of premium toilet paper brands and add to cart.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <Truck className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">We pick and pack</h3>
              <p className="text-gray-600">
                Our team carefully selects your items and prepares for delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <Clock className="h-12 w-12 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Delivered fast</h3>
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
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Popular products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">Charmin Ultra Soft</h3>
                <p className="text-sm text-gray-600 mb-3">12 mega rolls</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$12.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">Cottonelle Clean Care</h3>
                <p className="text-sm text-gray-600 mb-3">8 regular rolls</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$8.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">Angel Soft Mega Rolls</h3>
                <p className="text-sm text-gray-600 mb-3">6 mega rolls</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$6.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-bold text-black mb-1">Quilted Northern</h3>
                <p className="text-sm text-gray-600 mb-3">12 regular rolls</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">$9.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
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
            Never run out again
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands who trust RollRush for reliable toilet paper delivery.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-full font-semibold">
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">RollRush</h3>
              <p className="text-gray-600 text-sm">
                Premium toilet paper delivery in 30 minutes or less.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="/how-it-works" className="text-gray-600 hover:text-black">How it works</a></li>
                <li><a href="/careers" className="text-gray-600 hover:text-black">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/help" className="text-gray-600 hover:text-black">Help Center</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-black">Contact</a></li>
                <li><a href="/track" className="text-gray-600 hover:text-black">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="text-gray-600 hover:text-black">Privacy</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-black">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; 2024 RollRush. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
