import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl">Jérémie Fournier</h2>
        <h3 className="text-3xl font-caption text-primary">Développeur Web Full Stack</h3>
        <p className="text-base">
          Bienvenue sur mon portfolio ! Je suis Jérémie Fournier, un développeur web <Code>full stack</Code> avec une expertise diversifiée et une passion pour l'optimisation des projets à l'aide de <Code>technologies innovantes</Code>.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/profil.jpg" 
          className="object-fill w-48 h-48 rounded-full"
          alt="Profile de Jérémie Fournier"
        />
      </div>
    </Section>
  );
};
