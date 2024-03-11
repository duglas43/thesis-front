import React, { FC } from "react";
import { useFormik } from "formik";
import { DetailsControllerUpdateApiArg, DetailDto } from "../../api/details";
import * as yup from "yup";
import { TextField, Button, Box, BoxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface DetailEditFormProps
  extends PickAllExcept<BoxProps, "onSubmit"> {
  initialValues?: DetailDto;
  onSubmit: (values: DetailsControllerUpdateApiArg) => void;
}

export const DetailEditForm: FC<DetailEditFormProps> = ({
  onSubmit,
  initialValues,
  ...props
}) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup.string().required(t("nameIsRequired") || "nameIsRequired"),
    partNumber: yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues || {
      name: "",
      partNumber: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!initialValues?.id) {
        return;
      }
      onSubmit({
        id: initialValues.id,
        updateDetailDto: values,
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
        id="partNumber"
        name="partNumber"
        label={t("partNumber")}
        type="partNumber"
        size="small"
        disabled={!initialValues?.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.partNumber}
        error={!!formik.touched.partNumber && !!formik.errors.partNumber}
        helperText={formik.touched.partNumber && formik.errors.partNumber}
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
