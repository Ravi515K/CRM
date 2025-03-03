import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Settings } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import  { useRef } from "react";
import useGlobalRoutesHandler from "../../hooks/useGlobalRouteHandler";
import UiButton from "../Button/UiButton";

type UiListDropProps<T> = {
  value: T | null;
  onChange: (value: T) => void;
  options: T[];
  className?: string;
  disabled?: boolean;
  accessorKey?: keyof T;
  containerClass?: string;
  optionClassName?: string;
  SelectedComp?: React.ComponentType<{
    value: T | null;
    accessorKey: keyof T;
  }>;
  OptionComp?: React.ComponentType<{
    value: T;
    accessorKey: keyof T;
  }>;
  settingUrl?: string;
  settingActionText?: string;
};

const DefaultSelectedComp = ({
  value,
  accessorKey,
}: {
  value: any;
  accessorKey: any;
}) => <div className="text-sm font-medium">{String(value?.[accessorKey])}</div>;

const DefaultOptionComp = ({
  value,
  accessorKey,
}: {
  value: any;
  accessorKey: any;
}) => (
  <ListboxOption value={value} key={value?.id}>
    {value?.[accessorKey]}
  </ListboxOption>
);

function UiListDrop<T extends Record<string, any>>({
  value,
  onChange,
  options,
  className,
  disabled = false,
  accessorKey = "name",
  containerClass,
  SelectedComp = DefaultSelectedComp,
  OptionComp = DefaultOptionComp,
  settingActionText,
  settingUrl,
}: UiListDropProps<T>) {
  const { navigate } = useGlobalRoutesHandler();
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Listbox
      as="div"
      ref={containerRef}
      className="relative"
      disabled={disabled}
      value={value}
      onChange={onChange}
    >
      {({ open }) => {
        return (
          <>
            <ListboxButton
              disabled={disabled}
              className={`w-full ${className}`}
            >
              <SelectedComp value={value} accessorKey={accessorKey} />
            </ListboxButton>
            <AnimatePresence>
              {open && (
                <ListboxOptions
                  static
                  as={motion.div}
                  initial={{ opacity: 0, translateY: -2 }}
                  animate={{ opacity: 1, translateY: 8 }}
                  exit={{ opacity: 0, translateY: -2 }}
                  anchor="bottom"
                  style={{
                    width: containerRef?.current?.offsetWidth,
                    zIndex: 50,
                  }}
                  className={`bg-white p-2 ring-1 ring-offWhite rounded flex flex-col gap-2  shadow-lg shadow-lightGray ${containerClass}`}
                >
                  <div className="max-h-52 overflow-y-auto flex flex-col gap-2 ">
                    {options?.map((optionUnit) => {
                      return (
                        <OptionComp
                          key={optionUnit.id}
                          value={optionUnit}
                          accessorKey={accessorKey}
                        />
                      );
                    })}
                  </div>
                  {settingActionText ? (
                    <div className="p-2 border-t border-offWhite">
                      <UiButton
                        onClick={() => {
                          navigate(String(settingUrl));
                        }}
                        buttonType="tertiary"
                        className="justify-start gap-2 flex-row-reverse text-body hover:text-primary/90"
                        icon={<Settings className="size-4" />}
                        text={settingActionText}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </ListboxOptions>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Listbox>
  );
}

export default UiListDrop;
