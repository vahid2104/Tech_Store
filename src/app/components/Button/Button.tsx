import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
