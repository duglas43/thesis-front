import React, { FC } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { LANGUAGES, ROLES_IDS, getNumericEnumValues } from "@src/@types";
import { UserDto, UpdateUserDto } from "@src/store/users";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface UserUpdateFormProps {
  initialValues: UserDto;
  onSubmit: (values: UpdateUserDto) => void;
}
export const UserUpdateForm: FC<UserUpdateFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { t } = useTranslation();
  const [changePassword, setChangePassword] = React.useState(false);
  const validationSchema = yup.object().shape({
    login: yup.string().required(t("loginIsRequired")).nullable(),
    password: yup.string().test({
      name: "password",
      message: t("passwordIsRequired"),
      test: (value) => {
        if (!changePassword) return true;
        return !!value && value.length > 0;
      },
    }),
    firstName: yup.string().nullable(),
    lastName: yup.string().nullable(),
    patronymic: yup.string().nullable(),
    language: yup
      .string()
      .oneOf(getNumericEnumValues(LANGUAGES).map(String))
      .nullable(),
    email: yup.string().email(t("emailIsRequired")).nullable(),
    phone: yup
      .string()
      .matches(/^\+7\d{10}$/, t("phoneInvalid"))
      .nullable(),
    roleId: yup
      .number()
      .oneOf(getNumericEnumValues(ROLES_IDS))
      .test({
        name: "roleId",
        message: t("roleIsRequired"),
        test: (value) => {
          return !!value && getNumericEnumValues(ROLES_IDS).includes(value);
        },
      }),
    confirm: yup.string().test({
      name: "confirm",
      message: t("passwordsMustMatch"),
      test: function (value) {
        if (!changePassword) return true;
        return this.parent.password === value;
      },
    }),
  });

  const formikInitailValues: UpdateUserDto & { confirm: string } = {
    email: initialValues.email,
    firstName: initialValues.firstName || "",
    lastName: initialValues.lastName || "",
    patronymic: initialValues.patronymic || "",
    language: initialValues.language,
    confirm: "",
  };
  const formik = useFormik({
    initialValues: formikInitailValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const { confirm, ...rest } = values;
      onSubmit(rest);
    },
  });
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
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
        id="language"
        label={t("language")}
        select
        size="small"
        {...formik.getFieldProps("language")}
        error={formik.touched.language && !!formik.errors.language}
        helperText={
          formik.touched.language &&
          formik.errors.language &&
          formik.errors.language
        }
      >
        {Object.values(LANGUAGES).map((language) => (
          <MenuItem key={language} value={language}>
            {t(language)}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        id="email"
        label={t("email")}
        type="email"
        size="small"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && !!formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email && formik.errors.email
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

      {/* <TextField
        fullWidth
        id="roleId"
        label={t("role")}
        select
        size="small"
        {...formik.getFieldProps("roleId")}
        error={formik.touched.roleId && !!formik.errors.roleId}
        helperText={
          formik.touched.roleId && formik.errors.roleId && formik.errors.roleId
        }
      >
        {getNumericEnumValues(ROLES_IDS).map((role) => (
          <MenuItem key={role} value={role}>
            {t(`roles.${ROLES_IDS[role]}` as any)}
          </MenuItem>
        ))}
      </TextField> */}

      {/* <FormControlLabel
        control={
          <Switch
            checked={changePassword}
            onChange={() => {
              setChangePassword(!changePassword);
              formik.setFieldValue("password", undefined);
            }}
          />
        }
        label={t("changePassword")}
      />

      {changePassword && (
        <>
          <TextField
            fullWidth
            id="password"
            label={t("password")}
            type="password"
            size="small"
            {...formik.getFieldProps("password")}
            error={!!formik.errors.password}
            helperText={formik.errors.password && formik.errors.password}
          />
          <TextField
            fullWidth
            id="confirm"
            label={t("confirm")}
            type="password"
            size="small"
            {...formik.getFieldProps("confirm")}
            error={!!formik.errors.confirm}
            helperText={formik.errors.confirm && formik.errors.confirm}
          />
        </>
      )} */}

      <Button fullWidth type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
