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
  description,
  children,
  location,
  photoUrl,
  status,
  seller,
  title,
  price,
}) {
  return (
    <div className="bg-white rounded-2xl flex-1/4 overflow-hidden border border-gray-100 cursor-pointer fade-in">
      <div className="w-full aspect-4/3 overflow-hidden bg-gray-100">
        {photoUrl && (
          <img
            src={photoUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          {title && (
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {title}
            </h3>
          )}
          {price && (
            <span className="text-emerald-600 font-semibold whitespace-nowrap ml-2">
              {price}₸
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          {seller && (
            <div className="flex items-center gap-1">
              <UserIcon width={12} height={12} />
              <span>{seller}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1">
              <LocationIcon width={24} height={24} />
              <span>{location}</span>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );

  // return (
  //   <ProductCardLayout>
  //     {photoUrl && (
  //       <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
  //         <img src={photoUrl} className="w-full h-full object-cover" />
  //       </div>
  //     )}
  //     <div className="flex-1 min-w-0">
  //       <h4 className="font-semibold text-gray-900 truncate">{title}</h4>
  //       <div className="flex items-center gap-2 text-sm text-gray-500">
  //         {seller && (
  //           <span className="flex items-center gap-1">
  //             <UserIcon height={12} width={12} />
  //             Анна Сергеевна
  //           </span>
  //         )}

  //         {location && (
  //           <>
  //             <span>•</span>
  //             <span className="flex items-center gap-1">
  //               <LocationIcon />
  //               {location}
  //             </span>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //     <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
  //       <div className="text-right">
  //         <p className="font-bold text-gray-900">
  //           {price}
  //           <span>₸</span>
  //         </p>
  //         <p className="text-xs text-emerald-600">{status}</p>
  //       </div>
  //       {children}
  //     </div>
  //   </ProductCardLayout>
  // );
}
