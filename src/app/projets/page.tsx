import { BlockProjectsGrid } from '@/components/layouts/block-projects-grid';
import prisma from '@/lib/db';

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            slug: true,
            imgLink: true,
            externalLink: true,
            videoLink: true,
            text: true,
            technologies: {
                select: { name: true },
            },
        },
    });

    return (
        <div>
            {projects.length === 0 ? 
                <p>Aucun projet disponible.</p>
             :
                <BlockProjectsGrid items={projects} />
            }
        </div>
    );
}
