interface ValidationInput {
  username: string;
  profilePicture: File | null;
  bio: string;
}

interface ValidationErrors {
  username?: string;
  profilePicture?: string;
  bio?: string;
}

export const validateRegistration = ({
  username,
  profilePicture,
  bio,
}: ValidationInput): ValidationErrors => {
  const errors: ValidationErrors = {};
  if (!username.trim()) errors.username = "Username is required";
  if (!profilePicture) errors.profilePicture = "Profile picture is required";
  if (bio && bio.length > 300)
    errors.bio = "Bio must be 300 characters or less";
  return errors;
};

// app/features/home/pages/LoginPage.tsx
import React from "react";
import { GoogleLoginButton } from "../pages/google-login-button";

export const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <GoogleLoginButton />
    </div>
  );
};
