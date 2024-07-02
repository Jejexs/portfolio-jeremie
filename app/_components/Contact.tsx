import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contactez-moi</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Je serai heureux de travailler avec vous.
            </h2>
            <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard className="flex-1" url="tel:+33626144432" name="Téléphone" image="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/accept-call-icon.png" mediumImage="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/accept-call-icon.png" description="+33 6 26 14 44 32" />
                <ContactCard className="flex-1" url="mailto:jeremie.fournier@hotmail.com" name="Mail" image="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" mediumImage="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" description="jeremie.fournier@hotmail.com" />
            </div>
        </Section>
    );
};
