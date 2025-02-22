import { BlockProjectsGrid } from '@/components/layouts/homepage/block-projects-grid';
import Breadcrumb from '@/components/ui/breadcrumb';

export default async function ProjectsPage() {
    const breadcrumbs = [
        { id: 1, name: 'Accueil', href: '/' },
        { id: 2, name: 'Projets', href: '' }
    ];

    return (
        <>
            <div className="container mx-auto px-4">
                <Breadcrumb breadcrumbs={breadcrumbs} />
            </div>
            <section className='py-12'>
                <BlockProjectsGrid />
            </section>
        </>

    );
}
