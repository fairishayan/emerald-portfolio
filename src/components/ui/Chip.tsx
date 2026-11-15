import React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  variant?: "light" | "dark";
  children: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, selected = false, variant = "light", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all select-none active:scale-95",
          selected
            ? "bg-[#5eead4] text-[#0a1f18] border border-[#5eead4] shadow-[0_0_15px_rgba(94,234,212,0.4)]"
            : "bg-[#2d6a55]/30 text-[#5eead4] border border-[#5eead4]/30 hover:bg-[#2d6a55]/50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Chip.displayName = "Chip";
