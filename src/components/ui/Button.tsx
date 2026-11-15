import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "utility" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all select-none disabled:opacity-50 disabled:pointer-events-none active:scale-95 duration-150 focus:outline-none";

    const variantStyles = {
      primary:
        "rounded-full bg-[#5eead4] text-[#0a1f18] hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(94,234,212,0.6)] focus:ring-2 focus:ring-[#5eead4] focus:ring-offset-2",
      secondary:
        "rounded-full border border-[#5eead4]/40 bg-[#133c2e]/60 text-[#e2f1ea] hover:bg-[#133c2e] hover:border-[#5eead4] focus:ring-2 focus:ring-[#5eead4]",
      utility:
        "rounded-full bg-[#0d2a20] text-[#e2f1ea] border border-[#2d6a55]/60 hover:border-[#5eead4] focus:ring-2 focus:ring-[#5eead4]",
      ghost:
        "rounded-full bg-transparent text-[#5eead4] hover:bg-[#5eead4]/10 focus:ring-2 focus:ring-[#5eead4]",
    };

    const sizeStyles = {
      sm: "px-4 py-1.5 text-xs",
      default: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
