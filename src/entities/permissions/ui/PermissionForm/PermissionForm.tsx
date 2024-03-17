import React, { FC } from "react";
import { CreatePermissionDto, ACTIONS } from "@entities/permissions";
import { SubjectDto } from "@src/shared/api";
import {
  Box,
  BoxProps,
  TextField,
  Button,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useFormik } from "formik";
import Editor, { useMonaco } from "@monaco-editor/react";

export interface PermissionFormProps
  extends PickAllExcept<BoxProps, "onSubmit"> {
  onSubmit: (values: CreatePermissionDto) => void;
  subjects: SubjectDto[];
}
export const PermissionForm: FC<PermissionFormProps> = ({
  onSubmit,
  subjects,
  ...props
}) => {
  const { t } = useTranslation();
  const [hideFields, setHideFields] = React.useState(true);
  const [hideConditions, setHideConditions] = React.useState(true);
  const monaco = useMonaco();
  const validationSchema = yup.object().shape({
    modality: yup.boolean().required(t("modalityIsRequired")),
    action: yup
      .string()
      .oneOf(Object.values(ACTIONS))
      .required(t("actionIsRequired")),
    subjectId: yup.number().required(t("subjectIdIsRequired")),
    fields: yup.array().of(
      yup.object().shape({
        name: yup.string(),
      })
    ),
    conditions: yup.array().of(
      yup.object().shape({
        key: yup.string(),
        value: yup.string(),
      })
    ),
  });
  const formikInitailValues: CreatePermissionDto = {
    subjectId: Number(subjects[0]?.id) || 0,
    modality: true,
    action: ACTIONS.Read,
    fields: [],
    conditions: [],
  };
  const formik = useFormik<CreatePermissionDto>({
    initialValues: formikInitailValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  React.useEffect(() => {
    if (monaco) {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: false,
        schemas: [
          {
            uri: "http://localhost:3000/permissions",
            fileMatch: ["*"],
            schema: {
              type: "object",
              properties: {
                "${id}": {
                  type: "string",
                  description: "The unique identifier of the user",
                },
              },
            },
          },
        ],
      });
    }
  }, [monaco]);

  console.log(formik.values, "formik.values");
  console.log(formik.getFieldProps("conditions"), "formik.getFieldProps");
  return (
    <Box component="form" display="flex" gap={1} {...props}>
      <TextField
        select
        size="small"
        label={t("modality")}
        sx={{ width: "99px" }}
        error={!!formik.errors.modality}
        helperText={formik.errors.modality}
        {...formik.getFieldProps("modality")}
        onChange={(e) => {
          formik.setFieldValue("modality", e.target.value === "true");
        }}
      >
        <MenuItem value={"true"}>{t("can")}</MenuItem>
        <MenuItem value={"false"}>{t("cannot")}</MenuItem>
      </TextField>

      <TextField
        select
        size="small"
        label={t("action")}
        sx={{ width: "105px" }}
        error={!!formik.errors.action}
        helperText={formik.errors.action}
        {...formik.getFieldProps("action")}
      >
        {Object.values(ACTIONS).map((action) => (
          <MenuItem key={action} value={action}>
            {t(action)}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        size="small"
        label={t("subject")}
        sx={{ width: 200 }}
        disabled={subjects.length === 0}
        error={!!formik.errors.subjectId}
        helperText={formik.errors.subjectId}
        {...formik.getFieldProps("subjectId")}
        value={formik.values.subjectId || ""}
      >
        {subjects.map((subject) => (
          <MenuItem key={subject.id} value={subject.id}>
            {subject.name}
          </MenuItem>
        ))}
      </TextField>

      {hideFields && (
        <Button
          variant="contained"
          onClick={() => setHideFields(false)}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          {t("addFields")}
        </Button>
      )}
      {hideFields || (
        <Autocomplete
          multiple
          id="fields"
          freeSolo
          sx={{ width: 200 }}
          options={[]}
          value={formik.values.fields}
          getOptionLabel={(option: any) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label={t("fields")}
              name="fields"
              error={!!formik.errors.fields}
              helperText={formik.errors.fields}
            />
          )}
          onChange={(event, newValue) => {
            const fields: CreatePermissionDto["fields"] = [];
            newValue.forEach((value) => {
              if (typeof value === "string") {
                fields.push({ name: value });
              } else {
                fields.push(value);
              }
            });
            formik.setFieldValue("fields", fields);
          }}
        />
      )}

      {hideConditions && (
        <Button
          variant="contained"
          onClick={() => setHideConditions(false)}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          {t("addConditions")}
        </Button>
      )}

      {hideConditions || (
        <Editor
          defaultLanguage="json"
          defaultValue="{}"
          height={100}
          width={400}
          // className="some"
          options={{
            minimap: { enabled: false },
            lineNumbers: "off",
            glyphMargin: false,
            folding: false,
          }}
        />
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{
          alignSelf: "flex-start",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          formik.handleSubmit();
        }}
      >
        {t("addPermission")}
      </Button>
    </Box>
  );
};
