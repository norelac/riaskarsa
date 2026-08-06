const colorMap = {
  primary: "bg-primary/10 text-primary",
  muted: "bg-supporting-light/50 text-supporting-dark",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
};

export default function Badge({
  color = "primary",
  children,
  className = "",
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-sans ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
