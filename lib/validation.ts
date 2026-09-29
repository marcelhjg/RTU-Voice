import type {
  FieldErrors,
  ForgotFormValues,
  LoginFormValues,
  RegisterFormValues,
  ResetFormValues,
} from "@/types/auth";

export const UNIVERSITY_DOMAIN = "rtu.edu.ph";
export const EMAIL_ERROR = "Only official university emails allowed";
export const PASSWORD_HINT = "Use at least 8 characters.";

export function isUniversityEmail(email: string): boolean {
  return email.trim().toLowerCase().endsWith(`@${UNIVERSITY_DOMAIN}`);
}

export function validateEmail(email: string): string | undefined {
  if (!email.trim()) return "Enter your university email";
  if (!isUniversityEmail(email)) return EMAIL_ERROR;
  return undefined;
}

export function validateRegister(v: RegisterFormValues): FieldErrors<RegisterFormValues> {
  const e: FieldErrors<RegisterFormValues> = {};
  if (!v.firstName.trim()) e.firstName = "Enter your first name";
  if (!v.lastName.trim()) e.lastName = "Enter your last name";
  const emailError = validateEmail(v.email);
  if (emailError) e.email = emailError;
  if (v.password.length < 8) e.password = PASSWORD_HINT;
  if (v.confirmPassword !== v.password) e.confirmPassword = "Passwords do not match";
  return e;
}

export function validateLogin(v: LoginFormValues): FieldErrors<LoginFormValues> {
  const e: FieldErrors<LoginFormValues> = {};
  const emailError = validateEmail(v.email);
  if (emailError) e.email = emailError;
  if (!v.password) e.password = "Enter your password";
  return e;
}

export function validateForgot(v: ForgotFormValues): FieldErrors<ForgotFormValues> {
  const e: FieldErrors<ForgotFormValues> = {};
  const emailError = validateEmail(v.email);
  if (emailError) e.email = emailError;
  return e;
}

export function validateReset(v: ResetFormValues): FieldErrors<ResetFormValues> {
  const e: FieldErrors<ResetFormValues> = {};
  if (v.password.length < 8) e.password = PASSWORD_HINT;
  if (v.confirmPassword !== v.password) e.confirmPassword = "Passwords do not match";
  return e;
}

export const hasErrors = (e: object): boolean => Object.keys(e).length > 0;
