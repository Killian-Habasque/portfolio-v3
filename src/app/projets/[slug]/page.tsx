import prisma from '../../../../prisma/db';

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: {
      technologies: true,
      blocks: true,
    },
  });

  return <pre>{JSON.stringify(projects, null, 2)}</pre>;
}