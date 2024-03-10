import React, { FC } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LibSelect } from "@shared/ui";
import { rootSx } from "./style";

export interface TagsTableFooterProps {
  totalCount: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  pageCount: number;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}
const TagsTableFooter: FC<TagsTableFooterProps> = ({
  totalCount,
  page,
  rowsPerPage,
  onPageChange,
  pageCount,
  onRowsPerPageChange,
}) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 1 }}>
      <Typography>
        {t("ui.totalCount")}: {totalCount}
      </Typography>
      <Box sx={rootSx}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(event, page) => {
            onPageChange(page);
          }}
        />
        <Box>
          <LibSelect
            label={"Show per page"}
            value={rowsPerPage}
            options={{
              50: 50,
              100: 100,
              200: 200,
            }}
            onChange={(event) => {
              onRowsPerPageChange(Number(event.target.value));
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(TagsTableFooter);
