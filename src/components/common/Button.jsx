const variants = {
  primary:
    "bg-primary text-primary-ink hover:bg-primary-hover focus:ring-[3px] focus:ring-primary-ring disabled:opacity-40 disabled:cursor-not-allowed",
  secondary:
    "bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-[3px] focus:ring-primary-ring disabled:opacity-40 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-text-on-dark/70 hover:bg-primary/10 hover:text-primary",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs leading-none",
  md: "px-6 py-3 text-xs leading-none",
  lg: "px-8 py-4 text-xs leading-none",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  as,
  children,
  className = "",
  ...props
}) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-medium font-sans transition-colors duration-150 focus:outline-none ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === "span") {
    return (
      <span className={baseClass} {...props}>
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
