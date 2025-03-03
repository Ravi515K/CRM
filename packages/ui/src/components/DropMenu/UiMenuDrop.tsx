import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import UiButton from "../Button/UiButton";

interface UiMenuDropProps {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  id: string;
  disabled?: boolean;
  containerClass?: string;
  options: {
    icon: React.ReactNode;
    name: string;
    onClick?: () => void;
    className: string;
  }[];
}
function UiMenuDrop({
  id,
  text,
  disabled,
  className,
  icon,
  options,
  containerClass,
}: UiMenuDropProps) {
  return (
    <Popover as="div" id={id} className="relative">
      {({ open, close }) => {
        return (
          <>
            <PopoverButton
              disabled={disabled}
              className={`text-sm text-body font-medium flex items-center justify-center  gap-1  
             focus:outline-1 focus:outline-extraLightGray cursor-pointer ${className} rounded
            active:brightness-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed outline-none`}
            >
              <div>
                {text ? <>{text}</> : <></>}
                {icon ? <span>{icon}</span> : <></>}
              </div>
            </PopoverButton>

            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, translateY: -2 }}
                  animate={{ opacity: 1, translateY: 3 }}
                  exit={{ opacity: 0, translateY: -2 }}
                  anchor="bottom end"
                  className={`w-max bg-white border border-offWhite rounded mt-1 shadow-xl shadow-lightGray ${containerClass}`}
                >
                  {options?.map((optionUnit) => {
                    return (
                      <UiButton
                        className={`w-full h-10 px-3 text-xs gap-3 rounded-none font-semibold flex-row-reverse !justify-end text-left  border-b last:border-b-0 hover:bg-offWhite border-offWhite ${optionUnit?.className}`}
                        key={optionUnit.name}
                        buttonType="tertiary"
                        text={optionUnit.name}
                        icon={optionUnit.icon}
                        onClick={() => {
                          optionUnit.onClick?.();
                          close();
                        }}
                      />
                    );
                  })}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Popover>
  );
}

export default UiMenuDrop;
