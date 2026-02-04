import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string().default('Jalen Evans'),
    pubDate: z.coerce.date(), // ISO String: YYYY-MM-DDThh:mm:ss
    description: z.string(),
    mainImage: z.string().optional(),
    tags: z.array(z.string()),
  }),
})

const project = defineCollection({
  type: 'content',
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

export const collections = { blog, project }
