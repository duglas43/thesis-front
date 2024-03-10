import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguageListener } from "@shared/hooks";
import { useUsersControllerFindMeQuery } from "@entities/users";
import { usePagesControllerFindAllQuery } from "@shared/api";
import { AppLayout } from "@widgets/AppLayout";
import { AuthProtect } from "@widgets/AuthProtectLayout";
import { NotFoundPage } from "@pages/NotFoundPage";
import { SignInPage } from "@pages/SignInPage";
import { SignUpPage } from "@pages/SignUpPage";
import { UsersPage } from "@pages/UsersPage";

const App: FC = () => {
  const { data } = useUsersControllerFindMeQuery();
  const { data: pagesData } = usePagesControllerFindAllQuery({});
  useLanguageListener();

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<AuthProtect />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
