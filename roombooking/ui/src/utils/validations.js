export const required = value =>
  value || typeof value === "number" ? undefined : "Required";
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength7 = maxLength(7);
export const maxLength12 = maxLength(12);
export const maxLength15 = maxLength(15);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@yash.com$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const alphabeticalOnly = value =>
  value && !/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i.test(value)
    ? "Invalid Location"
    : undefined;
export const extLength = value =>
  value && !/^(0|[1-9][0-9]{3})$/i.test(value)
    ? "Invalid phone number, must be 4 digits"
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
export const numeric = value =>
  value && !/^(0|[1-9][0-9]{1,})$/i.test(value)
    ? "Invalid code,it must be numbers only"
    : undefined;
export const password = value =>
  value &&
  !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+_-])[A-Za-z\d@$!%*#?&+_-]{8,}$/i.test(
    value
  )
    ? "Password should have 1 upper case,1 lower case,1 number,1 special character and length should be minimum 8"
    : undefined;

export const validations = {
  requiredValidation: required,
  maxLengthValidation: maxLength,
  maxLength7Validation: maxLength7,
  maxLength12Validation: maxLength12,
  maxLength15Validation: maxLength15,
  emailValidation: email,
  alphabeticalOnlyValidation: alphabeticalOnly,
  extLengthValidation: extLength,
  phoneNumberValidation: phoneNumber,
  numericValidation: numeric,
  passwordValidation: password
};
