import { IconMailOpened } from '@tabler/icons-react';

export default function VerifyRequestPage() {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-semibold mb-4">Check your email</h1>
            <IconMailOpened stroke={1} className="h-50 w-50 text-blue-300" />
            <p className="text-mutded-foreground text-xl max-w-lg text-center">
                We have sent you an email with a link. Please check your inbox and click the link to continue.
            </p>
        </div>
    );
}