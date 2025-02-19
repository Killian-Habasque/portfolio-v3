import { Button } from "@/components/ui/button";

interface ContactProps {
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

const Contact = ({
    heading = "Ready to Get Started?",
    description = "Join thousands of satisfied customers using our platform to build amazing websites.",
    buttons = {
        primary: {
            text: "Get Started",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "Learn More",
            url: "https://www.shadcnblocks.com",
        },
    },
}: ContactProps) => {
    return (
        <section id="contact" className="py-40 flex items-center justify-center">
            <div className="container flex items-center justify-center">
                <div className="flex flex-col items-center rounded-lg bg-accent w-full p-8 text-center md:rounded-2xl lg:p-16 bg-secondary-dark">
                    <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-7xl lg:mb-6 text-white font-outfit">
                        {heading}
                    </h3>
                    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg text-white font-outfit">
                        {description}
                    </p>
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                        {buttons.secondary && (
                            <Button variant="outline" className="w-full sm:w-auto" link={buttons.secondary.url}>
                                {buttons.secondary.text}
                            </Button>
                        )}
                        {buttons.primary && (
                            <Button className="w-full sm:w-auto" link={buttons.primary.url}>
                                {buttons.primary.text}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
