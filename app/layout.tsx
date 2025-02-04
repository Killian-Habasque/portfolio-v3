import type { Metadata } from "next";
import "./globals.css";
import { BgNoise } from "./components/ui/bg-noise";

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
        {children}
      </body>
    </html>
  );
}
