import {
  AccountHeader,
  OrderHistory,
  OrdersStatus,
} from "../components/customer";
import { PageLayout } from "../shared";

export function CustomerHome() {
  return (
    <PageLayout>
      <AccountHeader />
      <OrdersStatus />
      <OrderHistory />
    </PageLayout>
  );
}
