import { BalanceIcon, StarIcon } from "../../../shared";

export function AccountHeader() {
  const { userName, balance } = {
    userName: "Шалдыкенов Бейбарыс",
    balance: (12502.4).toFixed(2),
  };

  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ваш кабинет</h1>
        <p className="text-gray-500">Добро пожаловать, {userName}</p>
      </div>
      <div className="flex gap-4">
        <div className="glass-panel bg-linear-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl px-6 py-4 min-w-50 text-center md:text-right shadow-lg shadow-emerald-200">
          <p className="text-emerald-100 text-sm font-medium mb-1">
            Текущий баланс
          </p>
          <div className="flex items-center justify-center md:justify-end gap-2">
            <BalanceIcon width={24} height={24} />
            <span className="text-3xl font-bold">{balance}</span>
            <span className="text-lg font-medium text-emerald-100">₸</span>
          </div>
        </div>
        <div className="glass-card rounded-2xl px-6 py-4 border border-gray-200">
          <p className="text-gray-500 text-sm font-medium mb-1">Рейтинг</p>
          <div className="flex items-center gap-2">
            <StarIcon
              height={24}
              width={24}
              className="text-amber-400 fill-amber-400"
            />
            <span className="text-2xl font-bold text-gray-900">{4.2}</span>
            <span className="text-gray-400 text-sm">({123} отзывов)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
