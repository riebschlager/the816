import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { markdownResponse } from "../../utils/llms";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const body = [
    "# Blog by Chris Riebschlager",
    "",
    "> Tutorials and behind-the-scenes articles about creative technology projects, newest first.",
    "",
    `Canonical page: ${new URL("/blog/", site).href}`,
    "",
    "Each link below is a Markdown version of the full article.",
    "",
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${new URL(`/blog/${post.id}/index.html.md`, site).href}): ${post.data.description} Published ${post.data.pubDate.toISOString().slice(0, 10)}.`,
    ),
    "",
  ].join("\n");

  return markdownResponse(body);
};
