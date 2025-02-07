import prisma from '../../../../prisma/db';
import { notFound } from 'next/navigation';
import { BlockType } from '@prisma/client';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
    include: {
      technology: true,
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

  return (
    <div>
      <h1>{formattedProject.title}</h1>
      <p>{formattedProject.text}</p>

      <h2>Technologies</h2>
      <ul>
        {formattedProject.technology.map(tech => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>

      <h2>Blocks</h2>
      {formattedProject.blocks.map(block => (
        <div key={block.id}>
          <h3>{block.type}</h3>
          <pre>{JSON.stringify(block.content, null, 2)}</pre>
        </div>
      ))}
    </div>
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