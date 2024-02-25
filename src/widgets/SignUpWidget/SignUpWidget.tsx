import React, { FC } from "react";
import { SignUpForm } from "@src/components/SignUpForm";
import {
  useAuthControllerSignUpMutation,
  AuthControllerSignUpApiArg,
} from "@src/store/auth";
import {
  useLazyUsersControllerFindMeQuery,
  enhancedApi,
} from "@src/store/users";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { signUpWidgetCardSx } from "./styles";

export const SignUpWidget: FC = () => {
  const { t } = useTranslation();
  const [signUp] = useAuthControllerSignUpMutation();
  const { isSuccess } =
    enhancedApi.endpoints.usersControllerFindMe.useQueryState();
  const [getMe] = useLazyUsersControllerFindMeQuery();
  const navigate = useNavigate();

  const handleSubmit = async (values: AuthControllerSignUpApiArg) => {
    const { access_token } = await signUp(values).unwrap();
    localStorage.setItem("token", access_token);
    getMe(undefined, true);
  };
  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate, getMe]);
  return (
    <Box sx={signUpWidgetCardSx}>
      <Typography variant="h6" component="h1" sx={{ textAlign: "center" }}>
        {t("signUp")}
      </Typography>

      <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
        {t("pleaseEnterYourUserInformation")}
      </Typography>
      <SignUpForm onSubmit={handleSubmit} />

      <Typography
        variant="subtitle1"
        component="a"
        href="/signin"
        sx={{
          color: "primary.main",
          textDecoration: "none",
          mt: 2,
          display: "block",
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("/signin");
        }}
      >
        {t("alreadyHaveAnAccountSignIn")}
      </Typography>
    </Box>
  );
};
