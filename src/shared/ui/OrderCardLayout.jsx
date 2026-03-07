/**
 * Компонент-обертка для карточек заказов с настраиваемой цветовой схемой.
 * Использует Tailwind CSS для стилизации градиентного фона и границ.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {React.ReactNode} props.children - Содержимое карточки (текст, изображения, другие компоненты).
 * @param {'green' | 'blue' | 'red'} [props.color] - Цветовая схема карточки. Влияет на цвет границ и начальный цвет градиента.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.rest] - Остальные стандартные атрибуты HTML-дива (id, onClick, style и т.д.).
 * * @returns {JSX.Element} Отрисованный контейнер карточки.
 */

export function OrderCardLayout({ children, color, props }) {
  const classNames = [
    "relative bg-linear-to-br to-white rounded-2xl p-6 border",
    color === "green" && "border-emerald-100 from-emerald-50",
    color === "blue" && "border-blue-100 from-blue-50",
    color === "red" && "border-red-100 from-red-50",
    children,
  ].join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
