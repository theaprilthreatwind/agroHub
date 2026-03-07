import {
  AccountHeader,
  OrderHistory,
  OrdersStatus,
} from "../components/customer";

export function CustomerHome() {
  return (
    <div className=" bg-albaster h-screen w-screen">
      <div className="max-w-7xl mx-auto pt-32 albaster">
        <AccountHeader />
        <OrdersStatus />
        <OrderHistory />
      </div>
    </div>
  );
}
