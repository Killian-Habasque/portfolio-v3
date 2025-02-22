import { BlockProjectsGrid } from "../components/layouts/homepage/block-projects-grid";
import { BlockMediaText } from "../components/layouts/homepage/block-media-text";
import HeroFrontpage from "../components/layouts/homepage/hero-frontpage";
import prisma from '@/lib/db';
import { BlockIntro } from "../components/layouts/homepage/block-intro";
import { BlockEducation } from "../components/layouts/homepage/block-educations";
import { BlockMarquee } from "@/components/layouts/homepage/block-technologies";
import { BlockExperience } from "@/components/layouts/homepage/block-experiences";
import { BlockContact } from "@/components/layouts/homepage/block-contact";
import { Header } from "@/components/layouts/header";

export default async function Home() {
  const projects = await prisma.project.findMany({
    take: 6,
    where: {
      order: {
        not: null,
      },
    },
    orderBy: {
      order: 'asc',
    },
    select: {
      id: true,
      title: true,
      slug: true,
      imgLink: true,
      externalLink: true,
      videoLink: true,
      text: true,
      technologies: {
        select: { name: true },
      },
    },
  });
  return (
    <div id="root" className="overflow-hidden">
      <Header projects={projects} />
      <HeroFrontpage />
      <BlockIntro />
      <BlockProjectsGrid items={projects.slice(0, 6)} />
      <BlockMediaText />
      <BlockEducation />
      <BlockMarquee />
      <BlockExperience />
      <BlockContact />
    </div>
  );
}
