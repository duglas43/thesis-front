import React, { FC } from "react";
import { SignInForm } from "@src/components/SignInForm";
import {
  useAuthControllerSignInMutation,
  AuthControllerSignInApiArg,
} from "@src/store/auth";
import {
  useLazyUsersControllerFindMeQuery,
  enhancedApi,
} from "@src/store/users";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { signInCardSx } from "./styles";
import { centerContainerSx } from "@src/styles/styles";

export const SignInPage: FC = () => {
  const [signIn] = useAuthControllerSignInMutation();
  const { isSuccess } =
    enhancedApi.endpoints.usersControllerFindMe.useQueryState();
  const [getMe] = useLazyUsersControllerFindMeQuery();
  const navigate = useNavigate();

  const handleSubmit = async (values: AuthControllerSignInApiArg) => {
    const { access_token } = await signIn(values).unwrap();
    localStorage.setItem("token", access_token);
    getMe(undefined, true);
  };
  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/signup");
  };
  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate, getMe]);
  return (
    <Box sx={centerContainerSx}>
      <Box sx={signInCardSx}>
        <Typography
          variant="h6"
          component="h1"
          sx={{ textAlign: "center", mb: 1 }}
        >
          Sign In
        </Typography>

        <SignInForm onSubmit={handleSubmit} />

        <Typography
          variant="subtitle1"
          component="a"
          href="/signup"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            mt: 2,
            display: "block",
          }}
          onClick={handleSignUpClick}
        >
          Create an account
        </Typography>
      </Box>
    </Box>
  );
};
