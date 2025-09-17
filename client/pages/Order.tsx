import SushiRushHeader from "@/components/SushiRushHeader";
import CategorySection from "@/components/CategorySection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Star, Clock, Plus, Minus, ShoppingCart } from "lucide-react";

export default function Order() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SushiRushHeader />
      <CategorySection />

      <main className="pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2"></div>
            <div className="lg:col-span-1"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
