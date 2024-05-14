import { useEffect } from "react";

import LoginForm from "@/features/login/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login Page | QBIT Technical Test";
  }, []);

  return <LoginForm />;
};

export default LoginPage;
