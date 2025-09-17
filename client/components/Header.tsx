import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black">RollRush</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/how-it-works"
              className="text-gray-700 hover:text-black font-medium"
            >
              How it works
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-black font-medium"
            >
              About
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="hidden lg:flex text-gray-700 hover:text-black font-medium"
            >
              <User className="h-4 w-4 mr-2" />
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-full">
              Order now
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
