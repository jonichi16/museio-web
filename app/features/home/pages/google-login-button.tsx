import React from "react";
import { useNavigate } from "react-router";
import { Button } from "~/lib/components/ui/button";

export const GoogleLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Fake login success
    navigate("/register");
  };

  return <Button onClick={handleLogin}>Login with Google</Button>;
};
