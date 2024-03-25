import React, { FC } from "react";
import { useFormik } from "formik";
import { MachinesControllerUpdateApiArg, MachineDto } from "../../api/machines";
import * as yup from "yup";
import { TextField, Button, Box, BoxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Can } from "@src/entities/casl";
import { SUBJECTS, ACTIONS } from "@src/shared/types";
import { subject as an } from "@casl/ability";

export interface MachineEditFormProps
  extends PickAllExcept<BoxProps, "onSubmit"> {
  initialValues?: MachineDto;
  onSubmit: (values: MachinesControllerUpdateApiArg) => void;
}

export const MachineEditForm: FC<MachineEditFormProps> = ({
  onSubmit,
  initialValues,
  ...props
}) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup.string().required(t("nameIsRequired") || "nameIsRequired"),
    partNumber: yup.string(),
    price: yup.number(),
  });

  const formik = useFormik({
    initialValues: initialValues || {
      name: "",
      partNumber: "",
      price: 0,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      if (!initialValues?.id) {
        return;
      }
      onSubmit({
        id: initialValues.id,
        updateMachineDto: values,
      });
    },
  });
  if (!initialValues) return null;
  console.log("initialValues", initialValues);
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
        this={an(SUBJECTS.MACHINE, { ...initialValues })}
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
            disabled={!allowed}
            error={formik.touched.name && !!formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name && formik.errors.name
            }
          />
        )}
      </Can>

      <Can
        I={ACTIONS.UPDATE}
        this={an(SUBJECTS.MACHINE, { ...initialValues })}
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
            disabled={!allowed}
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
        this={an(SUBJECTS.MACHINE, { ...initialValues })}
        field="price"
        passThrough
      >
        {(allowed) => (
          <TextField
            fullWidth
            id="price"
            name="price"
            label={t("price")}
            type="number"
            size="small"
            disabled={!allowed}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            error={!!formik.touched.price && !!formik.errors.price}
            helperText={formik.touched.price && formik.errors.price}
          />
        )}
      </Can>

      <Can
        I={ACTIONS.UPDATE}
        this={an(SUBJECTS.MACHINE, { ...initialValues })}
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
