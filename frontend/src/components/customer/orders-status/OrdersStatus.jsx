import { OrderCard } from "../../../entities/order/OrderCard";
import { ArrowRight, GlassPaneLayout, OrderCardLayout } from "../../../shared/";

export function OrdersStatus() {
  return (
    <GlassPaneLayout className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Состояние заказов</h2>
        <a
          href="#"
          className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1"
        >
          Ваши заказы
          <ArrowRight width={24} height={24} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <OrderCardLayout color="green">
          <OrderCard></OrderCard>
        </OrderCardLayout>
      </div>
    </GlassPaneLayout>
  );
}
