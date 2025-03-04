import { Switch } from "@headlessui/react";
import React from "react";
import { ISwitchProps } from "./uiSwitch.types";

const UiSwitch = ({
  label,
  checked,
  setChecked,
  className,
  containerClass,
  disabled,
}: ISwitchProps) => {
  const handleClick = () => {
    setChecked();
  };
  return (
    <div className={`flex items-center gap-2 ${containerClass}`}>
      {label && <p className="text-sm font-semibold text-body">{label}</p>}
      <Switch
        disabled={disabled}
        type="button"
        className={`flex h-6 w-12 cursor-pointer disabled:cursor-not-allowed rounded-full bg-gray p-1 ${className} data-[checked]:bg-success data-[checked]:justify-end`}
        checked={checked}
        onChange={handleClick}
        aria-checked={checked}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white "
        />
      </Switch>
    </div>
  );
};

export default React.memo(UiSwitch);
