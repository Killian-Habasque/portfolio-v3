
import { Footerbar } from "@/components/ui/footerbar"
import Image from "next/image"

function Footer() {
    return (
        <div className="w-full">
            <Footerbar
                logo={<Image width={20} height={20} className="w-6 h-6" src="/logo.svg" alt="logo killian habasque" />}
                brandName="Killian Habasque"
                socialLinks={[
                    {
                        icon: <Image width={20} height={20} src="/about/linkedin.svg" alt="Linkedin" />,
                        href: "https://www.linkedin.com/in/killian-habasque-041841220/",
                        label: "Linkedin",
                    },
                    {
                        icon: <Image width={20} height={20} src="/about/github.svg" alt="Github" />,
                        href: "https://github.com/Killian-Habasque",
                        label: "GitHub",
                    },
                    {
                        icon:  <Image width={20} height={20} src="/about/behance.svg" alt="Behance" />,
                        href: "https://www.behance.net/killian-habasque",
                        label: "Behance",
                    },
                ]}
                mainLinks={[
                    { href: "/projets", label: "Projets" },
                    { href: "/#presentation", label: "À propos" },
                    { href: "/#contact", label: "Contact" },
                ]}
                legalLinks={[
                    { href: "mailto:killian.habasque.pro@gmail.com", label: "killian.habasque.pro@gmail.com" },
                    { href: "/about/CV_Killian_Habasque.pdf", label: "CV" },
                ]}
                copyright={{
                    text: "© Killian Habasque",
                    license: "Tous droits réservés",
                }}
            />
        </div>
    )
}

export { Footer }