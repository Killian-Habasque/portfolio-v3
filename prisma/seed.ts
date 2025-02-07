import { PrismaClient, BlockType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.create({
    data: {
      id: 'some-uuid',
      name: 'Project Name',
      title: 'Project Title',
      slug: 'project-slug',
      text: 'Some project text',
      date: new Date(),
      type: 'web',
      imgLink: null,
      videoLink: null,
      externalLink: null,
      order: 1,
      technologies: {
        create: [{ id: 'tech-uuid', name: 'React', slug: 'react' }],
      },
      blocks: {
        create: [
          {
            id: 'block-uuid',
            type: BlockType.TEXT,
            content: { text: 'Some content' },
          },
        ],
      },
    },
  });

  console.log('Seed completed:', project);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
