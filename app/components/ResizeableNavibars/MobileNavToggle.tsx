import React from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "../../lib/utils";

interface MobileNavToggleProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
}

export const MobileNavToggle = ({
  isOpen,
  setIsOpen,
  className,
}: MobileNavToggleProps) => {
  return (
    <button className={cn("lg:hidden", className)} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <IconX className="h-6 w-6" />
      ) : (
        <IconMenu2 className="h-6 w-6" />
      )}
    </button>
  );
};