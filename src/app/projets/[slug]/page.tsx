import { notFound } from 'next/navigation'
import projectsData from '@/data/projects.json'
import Image from 'next/image'
import Date from '@/components/ui/date'
import { Badge } from '@/components/ui/badge'
import ExternalLink from '@/components/ui/externalLink'
import { HeroVideoDialog } from '@/components/layouts/hero-video-dialog'
import Breadcrumb from '@/components/ui/breadcrumb'

interface project {
  id: number
  slug: string
  title: string
  text: string
  date: string,
  type: string,
  technologies: Array<string>,
  imgLink: string,
  videoLink: string,
  externalLink: string
}

async function getProjects() {
  return projectsData.projects
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project: project) => ({
    slug: project.slug,
  }))
}

async function getProject(slug: string) {
  const projects = await getProjects()
  return projects.find((p: project) => p.slug === slug)
}

export default async function Page({ params }: { params: { slug: string } }) {

  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }
  const breadcrumbs = [
    { id: 1, name: 'Accueil', href: '/' },
    { id: 2, name: 'Projets', href: '/projets' },
    { id: 3, name: project.title, href: "" }
  ];
  return (
    <div className="container mx-auto px-5">
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <section>
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="flex justify-center flex-col items-center mb-6">
            <div className='flex gap-2 items-center'>
              Année de réalisation : <Date dateString={project.date} />
              •
              <Badge>{project.type}</Badge>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none md:leading-none mb-3 text-center md:text-left font-bold tracking-tight text-gray-900">
              {project.title}
            </h1>
            <div className="mb-2">
              <ExternalLink url={project.externalLink} />
            </div>
          </div>

          <div className="relative">
            {project.videoLink ? (
              <HeroVideoDialog
                className="block"
                animationStyle="from-center"
                videoSrc={`/${project.videoLink}`}
                thumbnailSrc={`/projects/${project.imgLink}`}
                thumbnailAlt={`Cover Image for ${project.title}`}
              />
            ) : (
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border-2">
                <Image
                  src={`/projects/${project.imgLink}`}
                  alt={`Cover Image for ${project.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
          <div className="mb-6">
            <nav className="flex flex-wrap gap-2 mt-4">
              {project.technologies && project.technologies.map((category, index) => {
                return (
                  <span key={index}>
                    <Badge variant='secondary'> {category}</Badge>
                  </span>
                );
              })}
            </nav>
          </div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: project.text }}
          />
          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
              Année du projet :  <Date dateString={project.date} />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}