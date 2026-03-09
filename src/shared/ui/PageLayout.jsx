export function PageLayout({ children, className, ...props }) {
  const classNames = ["bg-albaster h-screen w-screen", className].join(" ");

  return (
    <main className={classNames} {...props}>
      <div className="max-w-7xl mx-auto pt-32 albaster">{children}</div>
    </main>
  );
}
