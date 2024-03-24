import React, { FC } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { LANGUAGES } from "@entities/users";
import { UserDto, UpdateUserDto } from "@entities/users";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useOfficesControllerFindAllQuery } from "@src/entities/offices";

export interface UserUpdateFormProps {
  initialValues: UserDto;
  onSubmit: (values: UpdateUserDto) => void;
}
export const UserUpdateForm: FC<UserUpdateFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { t } = useTranslation();
  const { data: offices } = useOfficesControllerFindAllQuery({});
  const validationSchema = yup.object().shape({
    firstName: yup.string().nullable(),
    lastName: yup.string().nullable(),
    patronymic: yup.string().nullable(),
    language: yup.string().oneOf(Object.values(LANGUAGES)).nullable(),
    email: yup.string().email(t("emailIsRequired")).nullable(),
    phone: yup
      .string()
      .matches(/^\+7\d{10}$/, t("phoneInvalid"))
      .nullable(),
    office: yup.string(),
  });
  console.log(initialValues);

  const formikInitailValues: UpdateUserDto = {
    email: initialValues.email,
    firstName: initialValues.firstName || "",
    lastName: initialValues.lastName || "",
    patronymic: initialValues.patronymic || "",
    language: initialValues.language || "",
    officeId: (initialValues?.officeId as any) || "",
  };
  const formik = useFormik({
    initialValues: formikInitailValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      Object.keys(values).forEach((key: any) => {
        if (values[key] === "") {
          values[key] = null;
        }
      });
      onSubmit(values);
    },
  });
  console.log(formik.values, formik.errors, formik.touched);
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      onSubmit={formik.handleSubmit}
      noValidate
    >
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
        id="officeId"
        label={t("office")}
        select
        size="small"
        {...formik.getFieldProps("officeId")}
        error={formik.touched.officeId && !!formik.errors.officeId}
        helperText={
          formik.touched.officeId &&
          formik.errors.officeId &&
          formik.errors.officeId
        }
      >
        {offices?.map((office) => (
          <MenuItem key={office.id} value={office.id}>
            {office.name}
          </MenuItem>
        ))}
      </TextField>

      <Button fullWidth type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};
