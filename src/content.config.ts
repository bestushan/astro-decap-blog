import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // New in the Content Layer API
import { z } from 'astro/zod'; // Import z from astro/zod in v6

const blog = defineCollection({
  // The 'glob' loader scans your folder for files
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // Use coerce to handle string-to-date conversion
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };