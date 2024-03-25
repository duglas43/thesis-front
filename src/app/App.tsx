import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguageListener, useAbilityListener } from "@shared/hooks";
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
import { ProfilePage } from "@src/pages/Profile/ProfilePage";
import { UserRolesPage } from "@src/pages/UserRoles/UserRolesPage";
import { RolesPermissionPage } from "@src/pages/RolesPermissions";
import { UserPermissionPage } from "@src/pages/UserPermissions";

const App: FC = () => {
  const { data } = useUsersControllerFindMeQuery();
  const { data: pagesData } = usePagesControllerFindAllQuery({});
  useAbilityListener();
  useLanguageListener();

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<AuthProtect />}>
          <Route path="/" element={<AppLayout />}>
            {pagesData && (
              <>
                {pagesData.find((page) => page.name === "Users") && (
                  <>
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/users" element={<UsersPage />} />
                  </>
                )}
                {pagesData.find((page) => page.name === "Users-Roles") && (
                  <Route path="/users-roles" element={<UserRolesPage />} />
                )}
                {pagesData.find(
                  (page) => page.name === "Users-Permissions"
                ) && (
                  <Route
                    path="/users-permissions"
                    element={<UserPermissionPage />}
                  />
                )}
                {pagesData.find((page) => page.name === "Roles") && (
                  <Route path="/roles" element={<RolesPage />} />
                )}
                {pagesData.find(
                  (page) => page.name === "Roles-Permissions"
                ) && (
                  <Route
                    path="/roles-permissions"
                    element={<RolesPermissionPage />}
                  />
                )}
                {pagesData.find((page) => page.name === "Machines") && (
                  <Route path="/machines" element={<MachinesPage />} />
                )}
                {pagesData.find((page) => page.name === "Details") && (
                  <Route path="/details" element={<DetailsPage />} />
                )}
                {pagesData.find((page) => page.name === "Profile") && (
                  <Route path="/profile" element={<ProfilePage />} />
                )}
              </>
            )}
            <Route path="/" element={<NotFoundPage />} />
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
