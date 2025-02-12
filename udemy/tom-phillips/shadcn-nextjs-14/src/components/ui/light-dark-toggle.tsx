'use client';

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

export function LightDarkModeToggle({ className }: { className?: string }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle('dark');
    }

    return (
        <TooltipProvider>
            {
                <Tooltip>
                    <TooltipTrigger className={className} onClick={handleToggleDarkMode}>
                        {isDarkMode ? <MoonIcon /> : <SunIcon />}
                    </TooltipTrigger>
                    <TooltipContent>
                        {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
                    </TooltipContent>
                </Tooltip>
            }
        </TooltipProvider>
    );
}