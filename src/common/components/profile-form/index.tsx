import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useUserStore } from "@/store/user-store";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { UserAvatar } from "@/components/user-profile";

// validation schema for the form
const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

/**
 * Zod is used to validate the form response
 * User details are not stored in any database for now
 * User details are stored in the localstorage
 */
export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const userDetails = useUserStore();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: userDetails.username,
      email: userDetails.email,
      bio: userDetails.bio,
    },
    mode: "onChange",
  });

  const onSubmit = (data: ProfileFormValues) => {
    setIsLoading(true);
    setTimeout(() => {
      userDetails.setDetails(data);
      toast({
        title: "Your profile has been updated",
      });

      setIsLoading(false);
    }, 500);
  };

  return (
    <Form {...form}>
      <UserAvatar
        className="h-24 w-24 mx-auto md:mx-0"
        profileImg={userDetails.profileImage}
        name={userDetails.username}
      />

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Rick Sanchez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="me@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Mention something cool here 🚀"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex mt-4">
          <Button className="w-full md:w-auto mx-auto" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update profile
          </Button>
        </div>
      </form>
    </Form>
  );
}
