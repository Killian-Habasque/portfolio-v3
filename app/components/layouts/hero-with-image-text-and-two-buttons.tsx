// import { MoveRight, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function Hero() {
    return (
        <div className="w-full  py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <div className="flex gap-4 flex-col">
                        <div>
                            <Badge variant="outline">We&apos;re live!</Badge>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-6xl max-w-lg tracking-tighter text-left font-regular">
                                MON <br /> PARCOURS
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                Salut ! Moi c’est Killian Habasque. Je viens de Quimper dans le Finistère et j’étudie actuellement à Laval. Je suis un étudiant passionné par le design et le développement Web. J’ai eu de nombreuses expériences dans ce domaine dû à mes formations mais également lors de projets personnels. Je possède donc de bonnes compétences en langages de programmation comme le Html, CSS ou Php mais aussi en logiciels comme la suite Adobe ou Affinity.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Button variant="default">
                                Bouton par défaut 
                                <ArrowDownIcon />
                            </Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-xl aspect-square bg-dark"></div>
                </div>
            </div>
        </div>
    );
}

export { Hero };