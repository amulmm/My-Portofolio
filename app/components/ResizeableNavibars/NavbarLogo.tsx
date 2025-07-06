import React from "react";
import { cn } from "../../lib/utils";

import Link from "next/link";


interface NavbarLogoProps {
  className?: string;
  isMobile?: boolean;
}

export const NavbarLogo = ({ className, isMobile }: NavbarLogoProps) => {
  return (
    <Link href={isMobile ? "/myproject" : "/"}>
      <div className={cn("text-lg font-bold", className)}>
        {isMobile ? "Projects" : "Amulmm"}
      </div>
    </Link>
  );
};