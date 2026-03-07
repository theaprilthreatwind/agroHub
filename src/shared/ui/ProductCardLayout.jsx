export function ProductCardLayout({ children, className, ...props }) {
  const classNames = [
    "flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50/50 transition-colors",
    className,
  ].join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
