import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 bg-background z-50">
            <Section className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-primary">Jérémie Fournier Portfolio</h1>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link target="_blank" href="https://github.com/Jejexs" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                                <GithubIcon size={16} className="text-foreground" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Section>
        </header>
    );
}
