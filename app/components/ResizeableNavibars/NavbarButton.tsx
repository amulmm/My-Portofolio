import React from "react";
import { cn } from "../../lib/utils";

interface NavbarButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const NavbarButton = ({ className, children }: NavbarButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition duration-200 hover:bg-gray-100",
        className,
      )}
    >
      {children}
    </button>
  );
};