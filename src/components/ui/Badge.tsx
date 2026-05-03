import { cn } from "@/lib/utils";

type BadgeVariant = "active" | "inactive" | "pending" | "admin" | "developer" | "viewer" | "editor";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  active:
    "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  inactive:
    "bg-zinc-500/15 text-zinc-400 ring-1 ring-zinc-500/30",
  pending:
    "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30",
  admin:
    "bg-violet-500/15 text-violet-400 ring-1 ring-violet-500/30",
  developer:
    "bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30",
  viewer:
    "bg-zinc-500/15 text-zinc-400 ring-1 ring-zinc-500/30",
  editor:
    "bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {(variant === "active") && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {children}
    </span>
  );
}
