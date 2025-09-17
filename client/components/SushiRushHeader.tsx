import { Button } from "@/components/ui/button";
import { Bell, ShoppingCart, Search, MapPin, ChevronDown } from "lucide-react";

export default function SushiRushHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[400] pt-16">
      <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 w-56">
          <a href="/" className="flex items-center">
            <div className="flex items-center">
              <svg 
                aria-hidden="true" 
                width="32" 
                height="18" 
                viewBox="0 0 99.5 56.5" 
                fill="#EB1700"
                className="mr-2"
              >
                <path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"/>
              </svg>
              <svg 
                aria-hidden="true" 
                width="112" 
                height="13" 
                viewBox="0 0 361.1 42" 
                fill="#EB1700"
              >
                <path d="M8.62,8.66V33.38h6.32A12.21,12.21,0,0,0,27,21,12,12,0,0,0,14.94,8.66ZM14.94.91C26.72.91,35.63,9.81,35.63,21S26.72,41.14,14.94,41.14H1a1,1,0,0,1-1-1V1.95a1,1,0,0,1,1-1Z"/>
                <path d="M66,34.24A13.22,13.22,0,1,0,52.82,21,13.24,13.24,0,0,0,66,34.24M66,0C78.4,0,87.88,9.53,87.88,21S78.4,42,66,42,44.2,32.52,44.2,21,53.68,0,66,0"/>
                <path d="M118,34.24A13.22,13.22,0,1,0,104.75,21,13.24,13.24,0,0,0,118,34.24M118,0c12.36,0,21.84,9.48,21.84,21S130.32,42,118,42,96.12,32.52,96.12,21,105.6,0,118,0"/>
                <path d="M168.75,8.66h-8.91V19.3h8.91a5.22,5.22,0,0,0,5.46-5.17,5.28,5.28,0,0,0-5.46-5.46M151.22,1.95a1,1,0,0,1,1-1H169c8,0,13.79,5.86,13.79,13.22a13,13,0,0,1-7.18,11.78l7.74,13.68a1,1,0,0,1-.91,1.56h-6.79a1,1,0,0,1-.91-.54l-7.46-13.54h-7.47v13a1,1,0,0,1-1,1h-6.54a1,1,0,0,1-1-1Z"/>
                <path d="M205.26,8.85V33.57h6.32a12.21,12.21,0,0,0,12.07-12.36A12,12,0,0,0,211.58,8.85Zm6.32-7.76c11.78,0,20.69,8.91,20.69,20.12s-8.91,20.12-20.69,20.12h-13.9a1,1,0,0,1-1-1V2.14a1,1,0,0,1,1-1Z"/>
                <path d="M258.56,10.92l-4.89,13.22h9.77Zm-7.76,20.69-3.2,8.8a1,1,0,0,1-1,.69h-6.94a1,1,0,0,1-1-1.42l15-38.15a1,1,0,0,1,1-.66h7.77a1,1,0,0,1,1,.66l15,38.15a1,1,0,0,1-1,1.42h-6.94a1,1,0,0,1-1-.69l-3.2-8.8Z"/>
                <path d="M286.48,11.78C286.48,5.46,291.94,0,300.56,0a17.84,17.84,0,0,1,12.51,4.71,1,1,0,0,1,0,1.47L309.22,10a1,1,0,0,1-1.42,0,10.12,10.12,0,0,0-6.67-2.63c-3.45,0-6,2-6,4.31,0,7.47,20.38,3.16,20.38,17.53C315.5,36.49,310,42,300.27,42a20.41,20.41,0,0,1-14.54-5.84,1,1,0,0,1,0-1.47l3.72-3.72a1,1,0,0,1,1.45,0,12.85,12.85,0,0,0,8.79,3.58c4.31,0,7.15-2.3,7.15-5.18,0-7.47-20.37-3.16-20.37-17.53"/>
                <path d="M352.47,1.9V17H335.22V1.9a1,1,0,0,0-1-1h-6.54a1,1,0,0,0-1,1V40.05a1,1,0,0,0,1,1h6.54a1,1,0,0,0,1-1V24.71h17.24V40.05a1,1,0,0,0,1,1H360a1,1,0,0,0,1-1V1.9a1,1,0,0,0-1-1h-6.54A1,1,0,0,0,352.47,1.9Z"/>
              </svg>
            </div>
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
                <span className="font-bold text-sm">0</span>
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
