"use client";
import { useEffect, useState } from "react";

const KEY = "rtuvoice:pending-email";
export const FALLBACK_EMAIL = "name@rtu.edu.ph";

/** Mock-only: carries the email between screens without a backend. */
export function savePendingEmail(email: string): void {
  try {
    sessionStorage.setItem(KEY, email.trim());
  } catch {
    /* storage unavailable: fall back to sample email */
  }
}

export function usePendingEmail(): string {
  const [email, setEmail] = useState(FALLBACK_EMAIL);
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(KEY);
      if (stored) setEmail(stored);
    } catch {
      /* ignore */
    }
  }, []);
  return email;
}
