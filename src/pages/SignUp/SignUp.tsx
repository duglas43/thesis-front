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
import { centerContainerSx } from "@src/styles/styles";
import { singUpContainerSx } from "./styles";

export const SignUpPage: FC = () => {
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
    <Box sx={centerContainerSx}>
      <Box sx={singUpContainerSx}>
        <Typography variant="h6" component="h1" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>

        <Typography variant="subtitle1" component="p" sx={{ mb: 2 }}>
          Please enter your user information
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
          Already have an account? Sign In
        </Typography>
      </Box>
    </Box>
  );
};
