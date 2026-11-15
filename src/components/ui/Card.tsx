import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "canvas" | "parchment" | "tile2";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "canvas", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[2.5rem] bg-gradient-to-b from-[#1a4a3a]/80 to-[#0f2e23]/80 backdrop-blur-xl border border-[#2d6a55]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 text-[#e2f1ea] transition-all duration-150",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
