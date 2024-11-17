"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";

import { register } from "./register"
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";


export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    setIsLoading(true);
    // Here you would typically handle the form submiss
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div>
      <form action={register} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="username" className="text-gray-200 text-sm">
            Username
          </Label>
          <Input
            id="username"
            required
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-gray-200 text-sm">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password" className="text-gray-200 text-sm">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            required
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirm-password" className="text-gray-200 text-sm">
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            required
            className="bg-gray-800 border-gray-700 text-gray-100"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </div>
  );
}
