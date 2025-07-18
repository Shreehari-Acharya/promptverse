import { createAuthClient } from "better-auth/react"
import { magicLinkClient } from "better-auth/client/plugins";


const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:4000",
    plugins: [
        magicLinkClient()
    ]
})

export const { signIn, signOut, useSession } = authClient;