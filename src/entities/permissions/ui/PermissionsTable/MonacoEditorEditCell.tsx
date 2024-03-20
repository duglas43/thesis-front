import React, { FC } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import Editor from "@monaco-editor/react";

export interface MonacoEditorEditCellProps extends GridRenderCellParams {}
export const MonacoEditorEditCell: FC<MonacoEditorEditCellProps> = (props) => {
  return (
    <Editor
      height="100px"
      width="100%"
      defaultValue={props.value || "{}"}
      defaultLanguage="json"
      options={{
        minimap: { enabled: false },
        lineNumbers: "off",
        folding: false,
        acceptSuggestionOnEnter: "off",
        automaticLayout: true,
        autoIndent: "full",
      }}
      onChange={(value) => {
        try {
          const parsedValue = JSON.parse(value || "{}");
          const stringifiedValue = JSON.stringify(parsedValue);
          props.api.setEditCellValue({
            id: props.id,
            field: props.field,
            value: stringifiedValue,
          });
        } catch (error) {}
      }}
    />
  );
};
