import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().trim().min(1).optional(),
      // Share-card override for when the hero crops badly to 1.91:1
      // (portrait, tiny, or animated). Falls back to heroImage.
      socialImage: image().optional(),
      socialImageAlt: z.string().trim().min(1).optional(),
      draft: z.boolean().default(false),
      // Ties a post to a project: it shows up on that project's timeline and
      // gets a series bar linking its sibling posts.
      project: reference("projects").optional(),
      // Short name for this post on the project timeline (e.g. "Hatrick Swayze").
      projectLabel: z.string().trim().min(1).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // One line on what Chris did on the project, shown on the projects index.
      role: z.string().trim().min(1).optional(),
      thumbnail: image().optional(),
      thumbnailAlt: z.string().trim().min(1).optional(),
      // Share-card override; falls back to thumbnail.
      socialImage: image().optional(),
      socialImageAlt: z.string().trim().min(1).optional(),
      order: z.number().int().positive(),
      mediums: z.array(z.string().trim().min(1)).nonempty(),
      // Timeline entries for years that don't have a full blog post.
      recaps: z
        .array(
          z.object({
            year: z.number().int(),
            title: z.string().trim().min(1),
            summary: z.string().trim().min(1),
            youtubeId: z.string().trim().min(1),
          }),
        )
        .default([]),
    }),
});

export const collections = { blog, projects };
