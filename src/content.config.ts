import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const project = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/project' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    startDate: z.coerce.date(), // ISO String: YYYY-MM-DDThh:mm:ss
    contributors: z.array(z.string()).default(['Jalen Evans']),
    description: z.string(),
    tools: z.array(z.string()),
    mainImage: z.string().optional(),
    tags: z.array(z.string()),
  }),
})

export const collections = { project }
