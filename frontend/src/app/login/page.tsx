import LoginForm from "@/components/login-form";
import { BackgroundLines } from "@/components/ui/background-lines";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if(session?.user) {
    redirect("/explore");
  }

  return (
    <div className="flex md:flex-row min-h-screen w-full justify-center items-center gap-10 ">

        <LoginForm />
      <div className="w-full md:w-1/2 max-w-xl relative flex items-center justify-center">
        <BackgroundLines className="w-full flex items-center justify-center flex-col px-4">
          <h2 className="z-1 bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-100 to-blue-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 md:py-8 font-bold tracking-tight leading-tight">
            Explore <br /> Promptverse
          </h2>
        </BackgroundLines>
      </div>
    </div>
  );
}
