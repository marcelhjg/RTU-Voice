"use client";
import { useState } from "react";
import Input, { type InputProps } from "./Input";
import { EyeIcon, EyeOffIcon } from "./Icons";

type PasswordInputProps = Omit<InputProps, "type" | "trailing">;

export default function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  return (
    <Input
      {...props}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          className="eye"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
    />
  );
}
