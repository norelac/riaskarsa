const variants = {
  primary:
    "bg-primary text-text-on-dark hover:bg-primary-hover focus:ring-[3px] focus:ring-primary-ring disabled:opacity-40 disabled:cursor-not-allowed",
  secondary:
    "bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-[3px] focus:ring-primary-ring disabled:opacity-40 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-text-muted hover:bg-primary/[0.04] hover:text-text-on-dark",
};

const sizes = {
  sm: "px-4 py-2 text-[13px] leading-none",
  md: "px-6 py-3 text-sm leading-none",
  lg: "px-8 py-3.5 text-sm leading-none",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-medium font-sans transition-colors duration-150 focus:outline-none ${variants[variant]} ${sizes[size]} ${className}`;

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
