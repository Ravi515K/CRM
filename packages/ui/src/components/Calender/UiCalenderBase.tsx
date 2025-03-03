import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames, Matcher } from "react-day-picker";
import "react-day-picker/style.css";

interface UiCalenderBaseProps {
  selectedDate: Date;
  onChange: (date: Date | undefined) => void;
  selectedMonth: Date;
  onMonthChange: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
}

export default function UiCalenderBase({
  onChange,
  selectedDate,
  selectedMonth,
  onMonthChange,
  minDate,
  maxDate,
}: UiCalenderBaseProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={onChange}
      month={selectedMonth}
      onMonthChange={onMonthChange}
      disabled={
        {
          after: maxDate && maxDate,
          before: minDate && minDate,
        } as Matcher
      }
      captionLayout="label"
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return (
            <Icon className="size-5 ring-1 rounded ring-offWhite bg-offWhite" />
          );
        },

        DayButton: ({ day, onClick, modifiers, disabled }) => {
          return (
            <button
              disabled={disabled}
              data-selected={modifiers?.selected}
              data-today={modifiers?.today}
              className="text-body font-semibold text-sm border border-offWhite rounded h-7 w-7
                data-[selected=true]:border-primary  data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary
                data-[today=true]:text-white  data-[today=true]:bg-primary 
                disabled:cursor-not-allowed"
              onClick={onClick}
            >
              {day.date?.getDate()}
            </button>
          );
        },
      }}
      classNames={{
        root: `${defaultClassNames.root} relative `,
        caption_label: `${defaultClassNames.caption_label} text-body ml-2 text-sm`,
      }}
    />
  );
}
