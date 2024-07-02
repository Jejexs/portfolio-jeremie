import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { OpenAILogo } from "./icons/OpenAILogo";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">    
            <Badge variant={"outline"}>Compétences</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J'adore travailler sur...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <ReactLogo size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight">Vue/Nuxt - React</h3>
                    <p className="text-sm text-muted-foreground">Maîtrise de <Code>Vue</Code> et de son framework <Code>Nuxt</Code> pour le développement d'applications dynamiques et performantes. <br></br>En plein apprentissage de <Code>React</Code> et de son écosystème.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <TailwindLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
                    <p className="text-sm text-muted-foreground">Je crée des applications <u>magnifiques</u> en <i>un rien de temps</i> avec <Code>TailwindCSS</Code>.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <OpenAILogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">OpenAI</h3>
                    <p className="text-sm text-muted-foreground">Grande maîtrise de l'intelligence artificielle pour améliorer ma productivité et offrir une <u>expérience utilisateur</u> exceptionnelle.</p>
                </div>
            </div>
        </Section>
    );
};
