"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@ui/card";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Badge } from "@ui/badge";
import { Alert, AlertDescription } from "@ui/alert";
import { Check, X, Loader2 } from "lucide-react";
import { User } from "better-auth/types";
import { useState } from "react";
import Logo from "@ui/logo";

type OnboardingCardProps = {
  user: User;
};

export default function OnboardingCard({ user }: OnboardingCardProps) {

  const [usernameStatus, setUsernameStatus] = useState<
    "idle" | "checking" | "available" | "taken"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const username = e.target.value;
    setFormData((prev) => ({ ...prev, username }));
    // Add debounced username check logic here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
  };

  const authMethod = user.name ? "social" : "magic-link";

  const isFormValid =
    formData.username.length >= 3 &&
    usernameStatus === "available" &&
    (authMethod === "social" || formData.name.trim() !== "");

  

  return (
    <Card className="w-full max-w-md z-1 shadow shadow-blue-300/60 mx-4">
      <CardHeader className="text-center space-y-4">

        <div>
            <Logo className="text-4xl mb-2" />
          <CardTitle className="text-2xl font-medium">
            Complete your profile
          </CardTitle>
          <CardDescription>
            {authMethod === "social"
              ? "Just need a username to get you started"
              : "Tell us a bit about yourself to get started"}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMethod === "magic-link" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <div className="relative">
              <Input
                id="username"
                value={formData.username}
                onChange={handleUsernameChange}
                placeholder="Choose a unique username"
                className="pr-10"
                required
                minLength={3}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {usernameStatus === "checking" && (
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                )}
                {usernameStatus === "available" && (
                  <Check className="h-4 w-4 text-green-500" />
                )}
                {usernameStatus === "taken" && (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </div>
            </div>

            {formData.username && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">
                  Your profile will be:
                </span>
                <Badge variant="outline" className="font-mono">
                  @{formData.username}
                </Badge>
              </div>
            )}

            {usernameStatus === "taken" && (
              <Alert variant="destructive">
                <AlertDescription>
                  This username is already taken. Please try another one.
                </AlertDescription>
              </Alert>
            )}

            {usernameStatus === "available" &&
              formData.username.length >= 3 && (
                <Alert>
                  <Check className="h-4 w-4" />
                  <AlertDescription>
                    Great! This username is available.
                  </AlertDescription>
                </Alert>
              )}
          </div>

          <Button
            type="submit"
            className="w-full mt-10"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Just a moment...
              </>
            ) : (
              "Complete setup"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
