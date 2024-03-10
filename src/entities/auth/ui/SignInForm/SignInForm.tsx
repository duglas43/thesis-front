import React, { FC } from "react";
import { useFormik } from "formik";
import { AuthControllerSignInApiArg, SignInDto } from "../../api/auth";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { signInFormSx } from "./styles";
import { useTranslation } from "react-i18next";

export interface SignInFormProps {
  onSubmit: (values: AuthControllerSignInApiArg) => void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    email: yup.string().required(t("emailIsRequired") || "emailIsRequired"),
    password: yup.string().required(t("passwordIsRequired")),
  });
  const initialValues: SignInDto = {
    email: "",
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
        id="email"
        name="email"
        label={t("email")}
        type="text"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && !!formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email && formik.errors.email
        }
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label={t("password")}
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
        {t("signIn")}
      </Button>
    </Box>
  );
};
