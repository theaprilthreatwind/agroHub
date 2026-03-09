import { AccountHeader, SellerCatalog } from "../components/seller";
import { PageLayout } from "../shared";

export function SellerHome() {
  return (
    <PageLayout>
      <AccountHeader />
      <SellerCatalog />
    </PageLayout>
  );
}
