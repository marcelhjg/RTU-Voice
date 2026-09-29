import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "../styles/globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Noto_Serif({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "RTU Voice",
  description: "A safe and confidential platform for reporting harassment within the university.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
