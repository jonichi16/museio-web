import React, { useState } from "react";
import { validateRegistration } from "../services/registration-validations";
import { Input } from "~/lib/components/ui/input";
import { Textarea } from "~/lib/components/ui/textarea";
import { Button } from "~/lib/components/ui/button";

interface RegistrationFormProps {
  onSubmit: (data: {
    username: string;
    profilePicture: File;
    bio: string;
  }) => void;
}

interface Errors {
  username?: string;
  profilePicture?: string;
  bio?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
}) => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateRegistration({ username, profilePicture, bio });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0 && profilePicture) {
      onSubmit({ username, profilePicture, bio });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Username *</label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Profile Picture *
        </label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files?.[0] || null)}
        />
        {errors.profilePicture && (
          <p className="text-red-500 text-sm mt-1">{errors.profilePicture}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <Textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={300}
        />
        {errors.bio && (
          <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
        )}
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};
