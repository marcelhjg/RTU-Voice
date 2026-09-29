import type { ReactNode } from "react";
import AuthHeader, { type ActiveNav } from "./AuthHeader";

interface AuthLayoutProps {
  active: ActiveNav;
  children: ReactNode;
}

export default function AuthLayout({ active, children }: AuthLayoutProps) {
  return (
    <div className="page">
      <AuthHeader active={active} />
      <main className="auth-main">{children}</main>
    </div>
  );
}

interface AuthCardProps {
  title: string;
  subtitle?: ReactNode;
  /** Emblem above the heading (Login screen, desktop). */
  showLogo?: boolean;
  children: ReactNode;
}

export function AuthCard({ title, subtitle, showLogo, children }: AuthCardProps) {
  return (
    <section className="auth-card" aria-labelledby="auth-title">
      <div className="auth-head">
        {showLogo && <LogoEmblem />}
        <h1 id="auth-title" className="auth-title">
          {title}
        </h1>
        {subtitle && <p className="auth-sub">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

import { LogoMark } from "./Logo";
function LogoEmblem() {
  return (
    <div className="auth-emblem">
      <LogoMark size={56} />
    </div>
  );
}
