import * as Yup from "yup";
export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name is too short")
    .required("Required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),

  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),

  term: Yup.boolean()
    .oneOf([true], "You must accept the terms"),
});
