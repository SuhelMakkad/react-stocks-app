import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/utils/tw";

export type UserProfileProps = {
  name: string;
  profileImg?: string | null;
  className?: string;
};

const getInitialsFromName = (fullName: string) => {
  if (!fullName) return;

  return fullName.split(" ").map((name) => name[0]);
};

export const UserAvatar = ({ profileImg, name, className }: UserProfileProps) => {
  return (
    <Avatar className={cn("w-8 h-8", className)}>
      <AvatarImage src={profileImg!} alt={`Profile Image of ${name}`} />
      <AvatarFallback>{getInitialsFromName(name)}</AvatarFallback>
    </Avatar>
  );
};

const UserProfile = ({ profileImg, name, className }: UserProfileProps) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <UserAvatar name={name} profileImg={profileImg} />
      <span className="capitalize text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </span>
    </div>
  );
};

export default UserProfile;
