import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: 20 }} // Adjusted initial position for right alignment
          animate={{ opacity: 1, y: 0, x: 0 }} // Adjusted animate position
          exit={{ opacity: 0, y: 0, x: 20 }} // Adjusted exit position
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute right-0 top-full mt-2 w-full rounded-full bg-white/80 p-4 shadow-lg dark:bg-neutral-950/80 lg:hidden", // Changed rounded-lg to rounded-full to match navibar
            "flex flex-col items-end", // Added for vertical stacking and right alignment
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};