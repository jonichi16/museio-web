import * as React from "react";
import { RegistrationForm } from "../../app/features/home/pages/registration-form";

export default function RegisterRoute() {
  const handleSubmit = (data: unknown) => {
    //placeholder
    console.warn("Form submitted:", data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}
