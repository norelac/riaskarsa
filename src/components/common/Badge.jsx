const colorMap = {
  primary: "bg-primary/10 text-primary",
  muted: "bg-surface text-text-muted",
  success: "bg-primary/10 text-primary",
  warning: "bg-badge-error text-white",
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
