import * as yup from "yup";

const profileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("E-mail is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Password confirmation required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default profileValidationSchema;
