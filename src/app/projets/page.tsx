import { BlockProjectsGrid } from '@/components/layouts/homepage/block-projects-grid';
import Breadcrumb from '@/components/ui/breadcrumb';
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

    const breadcrumbs = [
        { id: 1, name: 'Accueil', href: '/' },
        { id: 2, name: 'Projets', href: '' }
    ];

    return (
        <>
            <div className="container mx-auto px-5">
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <section className='py-12'>
                {projects.length === 0 ?
                    <p>Aucun projet disponible.</p>
                    :
                    <BlockProjectsGrid items={projects} />
                }
            </section>
        </>

    );
}
