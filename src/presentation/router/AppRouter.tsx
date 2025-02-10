import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../auth/hooks/useAuthStore";

const LoginPage = React.lazy(() => import("../auth/pages/login/LoginPage"));
const RegisterPage = React.lazy(
  () => import("../auth/pages/register/RegisterPage")
);

const SecurityBoxPage = React.lazy(
  () => import("../dashboard/security-box/pages/SecurityBoxPage")
);

const AppRouter = () => {
  const { status, checkAuthSession } = useAuthStore();

  useEffect(() => {
    checkAuthSession();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="auth/register" element={<RegisterPage />} />
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/dashboard">
              <Route index element={<SecurityBoxPage />} />
              <Route path="security-box" element={<SecurityBoxPage />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          </>
        )}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
