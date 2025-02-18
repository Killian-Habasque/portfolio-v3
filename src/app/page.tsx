import { BlockProjectsGrid } from "../components/layouts/block-projects-grid";
import { BlockMediaText } from "../components/layouts/block-media-text";
import { BlockTimeline } from "../components/layouts/block-timeline";
import HeroFrontpage from "../components/layouts/hero-frontpage";
import prisma from '@/lib/db';
import { BlockIntro } from "../components/layouts/block-intro";
import { BlockEducation } from "../components/layouts/block-education";

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
      <HeroFrontpage />
      <BlockIntro />
      <BlockProjectsGrid items={projects} />
      <BlockMediaText />
      <BlockEducation />
      <BlockTimeline />
    </div>
  );
}
