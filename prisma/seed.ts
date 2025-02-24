import { PrismaClient, BlockType } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import seedData from './seed-data.json';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  await prisma.block.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();

  for (const tech of seedData.technologies) {
    await prisma.technology.create({
      data: {
        id: uuidv4(),
        name: tech.name,
        slug: tech.slug,
        imgLink: tech.imgLink ?? null,
      },
    });
  }
  
  for (const projectData of seedData.projects) {
    try {
      await prisma.project.create({
        data: {
          id: uuidv4(),
          title: projectData.title,
          slug: projectData.slug,
          text: projectData.text,
          date: projectData.date,
          type: projectData.type,
          imgLink: projectData.imgLink ?? null,
          videoLink: projectData.videoLink ?? null,
          externalLink: projectData.externalLink ?? null,
          order: projectData.order ?? null,
          technologies: {
            connect: projectData.technologies
              ?.map((techSlug: string) => ({ slug: techSlug })) || [],
          },
          blocks: {
            create: projectData.blocks?.map((block) => ({
              id: uuidv4(),
              type: block.type as BlockType,
              content: block.content,
            })) || [],
          },
        },
      });
    } catch (error) {
      console.error(`Erreur lors de l'ajout du projet ${projectData.title}:`, error);
    }
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
