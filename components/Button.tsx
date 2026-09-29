import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "nav";

interface CommonProps {
  variant?: ButtonVariant;
  /** Full-width (form) button. */
  block?: boolean;
  /** Pill shape used in the header. */
  pill?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };
type LinkButtonProps = CommonProps & { href: string; "aria-current"?: "page" };

export default function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", block, pill, className = "", children, ...rest } = props;
  const cls = ["btn", `btn-${variant}`, block ? "btn-block" : "", pill ? "btn-pill" : "", className]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as { href: string };
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }
  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
