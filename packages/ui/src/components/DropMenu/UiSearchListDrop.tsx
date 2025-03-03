import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { LoaderCircle, Search } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import UiButton from "../Button/UiButton";
import UiTextInputBase from "../Inputs/UiTextInputBase";

interface IUiSearchListDropProps<T> {
  value: T | null;
  options: T[];
  onSubmit: (selectedValue: T) => void;
  isSearching: boolean;
  accessorKey?: keyof T;
  containerClass?: string;
  optionClassName?: string;

  disabled: boolean;
  placeholder?: string;
  TitleComp?: React.ReactNode;
  query: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  SelectedComp?: React.ComponentType<{
    value: T | null;
    accessorKey: keyof T;
  }>;
  OptionComp?: React.ComponentType<{
    value: T;
    accessorKey: keyof T;
  }>;
}

const DefaultOptionComp = ({
  value,
  accessorKey,
}: {
  value: any;
  accessorKey: any;
}) => <div>{value?.[accessorKey]}</div>;

const DefaultSelectedComp = ({
  value,
  accessorKey,
}: {
  value: any;
  accessorKey: any;
}) => <div className="text-sm font-medium">{String(value?.[accessorKey])}</div>;

function UiSearchListDrop<T extends Record<string, any>>({
  value,
  options,
  accessorKey = "name",
  placeholder = "Search...",
  TitleComp,
  query,
  setSearchQuery,
  isSearching,

  onSubmit,
  SelectedComp = DefaultSelectedComp,
  OptionComp = DefaultOptionComp,
}: IUiSearchListDropProps<T>) {
  const [selectedEntity, setSelectedEntity] = useState<typeof value | null>(
    null
  );
  return (
    <Popover>
      {({ close, open }) => {
        return (
          <>
            <PopoverButton className="w-full">
              <SelectedComp value={value} accessorKey={accessorKey} />
            </PopoverButton>

            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, translateY: -12 }}
                  exit={{ opacity: 0 }}
                  anchor="bottom"
                  className="pb-14 relative w-64  bg-white rounded ring-1 ring-offWhite shadow-lg shadow-lightGray"
                >
                  <section className="p-2 border-b border-offWhite flex items-center justify-between">
                    {TitleComp}
                  </section>
                  <section className="flex flex-col gap-1 h-56 overflow-y-scroll p-2">
                    <UiTextInputBase
                      value={query}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      icon={
                        isSearching ? (
                          <LoaderCircle className="size-4 animate-spin text-darkGray" />
                        ) : (
                          <Search className="size-4 text-darkGray" />
                        )
                      }
                      placeholder={placeholder}
                      className="w-full h-8"
                    />
                    {options?.map((optionUnit) => {
                      return (
                        <button
                          data-active={
                            (selectedEntity?.id || value?.id) === optionUnit?.id
                          }
                          key={optionUnit?.id}
                          onClick={() => {
                            setSelectedEntity(optionUnit);
                          }}
                          className="group"
                        >
                          <OptionComp
                            value={optionUnit}
                            accessorKey={accessorKey}
                          />
                        </button>
                      );
                    })}
                  </section>
                  <section className="flex items-center absolute bottom-0 w-full p-2 gap-2  ">
                    <UiButton
                      text="Cancel"
                      buttonType="secondary"
                      className="w-full h-8 "
                      onClick={() => {
                        setSelectedEntity(null);
                        setSearchQuery("");
                        close();
                      }}
                    />
                    <UiButton
                      onClick={() => {
                        if (selectedEntity?.id) {
                          onSubmit(selectedEntity);
                          close();
                        }
                      }}
                      disabled={!selectedEntity?.id}
                      text="Save"
                      buttonType="primary"
                      className="w-full h-8"
                    />
                  </section>
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Popover>
  );
}

export default UiSearchListDrop;
