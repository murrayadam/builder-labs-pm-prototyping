import MenuItem, { MenuItemType } from "./MenuItem";

interface MenuCategoryProps {
  title: string;
  items: MenuItemType[];
  quantities: Record<string, number>;
  onQuantityChange: (itemId: string, newQuantity: number) => void;
}

export default function MenuCategory({ title, items, quantities, onQuantityChange }: MenuCategoryProps) {
  if (items.length === 0) return null;

  const categoryId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div id={categoryId} className="mb-8">
      <h2 className="text-2xl font-bold text-black mb-4 sticky top-64 bg-white py-2 z-[200]">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 0}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}
