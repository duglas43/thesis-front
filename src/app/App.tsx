import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguageListener } from "@shared/hooks";
import { useUsersControllerFindMeQuery } from "@entities/users";
import { usePagesControllerFindAllQuery } from "@shared/api";
import { AppLayout } from "@widgets/AppLayout";
import { AuthProtect } from "@widgets/AuthProtectLayout";
import { NotFoundPage } from "@src/pages/NotFound";
import { SignInPage } from "@src/pages/SignIn";
import { SignUpPage } from "@src/pages/SignUp";
import { UsersPage } from "@src/pages/Users";
import { RolesPage } from "@src/pages/Roles";
import { MachinesPage } from "@src/pages/Machines";
import { DetailsPage } from "@src/pages/Details";

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
            <Route path="/" element={<UsersPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/machines" element={<MachinesPage />} />
            <Route path="/details" element={<DetailsPage />} />
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
