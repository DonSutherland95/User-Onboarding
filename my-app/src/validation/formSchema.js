import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("name is required")
    .min(3, "username must be atleast 3 characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required"),
  tos: yup
  .boolean()
  .oneOf([true], 'Must Accept Terms and Conditions')
});