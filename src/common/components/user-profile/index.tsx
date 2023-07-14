import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/utils/tw";

export type UserProfileProps = {
  profileImg: string;
  name: string;
  className?: string;
};

const getInitialsFromName = (fullName: string) => {
  if (!fullName) return;

  return fullName.split(" ").map((name) => name[0]);
};

const UserProfile = ({ profileImg, name, className }: UserProfileProps) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <Avatar className="w-8 h-8">
        <AvatarImage src={profileImg} alt={`Profile Image of ${name}`} />
        <AvatarFallback>{getInitialsFromName(name)}</AvatarFallback>
      </Avatar>
      <span className="capitalize text-lg font-medium">{name}</span>
    </div>
  );
};

export default UserProfile;
