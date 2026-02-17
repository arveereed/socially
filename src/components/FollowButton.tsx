"use client";

import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { toggleFollow } from "@/actions/user.action";
import { useRouter } from "next/navigation";

export default function FollowButton({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleFollow = async () => {
    startTransition(async () => {
      try {
        await toggleFollow(userId);
        router.refresh();
      } catch (error) {
        console.log("Error following user");
      }
    });
  };

  return (
    <Button
      size={"sm"}
      variant="secondary"
      onClick={handleFollow}
      disabled={isPending}
      className="w-20"
    >
      {isPending ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}
