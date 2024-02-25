import React, { FC } from "react";
import { useFormik } from "formik";
import { AuthControllerSignUpApiArg, SignUpDto } from "@src/store/auth";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { signUpFormSx } from "./styles";
import { useTranslation } from "react-i18next";

export interface SignUpFormProps {
  onSubmit: (values: AuthControllerSignUpApiArg) => void;
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    login: yup.string().required("Login is required"),
    password: yup.string().required("Password is required"),
    firstName: yup.string(),
    lastName: yup.string(),
    patronymic: yup.string(),
    confirm: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
    avatarId: yup.number().optional(),
  });

  const initialValues: SignUpDto & { confirm: string } = {
    login: "",
    password: "",
    confirm: "",
    firstName: "",
    lastName: "",
    patronymic: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ confirm, ...args }) => {
      onSubmit({
        signUpDto: args,
      });
    },
  });

  return (
    <Box
      component="form"
      sx={signUpFormSx}
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <TextField
        fullWidth
        id="firstName"
        label={t("firstName")}
        type="text"
        size="small"
        {...formik.getFieldProps("firstName")}
        error={formik.touched.firstName && !!formik.errors.firstName}
        helperText={
          formik.touched.firstName &&
          formik.errors.firstName &&
          formik.errors.firstName
        }
      />
      <TextField
        fullWidth
        id="lastName"
        label={t("lastName")}
        type="text"
        size="small"
        {...formik.getFieldProps("lastName")}
        error={formik.touched.lastName && !!formik.errors.lastName}
        helperText={
          formik.touched.lastName &&
          formik.errors.lastName &&
          formik.errors.lastName
        }
      />
      <TextField
        fullWidth
        id="patronymic"
        label={t("patronymic")}
        type="text"
        size="small"
        {...formik.getFieldProps("patronymic")}
        error={formik.touched.patronymic && !!formik.errors.patronymic}
        helperText={
          formik.touched.patronymic &&
          formik.errors.patronymic &&
          formik.errors.patronymic
        }
      />

      <TextField
        fullWidth
        id="login"
        label={t("login")}
        type="text"
        size="small"
        {...formik.getFieldProps("login")}
        error={formik.touched.login && !!formik.errors.login}
        helperText={
          formik.touched.login && formik.errors.login && formik.errors.login
        }
      />
      <TextField
        fullWidth
        id="password"
        label={t("password")}
        type="password"
        size="small"
        {...formik.getFieldProps("password")}
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={
          formik.touched.password &&
          formik.errors.password &&
          formik.errors.password
        }
      />
      <TextField
        fullWidth
        id="confirm"
        label={t("confirm")}
        type="password"
        size="small"
        {...formik.getFieldProps("confirm")}
        error={formik.touched.confirm && !!formik.errors.confirm}
      />
      <Button fullWidth type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
