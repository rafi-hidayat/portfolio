import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tech = z.object({
  name: z.string(),
  /** Full icon URL (cdn.simpleicons.org or the simple-icons package on jsDelivr). */
  icon: z.string().url().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Short blurb on the project card. */
    summary: z.string(),
    /** Opening paragraph on the project page. */
    description: z.string(),
    /** Card illustration, served from public/. */
    image: z.string(),
    /** Short label on the card image, e.g. "1st Place". */
    badge: z.string().optional(),
    /** Longer label above the title on the project page. */
    label: z.string().optional(),
    tech: z.array(tech),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    /** Lower comes first. */
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    /** Blurb on the article card. */
    summary: z.string(),
    /** Meta/OG description. */
    description: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, writing };
