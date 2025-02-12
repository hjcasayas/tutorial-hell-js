import { LightDarkModeToggle } from "@/components/ui/light-dark-toggle";
import { ReactNode } from "react";

function LoggedOutLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-col min-h-screen items-center justify-center gap-4 p-24">
                {children}
            </div>
            <LightDarkModeToggle className="fixed top-1/2 right-2 -mt-3" />
        </>
    );
}

export default LoggedOutLayout;