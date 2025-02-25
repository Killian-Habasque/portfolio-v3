import type { Metadata } from "next";
import "./globals.css";
import { BgNoise } from "../components/ui/bg-noise";
import TransitionLayout from "./transition-layout";
import { Footer } from "@/components/layouts/footer";
import ProjectsProvider from '../providers/project-provider';
import { Header } from "@/components/layouts/header";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Killian HABASQUE | Portfolio",
  description: "Développeur web",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ProjectsProvider>
          <TransitionLayout>
            <main key="app" id="root">
              <Header />
              <BgNoise />
              {children}
              <Footer />
            </main>
          </TransitionLayout>
        </ProjectsProvider>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-QLT7GQ0LT0" />}
    </html>
  );
}
