import { FC } from "react";
import { useFormik } from "formik";
import { AuthControllerSignUpApiArg, SignUpDto } from "@src/store/auth";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { signUpFormSx } from "./styles";
import { useTranslation } from "react-i18next";
import { normalizeFormikValues } from "@src/utils";

export interface SignUpFormProps {
  onSubmit: (values: AuthControllerSignUpApiArg) => void;
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    email: yup.string().required(t("emailIsRequired")),
    password: yup.string().required(t("passwordIsRequired")),
    firstName: yup.string().required(t("firstNameIsRequired")),
    lastName: yup.string().required(t("lastNameIsRequired")),
    patronymic: yup.string(),
    confirm: yup.string().oneOf([yup.ref("password")], t("passwordsMustMatch")),
  });

  const initialValues: SignUpDto & { confirm: string } = {
    email: "",
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
        signUpDto: normalizeFormikValues<SignUpDto>(args),
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
        id="email"
        label={t("email")}
        type="text"
        size="small"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && !!formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email && formik.errors.email
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
        helperText={
          formik.touched.confirm &&
          formik.errors.confirm &&
          formik.errors.confirm
        }
      />
      <Button fullWidth type="submit" variant="contained">
        {t("signUp")}
      </Button>
    </Box>
  );
};
