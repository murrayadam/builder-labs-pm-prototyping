import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">RollRush</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Sign in
            </Button>
            <Button size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Order now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
