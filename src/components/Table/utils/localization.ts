import { UserDto } from "@src/store/users";
import { deDE, esES, frFR, itIT, nlNL, trTR } from "@mui/x-data-grid";
export const getLocalizationLocaleText = (language: UserDto["language"]) => {
  switch (language) {
    case "en":
      return undefined;
    case "de":
      return deDE.components.MuiDataGrid.defaultProps.localeText;
    case "es":
      return esES.components.MuiDataGrid.defaultProps.localeText;
    case "fr":
      return frFR.components.MuiDataGrid.defaultProps.localeText;
    case "it":
      return itIT.components.MuiDataGrid.defaultProps.localeText;
    case "nl":
      return nlNL.components.MuiDataGrid.defaultProps.localeText;
    case "tr":
      return trTR.components.MuiDataGrid.defaultProps.localeText;
    default:
      return undefined;
  }
};
