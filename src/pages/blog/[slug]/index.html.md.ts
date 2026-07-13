import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { cleanMarkdownForLlms } from "../../../utils/llms";

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const { post } = props;
  const pagePath = `/blog/${post.id}/`;
  const updated = post.data.updatedDate
    ? `\nUpdated: ${post.data.updatedDate.toISOString().slice(0, 10)}`
    : "";
  const content = cleanMarkdownForLlms(post.body, site, pagePath);
  const body = `# ${post.data.title}\n\n> ${post.data.description}\n\nCanonical page: ${new URL(pagePath, site).href}\nPublished: ${post.data.pubDate.toISOString().slice(0, 10)}${updated}\n\n${content}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
