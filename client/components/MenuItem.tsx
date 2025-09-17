import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, TrendingUp, Leaf, Flame } from "lucide-react";

export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  popular?: boolean;
  trending?: boolean;
}

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onQuantityChange: (itemId: string, newQuantity: number) => void;
}

export default function MenuItem({ item, quantity, onQuantityChange }: MenuItemProps) {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(item.id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(item.id, quantity + 1);
  };

  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex-grow">
            <div className="flex items-start gap-2 mb-1">
              <h3 className="font-bold text-black">{item.name}</h3>
              <div className="flex gap-1">
                {item.trending && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
                {item.popular && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    Popular
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            
            <div className="flex items-center gap-2 mb-2">
              {item.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`text-xs ${
                    tag === "spicy" ? "border-red-200 text-red-700" :
                    tag === "vegetarian" ? "border-green-200 text-green-700" :
                    tag === "raw" ? "border-blue-200 text-blue-700" :
                    tag === "cooked" ? "border-orange-200 text-orange-700" :
                    tag === "gluten-free" ? "border-purple-200 text-purple-700" :
                    "border-gray-200 text-gray-700"
                  }`}
                >
                  {tag === "spicy" && <Flame className="h-3 w-3 mr-1" />}
                  {tag === "vegetarian" && <Leaf className="h-3 w-3 mr-1" />}
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Badge>
              ))}
            </div>
            
            <p className="text-lg font-bold text-black">${item.price.toFixed(2)}</p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                  target.parentElement!.innerHTML = '<div class="text-2xl">🍣</div>';
                }}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0"
                onClick={handleDecrease}
                disabled={quantity === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[20px] text-center">{quantity}</span>
              <Button
                size="sm"
                className="w-8 h-8 p-0 bg-red-600 hover:bg-red-700"
                onClick={handleIncrease}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
