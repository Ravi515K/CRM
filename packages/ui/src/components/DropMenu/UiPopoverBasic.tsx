import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import { AnimatePresence, motion } from "motion/react";

interface UiPopoverBasicProps {
  children: React.ReactNode;
  ButtonComp: React.ReactNode;
  containerClass?: string;
}

function UiPopoverBasic({
  children,
  ButtonComp,
  containerClass,
}: UiPopoverBasicProps) {
  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <PopoverButton className="outline-none">{ButtonComp}</PopoverButton>
            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 6 }}
                  exit={{ opacity: 0, y: -4 }}
                  anchor="bottom"
                  className={`relative w-72  bg-white   border border-offWhite
                     shadow-lg shadow-lightGray rounded  z-50 ${containerClass} `}
                >
                  {children}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Popover>
  );
}

export default UiPopoverBasic;
