'use cliemt';

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn("pr-12", className)}
          ref={ref}
          {...props}
        />
        <span className="absolute top-[7px] right-3 cursor-pointer select-none">{showPassword ? <EyeIcon onClick={() => setShowPassword(false)} /> : <EyeOffIcon onClick={() => setShowPassword(true)} />}</span>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
