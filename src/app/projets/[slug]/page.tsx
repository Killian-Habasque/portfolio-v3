import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/breadcrumb';
import { HeroProject } from '@/components/layouts/project/hero-project';
import BlockAdapter from '@/components/adapters/blockAdapter';
import { BlockTextProps } from '@/components/layouts/project/block-text';
import { BlockListProps } from '@/components/layouts/project/block-list';
import { BlockImageProps } from '@/components/layouts/project/block-image';
import { BlockContact } from '@/components/layouts/homepage/block-contact';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
    include: {
      technologies: true,
      blocks: {
        select: {
          id: true,
          type: true,
          content: true,
        },
      },
    },
  });
  if (!project) {
    notFound();
  }
  const formattedProject = {
    date: project.date,
    type: project.type,
    text: project.text,
    title: project.title,
    externalLink: project.externalLink,
    videoLink: project.videoLink,
    imgLink: project.imgLink,
    technologies: project.technologies.map(tech => ({
      id: tech.id,
      imgLink: tech.imgLink ?? null,
      name: tech.name,
    })),
  };

  const breadcrumbs = [
    { id: 1, name: 'Accueil', href: '/' },
    { id: 2, name: 'Projets', href: '/projets' },
    { id: 3, name: formattedProject.title, href: "" }
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <section>
          <div className="mx-auto max-w-2xl py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <HeroProject
              formattedProject={formattedProject}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-12 mt-24">
              {project.blocks && project.blocks.map(block => {
                const blockContent = block.content as BlockTextProps | BlockImageProps | BlockListProps | null;
                return <BlockAdapter key={block.id} type={block.type} content={blockContent} />;
              })}
            </div>
          </div>
        </section>
      </div >
      <BlockContact />
    </>
  );
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: {
      slug: true,
    },
  });
  return projects.map((project) => ({
    slug: project.slug,
  }));
}