import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from 'lucide-react';
import Link from "next/link";

export default function LandingPage() {
    return < >
        <h1 className="flex items-center gap-2"><PersonStandingIcon size={50} className="text-pink-500" /> SupportMe</h1>
        <p className="text-center">The best dashboard to manage manage customer support</p>
        <div className="flex items-center gap-2">
            <Button asChild><Link href="/login">Login</Link></Button>
            <small>or</small>
            <Button variant={'outline'} asChild><Link href={'/sign-up'}>Sign Up</Link></Button>
        </div>
    </>
}