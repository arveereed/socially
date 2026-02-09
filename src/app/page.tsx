"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <h1>home page content</h1>
    </div>
  );
}
