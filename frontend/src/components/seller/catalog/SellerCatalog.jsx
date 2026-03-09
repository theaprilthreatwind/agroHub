import { ProductCard } from "../../../entities/product/ProductCard";
import { GlassPaneLayout } from "../../../shared";

const data = [
  {
    seller: "Ivanov Ivan",
    location: "С. Талапкер",
    price: 990,
    title: "сметана",
    status: "Доставлено",
    photoUrl: "http://static.photos/food/200x200/101",
  },
  {
    seller: "Мария",
    location: "Алматы",
    price: 1500,
    title: "Домашнее молоко 2л",
    status: "Ожидается",
    photoUrl: "https://picsum.photos/seed/milk/200",
  },
  {
    seller: "Фермерское хозяйство",
    location: "Акмолинская обл.",
    price: "2 300",
    title: "Творог деревенский 9%",
    status: "Отменено",
    photoUrl: "https://picsum.photos/seed/cheese/200",
  },
  {
    seller: "Фермерское хозяйство",
    location: "Акмолинская обл.",
    price: "2 300",
    title: "Творог деревенский 9%",
    status: "Отменено",
    photoUrl: "https://picsum.photos/seed/cheese/200",
  },
];

export function SellerCatalog() {
  return (
    <GlassPaneLayout>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Мой каталог</h2>
          <p className="text-gray-500 text-sm">Управление товарами и ценами</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((value, index) => (
          <ProductCard
            title={value.title}
            price={value.price}
            photoUrl={value.photoUrl}
          ></ProductCard>
        ))}
      </div>
    </GlassPaneLayout>
  );
}
