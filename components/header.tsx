import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3 bg-violet-300">
            <div className="flex items-center gap-3 pl-4">
                <ThemeToggle />
                <Logo />
            </div>
            <div className="flex flex-col items-center gap-1 text-xs scroll-py-0">
                <p>Next versão 14.1.0</p>
                <p>Tailwindcss 3.3.0</p>
                <p>Typescript 5</p>
                <p>Shadcn/UI</p>
                <p>React Icons 5.0.1</p>
            </div>
        </header>
    )
}