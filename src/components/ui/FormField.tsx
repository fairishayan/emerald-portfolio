import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "light" | "dark";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, variant = "light", id, ...props }, ref) => {
    return (
      <div className="w-full text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-[#85b8a5]">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full h-11 rounded-xl px-4 text-sm bg-[#0d2a20]/80 border border-[#2d6a55]/60 text-[#e2f1ea] placeholder:text-[#85b8a5]/40 transition-colors focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4]",
            error && "border-[#5eead4]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-[#5eead4] pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: "light" | "dark";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, variant = "light", id, ...props }, ref) => {
    return (
      <div className="w-full text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-[#85b8a5]">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-xl p-4 text-sm bg-[#0d2a20]/80 border border-[#2d6a55]/60 text-[#e2f1ea] placeholder:text-[#85b8a5]/40 transition-colors focus:outline-none focus:border-[#5eead4] focus:ring-1 focus:ring-[#5eead4] min-h-[120px] resize-y",
            error && "border-[#5eead4]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-[#5eead4] pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
