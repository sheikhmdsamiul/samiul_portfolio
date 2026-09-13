import type { ReactNode } from "react";

type Variant = "dark" | "orange" | "paper";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  dark: "border-ink bg-ink text-paper shadow-blk hover:bg-ink-soft hover:shadow-blk-lg",
  orange:
    "border-accent-dark bg-accent text-paper shadow-orange hover:bg-accent-dark hover:shadow-orange-lg",
  paper: "border-ink bg-paper text-ink shadow-blk hover:bg-paper-deep hover:shadow-blk-lg",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3.5 py-2 text-[10px]",
  md: "px-5 py-3 text-xs",
  lg: "px-7 py-4 text-sm",
};

interface BrutalButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  type?: "button" | "submit";
  download?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  disabled?: boolean;
}

export default function BrutalButton({
  href,
  onClick,
  className,
  children,
  variant = "dark",
  size = "md",
  type = "button",
  ...rest
}: BrutalButtonProps) {
  const classes = `brutal-btn rounded-lg font-sans ${variantClass[variant]} ${sizeClass[size]} ${
    className ?? ""
  }`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}