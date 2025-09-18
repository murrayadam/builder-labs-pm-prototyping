import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";
import Index from "./pages/Index";
import Order from "./pages/Order";
import RestaurantDetail from "./pages/RestaurantDetail";
import HowItWorks from "./pages/HowItWorks";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LocationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantDetail />}
          />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About SushiRush"
                description="Learn more about our mission to deliver fresh, authentic sushi in 30 minutes."
              />
            }
          />
          <Route
            path="/careers"
            element={
              <Placeholder
                title="Careers"
                description="Join the SushiRush team and help deliver fresh sushi to people in your city."
              />
            }
          />
          <Route
            path="/help"
            element={
              <Placeholder
                title="Help Center"
                description="Find answers to common questions about orders, delivery, and more."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact Us"
                description="Get in touch with our customer support team."
              />
            }
          />
          <Route
            path="/track"
            element={
              <Placeholder
                title="Track Your Order"
                description="Enter your order number to see real-time delivery updates."
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <Placeholder
                title="Privacy Policy"
                description="Learn how we protect your personal information."
              />
            }
          />
          <Route
            path="/terms"
            element={
              <Placeholder
                title="Terms of Service"
                description="Read our terms and conditions."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </LocationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
