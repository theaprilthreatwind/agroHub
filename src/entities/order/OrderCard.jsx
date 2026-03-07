import { DeliveryIcon } from "./DeliveryIcon";
import { TickIcon } from "./TickIcon";

export function OrderCard({ id = 0, info, status, ...props }) {
  return (
    <>
      <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
        <DeliveryIcon height={24} width={24} />
      </div>
      <div className="flex items-center gap-2  text-gray-900 mb-3">
        <TickIcon height={24} width={24} />
        <span className="font-medium">
          Заказ #{id} - {}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Ожидаем погрузку в 14:00, д. Красное
      </p>
    </>
  );
}
