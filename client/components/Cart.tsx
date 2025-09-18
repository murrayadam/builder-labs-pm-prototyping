import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { MenuItemType } from "./MenuItem";

interface CartProps {
  items: MenuItemType[];
  quantities: Record<string, number>;
  onQuantityChange: (itemId: string, newQuantity: number) => void;
}

export default function Cart({ items, quantities, onQuantityChange }: CartProps) {
  const cartItems = items.filter(item => quantities[item.id] > 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * quantities[item.id]), 0);
  const deliveryFee = 1.99;
  const tax = subtotal * 0.0875; // 8.75% tax
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <Card className="border-none shadow-sm sticky top-52">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-black mb-4">Your Order</h3>
          <div className="text-center py-8 text-gray-500">
            <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <p>Your cart is empty</p>
            <p className="text-sm">Add items to get started</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-sm sticky top-48">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-black mb-4">Your Order</h3>
        
        <div className="space-y-3 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="flex-grow">
                <h4 className="font-medium text-black text-sm">{item.name}</h4>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-6 h-6 p-0"
                  onClick={() => onQuantityChange(item.id, quantities[item.id] - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">{quantities[item.id]}</span>
                <Button
                  size="sm"
                  className="w-6 h-6 p-0 bg-red-600 hover:bg-red-700"
                  onClick={() => onQuantityChange(item.id, quantities[item.id] + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
