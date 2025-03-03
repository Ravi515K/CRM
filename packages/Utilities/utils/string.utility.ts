// Remove spaces and add character
import {DateTime} from "luxon"
// eg. removeSpaceAddChar('Hello World', '-') = hello-world
const removeSpaceAddChar = (str: string, char: string): string => {
  return str?.replace(/\s+/g, char)?.toLowerCase();
};

// Remove character and add space
// eg. removeCharAddSpace('Hello-World', '-') = hello world
const removeCharAddSpace = (str: string, char: string): string => {
  return str.replace(new RegExp(char, "g"), " ");
};

// Replace all occurrences of a string with another string
// eg. replaceAll('Hello World', 'World', 'Universe') = Hello Universe
const replaceCharAll = (str: string, find: string, replace: string): string => {
  return str.replace(new RegExp(find, "g"), replace);
};

// Add ... to string if length is greater than given length
// eg. addEllipsis('Hello World', 5) = Hello...
const addEllipsisAtEnd = (str: string, len: number): string => {
  return str?.length > len ? str.substring(0, len) + "..." : str;
};

// convert hax color code to rgb
// eg. hexToRgb("#ffffff") = "255 255 255"
const hexToRgbUtility = (hex: string): string => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
};

function rgbToHexUtility(rgbString: string) {
  const [r, g, b] = rgbString.split(" ").map(Number);
  if ([r, g, b].some((value) => value < 0 || value > 255 || isNaN(value))) {
    return;
  }
  return (
    "#" +
    ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()
  );
}

const hexToRgbaUtility = (hex: string, alpha?: number): string => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Support shorthand hex codes (#abc -> #aabbcc)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Validate hex format
  if (!/^([A-Fa-f0-9]{6})$/.test(hex)) {
    throw new Error("Invalid hex color format");
  }

  // Convert hex to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Convert number to Indian scale format
// eg. formatNumberToIndianScale(10000000) = 1 Crores
function formatNumberToIndianScale(number: number, shortString = true): string {
  if (isNaN(number)) {
    return "";
  }

  if (number >= 10000000) {
    const crores = number / 10000000;
    const formattedNum = Number(crores.toFixed(2));
    return `${formattedNum.toLocaleString("en-In")} ${
      shortString ? "Cr" : "Crores"
    }`;
  } else if (number >= 100000) {
    const lakhs = number / 100000;
    const formattedNum = Number(lakhs.toFixed(1));
    return `${formattedNum.toLocaleString("en-In")} ${
      shortString ? "L" : "Lakhs"
    }`;
  } else {
    return `${number.toLocaleString("en-In")} ${
      shortString ? "K" : "Thousands"
    } `;
  }
}

function handlePeriodString({
  period,
  unit,
}: {
  period: number;
  unit: string;
}) {
  if (unit === "D") {
    return `${period} ${period > 1 ? "Days" : "Day"}`;
  } else if (unit === "Y") {
    return `${period} ${period > 1 ? "Years" : "Year"}`;
  }
  return `${period} ${period > 1 ? "Months" : "Month"}`;
}

function appendTextToHtml(html: string, text: string) {
  const lastClosingTagIndex = html.lastIndexOf("</");
  if (lastClosingTagIndex === -1) {
    return html + text; // No closing tag found, just append the text
  }
  const beforeClosingTag = html.substring(0, lastClosingTagIndex);
  const closingTagAndAfter = html.substring(lastClosingTagIndex);

  return beforeClosingTag + text + closingTagAndAfter;
}
function removeHTMLTags(str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

const handleAmount = (number: number, type: "req" | "res") => {
  if (!number) return "";

  if (type === "req") {
    return number * 100;
  }
  return number / 100;
};

const arrayToStringRemoveWhiteSpaces = (include: string[]) => {
  return include.join().replace(/ /g, "");
};

// function that take numbers and convert it to indian currency words
// eg. numberToWords(123456789) = "Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine"
function numberToWords(num: number, size?: number): string {
  if (num === 0) {
    return "";
  }
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  // const numStr = num.toString();
  let result = "";
  let crores = "";
  let lakhs = "";
  let thousands = "";
  let hundreds = "";

  if (num === 0) {
    return "Zero";
  }

  if (num < 0) {
    return "Minus " + numberToWords(Math.abs(num));
  }

  if (size) {
    const numStr = num.toString();
    if (numStr.length > size) {
      num = Number(numStr.slice(0, size));
    }
  }

  if (num >= 10000000) {
    crores = numberToWords(Math.floor(num / 10000000)) + " Crore ";
    num %= 10000000;
    result += crores;
  }

  if (num >= 100000) {
    lakhs = numberToWords(Math.floor(num / 100000)) + " Lakh ";
    num %= 100000;
    result += lakhs;
  }

  if (num >= 1000) {
    thousands = numberToWords(Math.floor(num / 1000)) + " Thousand ";
    num %= 1000;
    result += thousands;
  }

  if (num >= 100) {
    hundreds = numberToWords(Math.floor(num / 100)) + " Hundred ";
    num %= 100;
    result += hundreds;
  }

  if (num > 0) {
    if (result) {
      result += "And ";
    }

    if (num < 20) {
      result += ones[num];
    } else {
      result += tens[Math.floor(num / 10)];
      if (num % 10) {
        result += " " + ones[num % 10];
      }
    }
  }

  return result;
}

const inputFormatToINR = (value: string) => {
  //eg. value="1234.55"
  const num = value?.replace(/,/g, "") || ""; // Remove existing commas
  const x = num.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const lastThree = x1.substring(x1.length - 3);
  const otherNumbers = x1.substring(0, x1.length - 3);
  if (otherNumbers !== "") {
    x1 = otherNumbers?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  }
  return x1 + x2;
};

// Output will be something like "11/11/1998" based on today's date
function calculateBirthDateFromAge({
  age,
  format = "yyyy-MM-dd",
}: {
  age: number;
  format?: "dd/MM/yyyy" | "dd-MM-yyyy" | "yyyy-MM-dd";
}) {
  if (!age) return "";

  // Get the current date
  const currentDate = DateTime.now();

  // Subtract the given age in years to get the birth year
  const birthDate = currentDate.minus({ years: age });

  // Format the date to "dd/MM/yyyy"
  return birthDate.toFormat(format);
}

function calculateAgeFromBirthdate({ birth_date }: { birth_date: string }) {
  // Parse the birth-date string
  const birthDate = DateTime.fromFormat(birth_date, "yyyy-MM-dd");
  // Get the current date
  const currentDate = DateTime.now();
  // Calculate the difference in years
  const age = currentDate.diff(birthDate, "years").years;
  // Return the age as an integer
  return Math.floor(age);
}

function inrToNumber(value: string) {
  return parseInt(value.replace(/,/g, ""));
}

function getRandomIntegerUtility(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const stringUtility = {
  addEllipsisAtEnd,
  removeSpaceAddChar,
  removeCharAddSpace,
  hexToRgbUtility,
  handlePeriodString,
  formatNumberToIndianScale,
  arrayToStringRemoveWhiteSpaces,
  appendTextToHtml,
  replaceCharAll,
  handleAmount,
  numberToWords,
  removeHTMLTags,
  inputFormatToINR,
  calculateBirthDateFromAge,
  calculateAgeFromBirthdate,
  inrToNumber,
  getRandomIntegerUtility,
  hexToRgbaUtility,
  rgbToHexUtility,
};
