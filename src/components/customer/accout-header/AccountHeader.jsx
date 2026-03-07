import { BalanceIcon } from "./BalanceIcon";

export function AccountHeader() {

  const {userName, balance} = {userName: "Шалдыкенов Бейбарыс", balance: 12502.40.toFixed(2)}

  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Мой аккаунт</h1>
        <p className="text-gray-500">Добро пожаловать, {userName}</p>
      </div>

      <div className="glass-panel bg-linear-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl px-6 py-4 min-w-50 text-center md:text-right shadow-lg shadow-emerald-200">
        <p className="text-emerald-100 text-sm font-medium mb-1">Текущий баланс</p>
        <div className="flex items-center justify-center md:justify-end gap-2">
          <BalanceIcon width={24} height={24} />
          <span className="text-3xl font-bold">{balance}</span>
          <span className="text-lg font-medium text-emerald-100">₸</span>
        </div>
      </div>
    </div>
  );
}
