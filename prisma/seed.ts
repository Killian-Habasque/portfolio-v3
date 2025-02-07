import { PrismaClient, BlockType } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import seedData from './seed-data.json';

const prisma = new PrismaClient();

async function main() {
  await prisma.block.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();

  const technologies = await Promise.all(
    seedData.technologies.map(tech =>
      prisma.technology.create({
        data: {
          id: uuidv4(),
          name: tech.name,
          slug: tech.slug,
        },
      })
    )
  );

  for (const projectData of seedData.projects) {
    await prisma.project.create({
      data: {
        id: uuidv4(),
        name: projectData.name,
        title: projectData.title,
        slug: projectData.slug,
        text: projectData.text,
        date: new Date(),
        type: projectData.type,
        imgLink: null,
        videoLink: null,
        externalLink: null,
        order: projectData.order,
        technology: {
          connect: projectData.technologies.map(techSlug => ({
            slug: techSlug,
          })),
        },
        blocks: {
          create: projectData.blocks.map(block => ({
            id: uuidv4(),
            type: block.type as BlockType,
            content: block.content,
          })),
        },
      },
    });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
