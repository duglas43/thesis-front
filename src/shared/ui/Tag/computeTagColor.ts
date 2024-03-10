export const computeTagColor = ({
  deleted,
  readOnly,
  writable,
  selected,
}: {
  deleted?: boolean;
  readOnly?: boolean;
  writable?: boolean;
  selected?: boolean;
}):
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined => {
  if (selected) {
    return "primary";
  }
  if (deleted) {
    return "error";
  }
  if (readOnly) {
    return "warning";
  }
  if (writable) {
    return "success";
  }
  return "default";
};
