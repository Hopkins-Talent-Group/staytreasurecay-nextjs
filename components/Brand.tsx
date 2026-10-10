import Link from "next/link";
import { site } from "@/data/site";

type BrandProps = {
  className?: string;
};

export default function Brand({ className }: BrandProps) {
  return (
    <Link href="/" className={className ? `brand ${className}` : "brand"}>
      <span className="brand-top">{site.brand.top}</span>
      <span className="brand-main">{site.brand.main}</span>
      <span className="brand-location">{site.brand.location}</span>
    </Link>
  );
}
