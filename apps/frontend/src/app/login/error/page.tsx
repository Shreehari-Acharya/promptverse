"use client"

import { useSearchParams } from "next/navigation"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const errorMessages: Record<string, string> = {
  Configuration: "There is a configuration issue on the server. Please contact support.",
  AccessDenied: "Access denied. You might not have permission to sign in.",
  Verification: "The email link has expired or has already been used.",
  Default: "Something went wrong during authentication.",
}

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const errorCode = searchParams.get("error") ?? "Default"
  const errorMessage = errorMessages[errorCode] || errorMessages["Default"]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-red-600">Authentication Error</h1>
        <p className="text-muted-foreground">{errorMessage}</p>
        <Button asChild>
          <Link href="/login">Go back to login</Link>
        </Button>
      </div>
    </main>
  )
}
