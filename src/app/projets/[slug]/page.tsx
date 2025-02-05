import { notFound } from 'next/navigation'
import projectsData from '@/data/projets.json'
import Image from 'next/image' 


interface Projet {
  id: number
  slug: string
  titre: string
  description: string
  image: string
}

async function getProjets() {
  return projectsData.projets
}

export async function generateStaticParams() {
  const projets = await getProjets()
  return projets.map((projet: Projet) => ({
    slug: projet.slug,
  }))
}

async function getProjet(slug: string) {
  const projets = await getProjets()
  return projets.find((p: Projet) => p.slug === slug)
}

export default async function Page({ params }: { params: { slug: string }}) {

  const { slug } = await params
  const projet = await getProjet(slug)

  if (!projet) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{projet.titre}</h1>
      <div className="relative w-full max-w-2xl h-[400px] mb-4">
        <Image 
          src={projet.image}
          alt={projet.titre}
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="text-lg">{projet.description}</p>
    </div>
  )
}