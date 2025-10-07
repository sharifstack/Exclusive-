import React from "react";
import * as Yup from "yup";
let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const bdPhoneNumberFormat = /^(?:\+?88)?01[3-9]\d{8}$/;

export const loginValidation = Yup.object({
  emailorphone: Yup.string()
    .matches(emailFormat, "Invalid Email Address")
    .required("Email is required."),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password cannot exceed 128 characters.")
    .matches(
      passwordFormat,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
    )
    .required("Password is required"),
});
