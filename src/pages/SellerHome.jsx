import { AccountHeader, SellerCatalog } from "../components/seller";

export function SellerHome() {
  return (
    <div className=" bg-albaster h-screen w-screen">
      <div className="max-w-7xl mx-auto pt-32 albaster">
        <AccountHeader />
        <SellerCatalog />
      </div>
    </div>
  );
}
