import React, { FC } from "react";
import { useFormik } from "formik";
import { RolesControllerUpdateApiArg, RoleDto } from "../../api/roles";
import * as yup from "yup";
import { TextField, Button, Box, BoxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface RoleEditFormProps extends PickAllExcept<BoxProps, "onSubmit"> {
  initialValues?: RoleDto;
  onSubmit: (values: RolesControllerUpdateApiArg) => void;
}

export const RoleEditForm: FC<RoleEditFormProps> = ({
  onSubmit,
  initialValues,
  ...props
}) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup.string().required(t("nameIsRequired") || "nameIsRequired"),
    description: yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues || {
      name: "",
      description: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!initialValues?.id) {
        return;
      }
      onSubmit({
        id: initialValues.id,
        updateRoleDto: values,
      });
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        ...props.sx,
      }}
      {...props}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label={t("name")}
        type="text"
        size="small"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        disabled={!initialValues?.id}
        error={formik.touched.name && !!formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name && formik.errors.name
        }
      />

      <TextField
        fullWidth
        id="description"
        name="description"
        label={t("description")}
        type="description"
        size="small"
        disabled={!initialValues?.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        error={!!formik.touched.description && !!formik.errors.description}
        helperText={formik.touched.description && formik.errors.description}
      />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        disabled={formik.isSubmitting || !initialValues?.id}
      >
        {t("save")}
      </Button>
    </Box>
  );
};
