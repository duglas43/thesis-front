import React, { FC } from "react";
import {
  useUsersControllerFindMeQuery,
  useUsersControllerUpdateMutation,
} from "@entities/users";
import { UserUpdateForm } from "@entities/users";
import { Box, BoxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface CurrentUserUpdateWidgetProps extends Partial<BoxProps> {}

export const CurrentUserUpdateWidget: FC<CurrentUserUpdateWidgetProps> = (
  props
) => {
  const { t } = useTranslation();
  const { data: me } = useUsersControllerFindMeQuery();
  const [updatedUser] = useUsersControllerUpdateMutation();

  if (!me) {
    return null;
  }
  return (
    <Box {...props}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: "center",
        }}
      >
        {t("profile")}
      </Typography>
      <UserUpdateForm
        initialValues={me}
        onSubmit={(user) => {
          updatedUser({ id: me.id, updateUserDto: user });
        }}
      />
    </Box>
  );
};
