import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    description: z.string().optional(),
    template: z.string().optional(),      // e.g., 'home', 'standard'
    image: z.string().optional(),
    // any other fields you expect from MODX (template variables, etc.)
  }),
});

export const collections = {
  pages: pagesCollection,
};