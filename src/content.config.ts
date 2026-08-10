import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        layout: z.string().optional(),
        // Surfaces this post in the homepage's "Recent Updates" timeline (5 most recent, by date)
        pinned: z.boolean().default(false),
        // Short blurb for the homepage timeline; falls back to the post body if omitted
        summary: z.string().optional(),
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
