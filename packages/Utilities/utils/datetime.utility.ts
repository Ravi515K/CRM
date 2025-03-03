import { DateTime } from "luxon";

interface IDateTimeUtilityFunctionProps {
  value: string;
  format?:
    | "dd-MM-yyyy hh:mm:ss"
    | "dd-MM-yyyy, hh:mm a"
    | "dd-MM-yyyy"
    | "yyyy-MM-dd"
    | "yyyy-MM-dd hh:mm:ss"
    | "yyyy-MM-dd hh:mm:ss a"
    | "yyyy-MM-dd HH:mm:ss"
    | "yyyy-MM-dd HH:mm:ss a"
    | "relative";
}

// formatDate:
// This function takes a date string in ISO format and a format string as input, and returns a formatted string representing the date and time.
const formatDate = ({
  value,
  format,
}: IDateTimeUtilityFunctionProps): string => {
  if (!value) return "";
  if (!DateTime.fromISO(value).isValid) {
    return value;
  }
  if (format === "relative") {
    return (
      DateTime.fromISO(value).toRelative({
        style: "short",
      }) || ""
    );
  }
  return DateTime.fromISO(value).toFormat(format || "dd-MM-yyyy, hh:mm a");
};

// formatJsDate:
// This function takes a JavaScript Date object and a format string as input, and returns a formatted string representing the date and time.
const formatJsDate = ({
  value,
  format,
}: IDateTimeUtilityFunctionProps): string => {
  if (format === "relative") {
    return DateTime.fromJSDate(new Date(value)).toRelative() || "";
  }
  return DateTime.fromJSDate(new Date(value)).toFormat(format || "d-MMM");
};

// getMonthNameUtility:
// This function takes a month number as input and returns the corresponding month name in the current locale.
function getMonthNameUtility(monthNumber: number): string {
  // Ensure the month number is valid (1-12)
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Invalid month number. Must be between 1 and 12.");
  }

  // Create a DateTime object and get the month name
  const monthName = DateTime.fromObject({ month: monthNumber }).toFormat("LLL");
  return monthName;
}

const formatDateToLocalDateTime = ({
  value,
}: IDateTimeUtilityFunctionProps): string => {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toISOString();
};
export const datetimeUtility = {
  formatDate,
  formatJsDate,
  getMonthNameUtility,
  formatDateToLocalDateTime,
};
