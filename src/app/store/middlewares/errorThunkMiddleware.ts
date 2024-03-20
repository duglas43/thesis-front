import { isRejectedWithValue } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import i18n from "@shared/i18n";

export const errorThunkMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (!isRejectedWithValue(action)) {
      return next(action);
    }
    if (action.payload?.status === 413) {
      enqueueSnackbar(i18n.t("fileTooLarge"), {
        variant: "error",
      });
    }
    console.log(action);
    if (action.payload?.messageT) {
      enqueueSnackbar(i18n.t(action.payload.messageT), {
        variant: "error",
      });
    }
    if (action.payload?.message) {
      enqueueSnackbar(action.payload.message, {
        variant: "warning",
      });
    }
    return next(action);
  };
