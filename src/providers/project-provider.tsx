import prisma from '@/lib/db';
import { ProjectProvider } from '@/contexts/project-context';

const ProjectsProvider = async ({ children }: { children: React.ReactNode }) => {
  const allProjects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      imgLink: true,
      externalLink: true,
      videoLink: true,
      text: true,
      type: true,
      order: true,
      technologies: {
        select: { name: true },
      },
    },
    orderBy: {
      date: 'desc',
    },
  });

  const orderedProjects = allProjects
    .filter(project => project.order !== null)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 6);

  return (
    <ProjectProvider initialProjects={allProjects} orderedProjects={orderedProjects}>
      {children}
    </ProjectProvider>
  );
};

export default ProjectsProvider; 