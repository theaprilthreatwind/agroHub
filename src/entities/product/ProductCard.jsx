import { ProductCardLayout } from "../../shared/";
import { LocationIcon } from "./LocationIcon";
import { UserIcon } from "./UserIcon";

/**
 * @typedef {Object} ProductCardProps
 * @property {string} title - Заголовок объявления или название товара.
 * @property {string|number} price - Цена товара. Отображается с символом тенге (₸).
 * @property {string} status - Текущий статус товара (например, "В наличии", "Продано").
 * @property {string} [photoUrl] - URL изображения товара. Если не передан, блок с фото не рендерится.
 * @property {string} [location] - Город или адрес. Если не передан, блок локации скрыт.
 * @property {React.ReactNode} [seller] - Кастомный контент для блока продавца. 
 * При передаче любого truthy значения (даже пустой строки) отобразится "Анна Сергеевна" с иконкой.
 * @property {React.ReactNode} [children] - Дополнительные элементы (кнопки, действия), рендеримые в правой части карточки.
 */

/**
 * Компонент карточки товара.
 * * Представляет собой строку в списке товаров с основной информацией, 
 * адаптированную под мобильные и десктопные устройства.
 * * @component
 * @param {ProductCardProps} props
 * @returns {JSX.Element}
 * * @example
 * // Минимальное использование
 * <ProductCard 
 * title="iPhone 15 Pro" 
 * price="550 000" 
 * status="Новый" 
 * />
 * * @example
 * // С кнопками действий
 * <ProductCard title="Велосипед" price="120 000" status="Б/У">
 * <button>Купить</button>
 * </ProductCard>
 */

export function ProductCard({
  seller,
  title,
  location,
  photoUrl,
  price,
  status,
  children,
}) {
  return (
    <ProductCardLayout>
      {photoUrl && (
        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
          <img src={photoUrl} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">{title}</h4>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          {seller && (
            <span className="flex items-center gap-1">
              <UserIcon height={12} width={12} />
              Анна Сергеевна
            </span>
          )}

          {location && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LocationIcon />
                {location}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
        <div className="text-right">
          <p className="font-bold text-gray-900">
            {price}
            <span>₸</span>
          </p>
          <p className="text-xs text-emerald-600">{status}</p>
        </div>
        {children}
      </div>
    </ProductCardLayout>
  );
}
