"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { IconBrandGoogle, IconBrandGithub, IconBrandX, IconMail } from "@tabler/icons-react"
import { signIn } from "@/lib/auth-client"

export default function LoginForm() {
  const handleSocialLogin = (provider: string) => {
    console.log(`Redirecting to ${provider} login...`)
    signIn.social({provider: provider})
  }

  const handleMagicLink = (formData: FormData) => {
    const email = formData.get("email") as string
    signIn.magicLink({email: email, callbackURL: "/onboarding"})
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md drop-shadow-2xl shadow-blue-300/60">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl md:text-4xl font-semibold text-center">Join now</CardTitle>
          <CardDescription className="text-center">Promptverse helps you spark brilliance with the right prompt, every time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium bg-transparent"
              onClick={() => handleSocialLogin("google")}
            >
              <IconBrandGoogle className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium bg-transparent"
              onClick={() => handleSocialLogin("X")}
            >
              <IconBrandX className="mr-2 h-4 w-4" />
              Continue with X
            </Button>

            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium bg-transparent"
              onClick={() => handleSocialLogin("github")}
            >
              <IconBrandGithub className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </div>

          {/* Separator */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Magic Link Form */}
          <form action={handleMagicLink} className="space-y-4">
            <div className="space-y-2">
              <Input id="email" name="email" type="email" placeholder="Enter your email" required className="h-11" />
            </div>

            <Button type="submit" className="w-full h-11 text-sm font-medium">
              <IconMail className="mr-2 h-4 w-4" />
              Continue with email
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}