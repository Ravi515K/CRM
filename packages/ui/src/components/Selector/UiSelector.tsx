import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {stringUtility} from "@repo/utilities/string.utility.ts"
import {
  Asterisk,
  ChevronsUpDownIcon,
  LoaderCircle,
  Settings,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import UiButton from "../Button/UiButton";
import useGlobalRoutesHandler from "../../hooks/useGlobalRouteHandler";
import { TSelectorProps } from "./uiSelectors.types";

function UiSelector<T extends Record<string, any>>({
  placeholder = "Select any option",
  label,
  value,
  onChange,
  options,
  error,
  disabled = false,
  className = "",
  accessorKey = "name",
  isRequired = true,
  textEllipsis = 100,
  isLoading = false,
  containerClass,
  settingUrl,
  emptyText = "No data available. Please add",
  settingActionText,
}: TSelectorProps<T>) {
  const { navigate } = useGlobalRoutesHandler();
  // Function to handle change in select option
  function handleChange(option: T) {
    onChange(option);
  }
  return (
    <Listbox
      onChange={handleChange}
      value={value}
      as="div"
      className="flex flex-col"
      disabled={isLoading || disabled}
      defaultValue={options?.[0]}
    >
      {({ open }) => {
        return (
          <>
            {label && (
              <label className="text-xs flex items-center gap-1 text-left text-body font-semibold pl-1">
                {label}
                {isRequired && (
                  <Asterisk className="size-2 text-error -translate-y-1" />
                )}
              </label>
            )}

            <ListboxButton
              className={`w-full h-10 border rounded outline-none text-sm 
              flex items-center justify-between text-body font-semibold px-2 ${className}
            ${
              error ? "border-error/50" : "border-offWhite "
            } disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-extraLightGray/30  focus:ring-primary focus:border-primary/50`}
            >
              <span
                className={`text-sm  ${
                  value?.[accessorKey]
                    ? "text-subHeading font-semibold"
                    : "text-darkGray/80 font-medium"
                }`}
              >
                {stringUtility.addEllipsisAtEnd(
                  value?.[accessorKey],
                  textEllipsis
                ) || placeholder}
              </span>
              {isLoading ? (
                <LoaderCircle className="size-5 text-gray animate-spin" />
              ) : (
                <ChevronsUpDownIcon
                  data-error={error}
                  className="size-5 text-gray data-[error=true]:text-error "
                  aria-hidden="true"
                />
              )}
            </ListboxButton>
            {error?.message && (
              <p className="text-xs text-error font-medium pl-2 mt-0.5">
                {error?.message}
              </p>
            )}

            <AnimatePresence>
              {open && (
                <ListboxOptions
                  static
                  anchor="bottom"
                  as={motion.div}
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  className={`[--anchor-gap:4px] w-[var(--button-width)] shadow-md border border-offWhite bg-white 
              rounded  outline-none z-50 ${containerClass}`}
                >
                  <div className="max-h-52 overflow-y-auto w-full">
                    {options?.length === 0 ? (
                      <div className="text-sm font-semibold px-4 py-2 ">
                        {emptyText}
                      </div>
                    ) : (
                      options?.map((option) => (
                        <ListboxOption
                          key={option?.id}
                          value={option}
                          className="px-4 py-2 text-sm font-semibold cursor-auto select-none  outline-none data-[selected]:text-white data-[selected]:bg-primary  data-[focus]:bg-primary/20"
                        >
                          {option?.[accessorKey]}
                        </ListboxOption>
                      ))
                    )}
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

export default UiSelector;
