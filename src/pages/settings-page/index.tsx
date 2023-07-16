import useDocumentTitle from "@/hooks/useDocumentTitle";

import { ProfileForm } from "@/components/profile-form";
import ThemeToggle from "@/components/theme-toggle";

const SettingsPage = () => {
  useDocumentTitle("Settings");

  return (
    <div className="container mx-auto pt-4 space-y-6">
      <div className="flex gap-2 justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">Profile</h1>
          <p className="text-sm text-muted-foreground">
            View and update the settings of your profile
          </p>
        </div>

        <ThemeToggle />
      </div>

      <ProfileForm />
    </div>
  );
};

export default SettingsPage;
