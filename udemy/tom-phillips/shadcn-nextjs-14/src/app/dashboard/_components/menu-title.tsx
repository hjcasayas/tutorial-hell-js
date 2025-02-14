import { PersonStandingIcon } from "lucide-react";

function MenuTitle() {
    return (
        <h4 className="flex flex-row items-center">
            <PersonStandingIcon size={40} className="text-primary" /> SupportMe
        </h4>
    );
}

export { MenuTitle }