'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function MenuItem({ children, href }: { children: ReactNode, href: string }) {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <li>
            <Link className={cn(
                "block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground p-2",
                isActive ? "bg-primary hover:bg-primary dark:hover:bg-primary text-primary-foreground hover:text-primary-foreground dark:hover:text-primary-foreground" : ""
            )} href={href}>{children}</Link>
        </li>
    );
}

export { MenuItem };