import { ProfileForm } from "@/components/profile-form";
import ThemeToggle from "@/components/theme-toggle";

const SettingsPage = () => {
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

      <img
        className="aspect-square h-20 w-20 rounded-full mx-auto md:mx-0"
        alt="Profile Image of Rick Sanchez"
        src="https://github.com/shadcn.png"
      />

      <ProfileForm />
    </div>
  );
};

export default SettingsPage;
