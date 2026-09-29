import CodeVerification from "@/components/CodeVerification";

export default function VerifyCodePage() {
  return <CodeVerification title="Enter the code" submitLabel="Verify Code" nextRoute="/reset" />;
}
