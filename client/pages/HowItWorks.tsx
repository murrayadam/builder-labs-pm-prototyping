import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Smartphone,
  Package,
  Clock,
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
            How RollRush works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Emergency toilet paper delivery in 3 simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-black">
                    Choose your products
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Browse our curated selection of premium toilet paper brands.
                  Filter by softness, ply count, and price.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Premium brands available
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Eco-friendly options
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Bulk savings available
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <Smartphone className="h-16 w-16 text-primary mx-auto mb-8" />
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-black">
                        Charmin Ultra Soft
                      </span>
                      <span className="font-bold text-black">$12.99</span>
                    </div>
                    <span className="text-sm text-gray-500">12 mega rolls</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-black">
                        Cottonelle Clean Care
                      </span>
                      <span className="font-bold text-black">$8.99</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      8 regular rolls
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-black">
                    We pick and pack
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Our local runners pick up your order from nearby stores and
                  prepare it for fast delivery to your door.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Quality checked items
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Careful packaging
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Real-time updates
                  </div>
                </div>
              </div>

              <div className="lg:order-1 bg-gray-50 rounded-2xl p-8">
                <Package className="h-16 w-16 text-primary mx-auto mb-8" />
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-black mb-4">Your order</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Charmin Ultra Soft x2
                      </span>
                      <span className="text-black">$25.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery fee</span>
                      <span className="text-black">$2.99</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-semibold">
                      <span className="text-black">Total</span>
                      <span className="text-black">$28.97</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-black">
                    Delivered fast
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  Track your order in real-time and receive contactless delivery
                  in 30 minutes or less, guaranteed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    GPS tracking
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    SMS notifications
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Contactless delivery
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <Truck className="h-16 w-16 text-primary mx-auto mb-8" />
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <h4 className="font-semibold text-black mb-4">
                    Order tracking
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Order confirmed</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Picked up</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black">
                        Out for delivery
                      </span>
                      <Clock className="h-4 w-4 text-primary animate-pulse" />
                    </div>
                    <div className="text-xs text-gray-500 mt-4 pt-3 border-t">
                      Estimated arrival: 8 minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to get started?
          </h2>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-full font-semibold"
          >
            Order toilet paper now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
