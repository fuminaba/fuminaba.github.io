import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        layout: z.string().optional(),
    })
});

const wikiCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/wiki" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        series: z.string().optional(),
        layout: z.string().optional(),
    })
});

export const collections = {
    'blog': blogCollection,
    'wiki': wikiCollection,
};
