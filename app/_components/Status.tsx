import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Gamepad2, MonitorSmartphone, BookText } from "lucide-react";
import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./WORKS";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Quelques projets</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Travail</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Gamepad2,
        title: "E-Score",
        description: "Projet de site de score e-sport avec React et TailwindCSS",
        url: "https://projet-e-score.vercel.app/"
    },
    {
        Logo: MonitorSmartphone,
        title: "PWA Pokebuild",
        description: "Création d'une PWA grâce à Nuxt et l'api de Pokebuild",
        url: "https://pokebuild-jeremie.vercel.app/"
    },
    {
        Logo: BookText,
        title: "Mon premier portfolio",
        description: "Portfolio réalisé en première année de Bachelor avec Nuxt et TailwindCSS (non responsive)",
        url: "https://fournier-jeremie.vercel.app/"
    }
];
