export function GlassPaneLayout({ children, className, ...props }) {
  const classNames = [
    "glass-panel rounded-3xl p-8 border border-gray-100",
    className,
  ].join(" ");

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
