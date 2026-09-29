"use client";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import AuthLayout, { AuthCard } from "./AuthLayout";
import Button from "./Button";
import VerificationCodeInput from "./VerificationCodeInput";
import { useCountdown } from "@/lib/useCountdown";
import { usePendingEmail } from "@/lib/pendingEmail";
import { CODE_LENGTH, type VerificationCode } from "@/types/auth";

interface Props {
  title: string;
  extraLine?: string;
  submitLabel: string;
  nextRoute: string;
}

export default function CodeVerification({ title, extraLine, submitLabel, nextRoute }: Props) {
  const router = useRouter();
  const email = usePendingEmail();
  const [code, setCode] = useState<VerificationCode>("");
  const [error, setError] = useState<string>();
  const { remaining, restart } = useCountdown(60);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code.length < CODE_LENGTH) {
      setError("Enter the 6-digit code");
      return;
    }
    router.push(nextRoute); // mock verification, no backend in Phase 1
  };

  const subtitle: ReactNode = (
    <>
      We sent you a 6-digit code to <strong className="accent">{email}</strong>
      {extraLine && (
        <>
          <br />
          {extraLine}
        </>
      )}
    </>
  );

  return (
    <AuthLayout active="login">
      <AuthCard title={title} subtitle={subtitle}>
        <form onSubmit={onSubmit} noValidate>
          <VerificationCodeInput
            value={code}
            onChange={(c) => {
              setCode(c);
              setError(undefined);
            }}
          />
          {error && (
            <p className="field-error code-error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" block>
            {submitLabel}
          </Button>
        </form>
        <p className="foot">
          Didn&apos;t get it?{" "}
          {remaining > 0 ? (
            <strong className="accent">Resend code ({remaining}s)</strong>
          ) : (
            <button type="button" className="link-btn" onClick={restart}>
              Resend code
            </button>
          )}
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
