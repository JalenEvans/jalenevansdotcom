import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // ISO String: YYYY-MM-DDThh:mm:ss
    author: z.string().default("Jalen Evans"),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date(), // ISO String: YYYY-MM-DDThh:mm:ss
    contributors: z.array(z.string()).default(["Jalen Evans"]),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = { blog, project };
