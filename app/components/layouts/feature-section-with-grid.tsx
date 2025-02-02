// import { Badge } from "@/components/ui/badge";

import { Icon } from "../ui/icon";

function Feature() {
    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 flex-col items-start">
                        <div>
                            {/* <Badge>Platform</Badge> */}
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                EXEMPLES DE 🛠️ PROJETS
                            </h2>
                            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                                Managing a small business today is already tough.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Yatzee</h3>
                            <p className="text-muted-foreground text-base">
                                Création d’une web application interactive pour jouer au Yatzee
                                Technologies : JavaScript, Three.js, Express, Firebase
                            </p>
                            <a href="" className="flex gap-2 items-center text-indigo-600 underline">

                                <Icon label="link"/>
                                https://yatzee.fr</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                            <p className="text-muted-foreground text-base">
                                Our goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                            <p className="text-muted-foreground text-base">
                                Our goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                            <p className="text-muted-foreground text-base">
                                Our goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                            <p className="text-muted-foreground text-base">
                                Our goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-muted bg-dark rounded-xl aspect-video mb-2"></div>
                            <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                            <p className="text-muted-foreground text-base">
                                Our goal is to streamline SMB trade, making it easier and faster
                                than ever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Feature };
