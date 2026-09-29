import type { InputHTMLAttributes, ReactNode } from "react";
import { WarningIcon } from "./Icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  /** Element rendered inside the field at the right edge (e.g. show/hide). */
  trailing?: ReactNode;
}

export default function Input({ id, label, error, hint, trailing, className = "", ...rest }: InputProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="control">
        <input
          id={id}
          className={`input ${error ? "input-error" : ""} ${trailing ? "input-has-trailing" : ""} ${className}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {trailing}
      </div>
      {error ? (
        <p id={`${id}-error`} className="field-error" role="alert">
          <WarningIcon /> {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="field-hint">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
