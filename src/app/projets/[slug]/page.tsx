import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import { BlockType } from '@prisma/client';
import Breadcrumb from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import Date from '@/components/ui/date';
import { HeroVideoDialog } from '@/components/layouts/hero-video-dialog';
import Image from 'next/image';
import ExternalLink from '@/components/ui/externalLink';
import BlockAdapter from '@/components/adapters/blockAdapter';
import { BlockTextProps } from '@/components/layouts/block-text';

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
      <div className="container mx-auto px-5">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <section>
          <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="flex justify-center flex-col items-center mb-6">
              <div className='flex gap-2 items-center'>
                {formattedProject.date ? (
                  <>
                    Année de réalisation :  <Date dateString={formattedProject.date} />
                    •
                  </>
                ) : ''}
                {formattedProject.type ? (
                  <Badge>{formattedProject.type}</Badge>
                ) : ''}
              </div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none md:leading-none mb-3 text-center md:text-left font-bold tracking-tight text-gray-900">
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
                  videoSrc={`/${formattedProject.videoLink}`}
                  thumbnailSrc={`/projects/${formattedProject.imgLink}`}
                  thumbnailAlt={`Cover Image for ${formattedProject.title}`}
                />
              ) : (
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border-2">
                  <Image
                    src={`/projects/${formattedProject.imgLink}`}
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
              className="text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: formattedProject.text }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {formattedProject.blocks && formattedProject.blocks.map(block => {
                const blockContent = block.content as BlockTextProps | null;
                return <BlockAdapter key={block.id} type={block.type} content={blockContent} />;
              })}
            </div>
          </div>
        </section >
      </div >
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
