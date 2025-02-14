import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MenuItem } from "./menu-item";
import { MenuTitle } from "./menu-title";
import Link from "next/link";
import { LightDarkModeToggle } from "@/components/ui/light-dark-toggle";

function MainMenu() {
    return (
        <nav className="bg-muted overflow-auto p-4 flex flex-col">
            <header className="border-b border-b-zinc-300 dark:border-b-black pb-4">
                <MenuTitle />
            </header>
            <ul className="py-4 grow">
                <MenuItem href="/dashboard">
                    My Dashboard
                </MenuItem>
                <MenuItem href="/dashboard/teams">
                    Teams
                </MenuItem>
                <MenuItem href="/dashboard/employees">
                    Employees
                </MenuItem>
                <MenuItem href="/dashboard/account">
                    Account
                </MenuItem>
                <MenuItem href="/dashboard/settings">
                    Settings
                </MenuItem>
            </ul>
            <footer className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="bg-pink-300 dark:bg-pink-800">TP</AvatarFallback>
                </Avatar>
                <Link href="/" className="hover:underline">Logout</Link><LightDarkModeToggle className="ml-auto" />
            </footer>
        </nav>
    );
}

export default MainMenu