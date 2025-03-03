import React from "react";

// Regex
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const indianMobileNumberRegex = /^[6-9]\d{9}$/;

// Pan Validation
// eg: panValidation(event) will allow only 10 characters with first 5 characters as alphabets and next 4 characters as numbers and last character as alphabet

const panValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  let { value } = e.target;
  // Remove any characters that aren't letters or digits
  value = value.replace(/[^a-zA-Z0-9]/g, "");
  // Ensure the first 5 characters are uppercase letters
  if (value.length <= 5) {
    value = value.toUpperCase().replace(/[^A-Z]/g, "");
  } else {
    const lettersPart = value
      .slice(0, 5)
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
    let remainingValue = value.slice(5);

    // Ensure the next 4 characters are digits
    if (remainingValue.length > 0) {
      const digitsPart = remainingValue.slice(0, 4).replace(/\D/g, "");
      remainingValue = remainingValue.slice(4);

      if (remainingValue.length > 0) {
        const lastChar = remainingValue
          .charAt(0)
          .toUpperCase()
          .replace(/[^A-Z]/g, "");
        value = lettersPart + digitsPart + lastChar;
      } else {
        value = lettersPart + digitsPart;
      }
    } else {
      value = lettersPart;
    }
  }
  value = value.slice(0, 10);
  e.target.value = value;
};

// Validation to make first character to Capitalize
// eg: firstLetterCapitalize(event, 10) will allow only first letter to be capital and maximum 10 characters
export const firstLetterCapitalize = (
  event: React.ChangeEvent<HTMLInputElement>,
  size: number = 250
) => {
  const { value, selectionStart } = event.target;
  const inputValue = value.slice(0, size);
  // Capitalize the first letter of each word
  const capitalizedValue = inputValue.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  event.target.value = capitalizedValue;

  // Adjust the cursor position
  event.target.setSelectionRange(selectionStart, selectionStart);
};

// Function that take input and size parament and add the number validation with size
// eg: onlyNumbers(event, 10) will allow only numbers and maximum 10 numbers
export const onlyNumbers = (
  event: React.ChangeEvent<HTMLInputElement>,
  size?: number
) => {
  const { value } = event.target;

  // Filter out non-numeric characters and limit to specified size
  const cleanedValue = value.replace(/[^0-9]/g, "").slice(0, size);
  event.target.value = cleanedValue;
};

// Validation that only allows characters to be entered
export const onlyCharacters = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value, selectionStart } = event.target;
  event.target.value = value.replace(/[^a-zA-Z ]/g, "");
  // adjust the cursor position
  event.target.setSelectionRange(selectionStart, selectionStart);
};
const gstValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = event.target.value.toUpperCase();
  const filteredValue = inputValue.replace(/\s{2,}/g, " ");
  let finalValue = filteredValue.replace(/^\s+/, "").replace(/[^\w\s]/g, "");
  finalValue = finalValue.slice(0, 15);
  event.target.value = finalValue;
};

// Alphabets Validation
// eg: onlyAlphabets(event, 10) will allow only alphabets and maximum 10 characters
const onlyAlphabets = (
  event: React.ChangeEvent<HTMLInputElement>,
  len: number = 25
) => {
  let { value } = event.target;
  if (value.startsWith(" ")) {
    value = value.trimStart();
  }
  value = value.charAt(0).toUpperCase() + value.slice(1);
  value = value.replace(/[^a-zA-Z ]/g, "");
  value = value.replace(/\s{2,}/g, " ");
  value = value.slice(0, len);
  event.target.value = value;
};

// Alphabets and Numbers Validation
// eg: onlyAlphabetsAndNumbers(event, 10) will allow only alphabets and numbers and maximum 10 characters
const onlyAlphabetsAndNumbers = (
  event: React.ChangeEvent<HTMLInputElement>,
  len?: number
) => {
  const inputValue = event.target.value;
  const finalValue = inputValue.replace(/[^a-zA-Z0-9 ]/g, "");
  event.target.value = finalValue.slice(0, len);
};

// Only Numbers and Special Characters
// eg: onlyNumbersAndSpecialCharacters(event, 10) will allow only numbers and special characters and maximum 10 characters
const onlyNumbersAndSpecialCharacters = (
  event: React.ChangeEvent<HTMLInputElement>,
  size?: number
) => {
  const { value } = event.target;
  // Regular expression to match anything that is not a letter (a-z, A-Z)
  event.target.value = value.replace(/[a-zA-Z]/g, "").slice(0, size ?? 3);
};

// Only Uppercase Alphabets and Numbers
// eg: onlyUppercaseAlphabetsAndNumbers(event, 10) will allow only uppercase alphabets and numbers and maximum 10 characters
const onlyUppercaseAlphabetsAndNumbers = (
  event: React.ChangeEvent<HTMLInputElement>,
  size?: number
) => {
  const { value } = event.target;
  // Regular expression to match anything that is not an uppercase letter (A-Z) or number (0-9)
  event.target.value = value.replace(/[^A-Z0-9]/g, "").slice(0, size);
};
const motorRegistrationNumberRegex = /^[A-Z]{2}\d{1,2}[A-Z]{1,3}\d{1,4}$/;

export const inputUtility = {
  onlyNumbers,
  onlyCharacters,
  firstLetterCapitalize,
  gstValidation,
  panValidation,
  onlyAlphabets,
  onlyAlphabetsAndNumbers,
  onlyNumbersAndSpecialCharacters,
  onlyUppercaseAlphabetsAndNumbers,
  emailRegex,
  indianMobileNumberRegex,
  motorRegistrationNumberRegex,
};
