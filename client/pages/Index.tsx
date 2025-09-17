import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Clock, 
  Shield, 
  Truck, 
  Star, 
  ArrowRight, 
  Package,
  MapPin,
  Timer
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Never run out of
                <span className="text-primary block">toilet paper</span>
                again
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Get premium toilet paper delivered to your door in 30 minutes or less. 
                From everyday essentials to luxury brands, we've got you covered.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8 py-6">
                  Order now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  Learn more
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">4.9/5</span>
                  <span className="ml-1">from 50k+ reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-brand-50 rounded-xl p-6 text-center">
                    <Package className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">Premium Brands</h3>
                    <p className="text-sm text-muted-foreground mt-1">Charmin, Cottonelle & more</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <Timer className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">30min Delivery</h3>
                    <p className="text-sm text-muted-foreground mt-1">Lightning fast service</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">Quality Guaranteed</h3>
                    <p className="text-sm text-muted-foreground mt-1">100% satisfaction promise</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 text-center">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">Track Order</h3>
                    <p className="text-sm text-muted-foreground mt-1">Real-time updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Toilet paper delivery in 3 simple steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Emergency run out? No problem. Get what you need when you need it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Choose your rolls</h3>
                <p className="text-muted-foreground">
                  Browse our selection of premium toilet paper brands. From ultra-soft to eco-friendly options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lightning delivery</h3>
                <p className="text-muted-foreground">
                  Our local runners deliver your order in 30 minutes or less, guaranteed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Delivered with care</h3>
                <p className="text-muted-foreground">
                  Contactless delivery to your door. Track your order in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to never run out again?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of happy customers who trust RollRush for their toilet paper needs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-12 py-6">
            Start ordering now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold text-foreground">RollRush</span>
              </div>
              <p className="text-muted-foreground">
                Premium toilet paper delivery in 30 minutes or less.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
                <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="/track" className="hover:text-foreground transition-colors">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RollRush. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
