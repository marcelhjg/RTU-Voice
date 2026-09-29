import CodeVerification from "@/components/CodeVerification";

export default function VerifyPage() {
  return (
    <CodeVerification
      title="Verify your account"
      extraLine="Enter it to activate your account"
      submitLabel="Verify Account"
      nextRoute="/login"
    />
  );
}
