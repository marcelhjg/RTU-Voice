"use client";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout, { AuthCard } from "@/components/AuthLayout";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import { hasErrors, validateLogin } from "@/lib/validation";
import type { FieldErrors, LoginFormValues } from "@/types/auth";

export default function LoginPage() {
  const [values, setValues] = useState<LoginFormValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors<LoginFormValues>>({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validateLogin(values);
    setErrors(found);
    if (hasErrors(found)) return;
    // Phase 1: no post-login pages exist yet, so a valid login has nowhere to go.
  };

  return (
    <AuthLayout active="login">
      <AuthCard title="Login" subtitle="Welcome back! Please enter your details." showLogo>
        <form onSubmit={onSubmit} noValidate>
          <Input id="email" type="email" label="University Email" placeholder="you@rtu.edu.ph" autoComplete="email" value={values.email} onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))} error={errors.email} />
          <PasswordInput id="password" label="Password" autoComplete="current-password" value={values.password} onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))} error={errors.password} />
          <div className="forgot">
            <Link href="/forgot">Forgot password?</Link>
          </div>
          <Button type="submit" block>
            Login
          </Button>
        </form>
        <p className="foot">
          <span className="only-desktop">Don&apos;t have an account yet?</span>
          <span className="only-mobile">No account yet?</span> <Link href="/register">Register</Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
