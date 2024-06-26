import React, { FC } from "react";
import { usersApi } from "@entities/users";
import { Outlet, Navigate } from "react-router-dom";

export const AuthProtect: FC = () => {
  const { isSuccess, isLoading, isError } =
    usersApi.endpoints.usersControllerFindMe.useQueryState();
  if (isLoading) {
    return <></>;
  }
  if (isSuccess) {
    return <Outlet />;
  }
  if (isError) {
    return <Navigate to="/signin" />;
  }
  return <></>;
};
