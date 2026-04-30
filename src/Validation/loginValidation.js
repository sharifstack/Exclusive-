import React from "react";
import * as Yup from "yup";
let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const bdPhoneNumberFormat = /^(?:\+?88)?01[3-9]\d{8}$/;

export const loginValidation = Yup.object({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required."),

  password: Yup.string().required("Password is required"),
});
