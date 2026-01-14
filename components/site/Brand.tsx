import Image from "next/image";
import { landing } from "@/content/landing";
import { cn } from "@/lib/utils";

export default function Brand({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl border bg-white">
        <Image
          src={landing.brand.logo}
          alt={landing.brand.name}
          fill
          sizes="40px"
          className="object-contain p-2"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className="font-display text-sm font-semibold tracking-tight">
          {landing.brand.name}
        </div>
        <div className="text-xs text-mutedForeground">{landing.brand.scope}</div>
      </div>
    </div>
  );
}
