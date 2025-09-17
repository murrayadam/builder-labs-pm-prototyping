import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, MapPin, ChevronDown } from "lucide-react";

interface SushiRushHeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  cartCount?: number;
}

export default function SushiRushHeader({ searchQuery = "", onSearchChange, cartCount = 0 }: SushiRushHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[400] pt-16">
      <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 w-56">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">SushiRush</span>
          </a>
        </div>

        {/* Center content - Search and location */}
        <div className="flex items-center flex-grow max-w-[2200px] ml-auto mr-auto pr-4">
          <div className="flex flex-grow gap-3 justify-center">
            <div className="flex-grow">
              <div className="w-full">
                <div className="px-4">
                  <div className="w-full">
                    <div className="flex min-h-8">
                      <div className="flex items-center bg-gray-100 rounded-full w-full px-2 py-1">
                        <div className="mr-2 ml-2">
                          <Search className="h-6 w-6 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Search SushiRush"
                          value={searchQuery}
                          onChange={(e) => onSearchChange?.(e.target.value)}
                          className="flex-grow bg-transparent outline-none text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex gap-2 justify-end">
            {/* Address Picker */}
            <div className="flex items-center">
              <button className="flex items-center bg-gray-100 rounded-full min-h-8 px-3 hover:bg-gray-200 transition-colors">
                <span className="flex items-center w-4">
                  <MapPin className="h-4 w-4 text-gray-600" />
                </span>
                <span className="flex-grow mx-1 font-bold text-sm truncate">
                  123 Mockingbird Ln
                </span>
                <span className="flex items-center w-4">
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                </span>
              </button>
            </div>

            {/* Delivery/Pickup Toggle */}
            <div className="bg-gray-100 rounded-full flex">
              <button className="bg-black text-white rounded-full px-3 py-1 text-sm font-bold transition-colors">
                Delivery
              </button>
              <button className="text-black px-3 py-1 text-sm font-bold hover:bg-gray-200 rounded-full transition-colors">
                Pickup
              </button>
            </div>

            {/* Notification Bell */}
            <div className="flex">
              <div className="relative">
                <button className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Bell className="h-4 w-4 text-gray-600" />
                </button>
                <div className="absolute -top-1 -right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Shopping Cart */}
            <div className="flex">
              <button className="bg-red-600 text-white rounded-full px-3 py-1 flex items-center gap-1 hover:bg-red-700 transition-colors min-h-8">
                <ShoppingCart className="h-4 w-4" />
                <span className="font-bold text-sm">{cartCount}</span>
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center">
              <a
                href="/signin"
                className="bg-gray-100 text-black rounded-full px-3 py-1 text-sm font-bold hover:bg-gray-200 transition-colors mr-1"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-bold hover:bg-gray-400 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
