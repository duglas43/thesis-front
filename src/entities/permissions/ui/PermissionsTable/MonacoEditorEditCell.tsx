import React, { FC } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import Editor, { useMonaco } from "@monaco-editor/react";
import { diagnosticsOptions } from "./monacoSettings";

export interface MonacoEditorEditCellProps extends GridRenderCellParams {}
export const MonacoEditorEditCell: FC<MonacoEditorEditCellProps> = (props) => {
  const monaco = useMonaco();

  React.useEffect(() => {
    if (!monaco) {
      return;
    }
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(
      diagnosticsOptions
    );
  }, [monaco]);
  if (!monaco) {
    return null;
  }

  return (
    <Editor
      height="100px"
      width="100%"
      defaultValue={JSON.stringify(props.value, null, 2) || "{}"}
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
        props.api.setEditCellValue({
          id: props.id,
          field: props.field,
          value,
        });
      }}
    />
  );
};
