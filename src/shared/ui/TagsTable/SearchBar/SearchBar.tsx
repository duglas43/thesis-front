import React, { FC } from "react";
import { Stack } from "@mui/material";
import { LibSearch, LibSearchProps } from "@shared/ui";
import { useTranslation } from "react-i18next";
export interface TagsTableSearchBarProps {
  searchText: string;
  searchProps?: LibSearchProps;
  onSearchTextChange: (value: string) => void;
}
const TagsTableSearchBar: FC<TagsTableSearchBarProps> = ({
  searchText,
  searchProps,
  onSearchTextChange,
}) => {
  const { t } = useTranslation();
  const handleSearchTextChange = (value: string) => {
    onSearchTextChange(value);
  };

  return (
    <>
      <LibSearch
        onChange={handleSearchTextChange}
        value={searchText}
        label={t("ui.search")}
        {...searchProps}
      />
    </>
  );
};

export default React.memo(TagsTableSearchBar);
