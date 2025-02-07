import prisma from '../../../../prisma/db';
import { BlockType } from '@prisma/client';

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: {
      technologies: true,
      blocks: {
        select: {
          id: true,
          type: true,
          content: true,
          projectId: true,
        },
      },
    },
  });

  const formattedProjects = projects.map(project => ({
    ...project,
    blocks: project.blocks.map(block => ({
      ...block,
      type: BlockType[block.type as keyof typeof BlockType] || block.type,
    })),
  }));

  return <pre>{JSON.stringify(formattedProjects, null, 2)}</pre>;
}