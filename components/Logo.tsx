import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Rendered pixel size of the emblem. */
  size?: number;
  /** Show the "RTU Voice" wordmark next to the emblem. */
  withText?: boolean;
  href?: string;
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/provided-assets/rtu-voice-logo.png"
      alt="RTU Voice logo"
      width={size}
      height={Math.round(size * (358 / 395))}
      priority
      className="logo-img"
    />
  );
}

export default function Logo({ size = 40, withText = true, href = "/" }: LogoProps) {
  return (
    <Link href={href} className="logo" aria-label="RTU Voice home">
      <LogoMark size={size} />
      {withText && <span className="logo-text">RTU Voice</span>}
    </Link>
  );
}
