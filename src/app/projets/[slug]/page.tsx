import prisma from '../../../../prisma/db'

export default async function Home() {
  const recipes = await prisma.recipe.findMany()

  return <pre>{JSON.stringify(recipes, null, 2)}</pre>
}