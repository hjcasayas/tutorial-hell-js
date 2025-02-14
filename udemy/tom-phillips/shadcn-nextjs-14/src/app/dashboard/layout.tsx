import { ReactNode } from "react";
import MainMenu from "./_components/main-menu";

function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-col grid-cols-[250px_1fr] h-screen">
            <MainMenu />
            <div className="py-2 px-4">
                <h1 className="pb-4">Welcome back, Tom!</h1>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;