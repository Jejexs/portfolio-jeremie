import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="py-8 flex justify-center">
                <p className="text-muted-foreground text-sm">© 2024 Jeremie Fournier | Made with ❤️</p>
            </Section>
        </footer>
    );
}
