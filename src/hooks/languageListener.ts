import React from "react";
import { useTranslation } from "react-i18next";
import { useUsersControllerFindMeQuery } from "@src/store/users";

export const useLanguageListener = () => {
  const { i18n } = useTranslation();
  const { data } = useUsersControllerFindMeQuery();
  React.useEffect(() => {
    if (!data?.language) return;
    i18n.changeLanguage(data.language);
  }, [data, i18n]);
};
