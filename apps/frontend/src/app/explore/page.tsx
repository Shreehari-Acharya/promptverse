import { auth } from "@/lib/auth";

export default async function ExplorePage() {
    const session = await auth();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <h1 className="text-3xl font-bold">Explore Promptverse</h1>
        <p className="text-muted-foreground">
          Discover and share prompts with the community.
        </p>
        <div>
            User details 
            <pre className="text-left p-4 rounded-lg">
                {JSON.stringify(session?.user, null, 2)}
            </pre>
        </div>
      </div>
    </main>
  );
}