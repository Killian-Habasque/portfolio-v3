import prisma from '../../../prisma/db';
import Link from 'next/link';

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            slug: true,
            technology: {
                select: { name: true },
            },
        },
    });
    return (
        <div>
            <h1>Liste des projets</h1>
            {projects.length === 0 ? (
                <p>Aucun projet disponible.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Link href={`/projets/${project.slug}`}>
                                <h2>{project.title}</h2>
                            </Link>
                            <p>Technologies : {project.technology.map(tech => tech.name).join(', ') || 'Aucune'}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
