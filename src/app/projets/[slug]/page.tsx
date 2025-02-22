import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { BlockType } from '@prisma/client';
import Breadcrumb from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import Date from '@/components/ui/date';
import { HeroVideoDialog } from '@/components/layouts/project/hero-video-dialog';
import Image from 'next/image';
import ExternalLink from '@/components/ui/externalLink';
import BlockAdapter from '@/components/adapters/blockAdapter';
import { BlockTextProps } from '@/components/layouts/project/block-text';
import { BlockListProps } from '@/components/layouts/project/block-list';
import { BlockImageProps } from '@/components/layouts/project/block-image';
import { BlockContact } from '@/components/layouts/homepage/block-contact';
import { Header } from '@/components/layouts/header';

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
  const projects = await prisma.project.findMany({
    select: {
        id: true,
        title: true,
        slug: true,
        imgLink: true,
        externalLink: true,
        videoLink: true,
        text: true,
        date: true,
        technologies: {
            select: { name: true },
        },
    },
    orderBy: {
        date: 'desc',
    },
});
  if (!project) {
    notFound();
  }

  const formattedProject = {
    ...project,
    blocks: project.blocks.map(block => ({
      ...block,
      type: BlockType[block.type as keyof typeof BlockType],
    })),
  };

  const breadcrumbs = [
    { id: 1, name: 'Accueil', href: '/' },
    { id: 2, name: 'Projets', href: '/projets' },
    { id: 3, name: formattedProject.title, href: "" }
  ];

  return (
    <>
      <Header projects={projects} />
      <div className="container mx-auto px-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <section>
          <div className="mx-auto max-w-2xl py-12 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="flex justify-center flex-col items-center mb-6 font-outfit">
              <div className='flex flex-col lg:flex-row gap-2 items-center text-secondary-dark mb-3'>
                {formattedProject.date ? (
                  <div className='flex gap-2'>
                    Année de réalisation :  <span className='font-semibold'><Date dateString={formattedProject.date} /></span>
                    <span className='hidden lg:block'>•</span>
                  </div>
                ) : ''}
                {formattedProject.type ? (
                  <Badge>{formattedProject.type}</Badge>
                ) : ''}
              </div>
              <h1 className="text-5xl lg:text-9xl font-bold tracking-tighter leading-none md:leading-none mb-3 text-center md:text-left font-bold tracking-tight text-secondary-dark">
                {formattedProject.title}
              </h1>
              {formattedProject.externalLink ? (
                <div className="mb-2">
                  <ExternalLink url={formattedProject.externalLink} />
                </div>
              ) : ''}
            </div>

            <div className="relative">
              {formattedProject.videoLink ? (
                <HeroVideoDialog
                  className="block"
                  animationStyle="from-center"
                  videoSrc={`${formattedProject.videoLink}`}
                  thumbnailSrc={`${formattedProject.imgLink}`}
                  thumbnailAlt={`Cover Image for ${formattedProject.title}`}
                />
              ) : (
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border-2">
                  <Image
                    src={`${formattedProject.imgLink}`}
                    alt={`Cover Image for ${formattedProject.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="mb-6">
              <nav className="flex flex-wrap gap-2 mt-4">
                {formattedProject.technologies && formattedProject.technologies.map(tech => (
                  <span key={tech.id}>
                    <Badge variant='secondary'>{tech.name}</Badge>
                  </span>
                ))}
              </nav>
            </div>
            <div
              className="text-lg leading-relaxed mb-4 font-outfit text-secondary-dark"
              dangerouslySetInnerHTML={{ __html: formattedProject.text }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {formattedProject.blocks && formattedProject.blocks.map(block => {
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
