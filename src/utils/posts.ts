import { getCollection } from "astro:content";

// Drafts show up in `astro dev` but are left out of production builds.
export const getPublishedPosts = () =>
  getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
