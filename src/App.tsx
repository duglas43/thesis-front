import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage, NotFoundPage, UsersPage } from "./pages";
import { useUsersControllerFindMeQuery } from "./store/users";
import { AppLayout, AuthProtect } from "./layouts";
import { useLanguageListener } from "@src/hooks";

const App: FC = () => {
  const { data } = useUsersControllerFindMeQuery();
  useLanguageListener();

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<AuthProtect />}>
          <Route path="/" element={<AppLayout />}>
            {data ? (
              <Route path="/" element={<UsersPage />} />
            ) : (
              <>
                <Route path="/*" element={<NotFoundPage />} />
              </>
            )}
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
