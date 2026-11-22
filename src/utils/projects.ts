import type { CollectionEntry } from "astro:content";
import { getPublishedPosts } from "./posts";

export type TimelineEntry =
  | {
      kind: "post";
      year: number;
      title: string;
      summary: string;
      post: CollectionEntry<"blog">;
    }
  | {
      kind: "recap";
      year: number;
      title: string;
      summary: string;
      youtubeId: string;
    };

export const postYear = (post: CollectionEntry<"blog">) =>
  post.data.pubDate.getUTCFullYear();

/** Published posts attached to a project, oldest first. */
export async function getProjectPosts(projectId: string) {
  const posts = await getPublishedPosts();
  return posts
    .filter((post) => post.data.project?.id === projectId)
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());
}

/** Linked posts plus frontmatter recaps, newest year first. */
export async function getProjectTimeline(
  project: CollectionEntry<"projects">,
): Promise<TimelineEntry[]> {
  const posts = await getProjectPosts(project.id);

  const entries: TimelineEntry[] = [
    ...posts.map((post) => ({
      kind: "post" as const,
      year: postYear(post),
      title: post.data.projectLabel ?? post.data.title,
      summary: post.data.description,
      post,
    })),
    ...project.data.recaps.map((recap) => ({
      kind: "recap" as const,
      ...recap,
    })),
  ];

  return entries.sort((a, b) => b.year - a.year);
}
