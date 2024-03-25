import React, { FC } from "react";
import { useFormik } from "formik";
import { DetailsControllerUpdateApiArg, DetailDto } from "../../api/details";
import * as yup from "yup";
import { TextField, Button, Box, BoxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Can } from "@src/entities/casl";
import { SUBJECTS, ACTIONS } from "@src/shared/types";
import { subject as an } from "@casl/ability";

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
      <Can
        I={ACTIONS.UPDATE}
        this={an(SUBJECTS.DETAIL, { ...initialValues })}
        field="name"
        passThrough
      >
        {(allowed) => (
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
            disabled={!initialValues?.id || !allowed}
            error={formik.touched.name && !!formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name && formik.errors.name
            }
          />
        )}
      </Can>

      <Can
        I={ACTIONS.UPDATE}
        this={an(SUBJECTS.DETAIL, { ...initialValues })}
        field="partNumber"
        passThrough
      >
        {(allowed) => (
          <TextField
            fullWidth
            id="partNumber"
            name="partNumber"
            label={t("partNumber")}
            type="partNumber"
            size="small"
            disabled={!initialValues?.id || !allowed}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.partNumber}
            error={!!formik.touched.partNumber && !!formik.errors.partNumber}
            helperText={formik.touched.partNumber && formik.errors.partNumber}
          />
        )}
      </Can>

      <Can
        I={ACTIONS.UPDATE}
        this={an(SUBJECTS.DETAIL, { ...initialValues })}
        passThrough
      >
        {(allowed) => (
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting || !initialValues?.id || !allowed}
          >
            {t("save")}
          </Button>
        )}
      </Can>
    </Box>
  );
};
