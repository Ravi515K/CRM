import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import UiButton from "./UiButton";
import { ChevronDown } from "lucide-react";

interface IUiOptionButtonProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  id: string;
  onClick?: () => void;
  options: {
    icon: React.ReactNode;
    name: string;
    onClick?: () => void;
    className?: string;
  }[];
}
function UiOptionButton({
  text,
  className,
  icon,
  id,
  onClick,
  options,
}: IUiOptionButtonProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      <UiButton
        text={text}
        className="h-full w-full rounded-l !rounded-r-none px-4 flex-row-reverse text-inherit"
        icon={icon}
        buttonType="tertiary"
        onClick={onClick}
      />
      <Popover className="relative">
        <PopoverButton className="px-2 h-full bg-inherit border-l outline-none border-gray/60 rounded-r">
          <ChevronDown className="size-4 text-inherit" />
        </PopoverButton>
        <PopoverPanel
          transition
          className="absolute right-0 w-max bg-white border border-offWhite rounded 
            shadow-xl shadow-body/10 z-50 data-[closed]:opacity-0 data-[closed]:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <section className="p-1">
            {options?.map((optionUnit) => {
              return (
                <UiButton
                  className={`w-full h-8 text-xs gap-1  font-semibold flex-row-reverse hover:bg-offWhite !justify-end text-left px-2 hover:text-primary ${optionUnit.className}`}
                  key={optionUnit.name}
                  buttonType="tertiary"
                  text={optionUnit.name}
                  icon={optionUnit.icon}
                  onClick={optionUnit.onClick}
                />
              );
            })}
          </section>
        </PopoverPanel>
      </Popover>
    </div>
  );
}

export default UiOptionButton;
