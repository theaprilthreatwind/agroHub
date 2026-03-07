import { ProductCard } from "../../../entities";
import { GlassPaneLayout } from "../../../shared";

const exampleData = [
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
];

export function OrderHistory() {
  return (
    <GlassPaneLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Последние покупки</h2>
        <a
          href="#"
          className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1"
        >
          Все заказы
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-lucide="arrow-right"
            aria-hidden="true"
            className="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>

      <div className="flex gap-6">
        {exampleData.map((value, index) => (
          <ProductCard
            key={index}
            seller={value.seller}
            location={value.location}
            photoUrl={value.photoUrl}
            title={value.title}
            price={value.price}
            status={value.status}
          ></ProductCard>
        ))}
      </div>
    </GlassPaneLayout>
  );
}
