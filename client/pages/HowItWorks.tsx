import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Smartphone, 
  Package, 
  Clock, 
  Truck, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How RollRush works
          </h1>
          <p className="text-xl text-muted-foreground">
            Emergency toilet paper delivery in 4 simple steps. It's that easy.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                    1
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Open the app & browse
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Browse our curated selection of premium toilet paper brands. Filter by softness, 
                  ply count, eco-friendliness, or price to find exactly what you need.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Premium brands: Charmin, Cottonelle, Angel Soft
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Eco-friendly options available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Bulk packs for better savings
                  </li>
                </ul>
              </div>
              <Card className="order-1 lg:order-2 border-none shadow-lg">
                <CardContent className="p-8">
                  <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
                  <div className="space-y-4">
                    <div className="bg-brand-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Charmin Ultra Soft</span>
                        <span className="font-bold text-primary">$12.99</span>
                      </div>
                      <span className="text-sm text-muted-foreground">12 mega rolls</span>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Cottonelle Clean Care</span>
                        <span className="font-bold text-primary">$8.99</span>
                      </div>
                      <span className="text-sm text-muted-foreground">8 regular rolls</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <Package className="h-16 w-16 text-primary mx-auto mb-6" />
                  <div className="bg-brand-50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">Your Order</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Charmin Ultra Soft x2</span>
                        <span>$25.98</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery fee</span>
                        <span>$2.99</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold">
                        <span>Total</span>
                        <span>$28.97</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                    2
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Add to cart & checkout
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Add your favorites to cart and checkout securely. We accept all major payment methods 
                  and offer contactless delivery options.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Secure payment processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    No minimum order required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Save payment methods for faster checkout
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                    3
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Track & receive
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Watch your order progress in real-time. Get notified when your runner 
                  is nearby and enjoy contactless delivery to your door.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Real-time GPS tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    SMS and push notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Contactless delivery available
                  </li>
                </ul>
              </div>
              <Card className="order-1 lg:order-2 border-none shadow-lg">
                <CardContent className="p-8">
                  <Truck className="h-16 w-16 text-primary mx-auto mb-6" />
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <h4 className="font-semibold text-green-700 mb-2">Order Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Order confirmed</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Picked up</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Out for delivery</span>
                        <Clock className="h-4 w-4 text-primary animate-pulse" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-4">
                        Estimated arrival: 8 minutes
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to get started?
          </h2>
          <Button size="lg" className="text-lg px-12 py-6">
            Order toilet paper now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
