import { auth } from "@/lib/auth";
import OnboardingCard from "./components/onboarding-card";
import { DotBackground } from "@ui/dotted-background";

export default async function OnboardingPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">You must be logged in to access this page.</p>
      </div>
    );
  }

  return (
      <DotBackground children={
        <OnboardingCard session={session}  />
      } />
  );
}