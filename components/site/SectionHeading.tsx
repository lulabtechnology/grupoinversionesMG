import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-3xl", alignCls, className)}>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm sm:text-base text-mutedForeground leading-6">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
