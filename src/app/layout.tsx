import type { Metadata } from "next";
import "./globals.css";
import { BgNoise } from "../components/ui/bg-noise";
import { Header } from "@/components/layouts/header";
import TransitionLayout from "./transition-layout";

export const metadata: Metadata = {
  title: "Killian HABASQUE | Portfolio",
  description: "Développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <BgNoise />
        <Header />
        <TransitionLayout>
          {children}
        </TransitionLayout>
      </body>
    </html>
  );
}
