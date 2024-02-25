import React, { FC } from "react";
import { useFormik } from "formik";
import { AuthControllerSignInApiArg, SignInDto } from "@src/store/auth";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { signInFormSx } from "./styles";

export interface SignInFormProps {
  onSubmit: (values: AuthControllerSignInApiArg) => void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    login: yup.string().required("Login is required"),
    password: yup.string().required("Password is required"),
  });
  const initialValues: SignInDto = {
    login: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit({
        signInDto: values,
      });
    },
  });
  return (
    <Box component="form" sx={signInFormSx} onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="login"
        name="login"
        label="Login"
        type="text"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
        error={formik.touched.login && !!formik.errors.login}
        helperText={
          formik.touched.login && formik.errors.login && formik.errors.login
        }
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={
          formik.touched.password &&
          formik.errors.password &&
          formik.errors.password
        }
      />
      <Button fullWidth type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
