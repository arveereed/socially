"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </>
        ) : (
          <UserButton />
        )}
      </header>
    </div>
  );
}
