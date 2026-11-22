import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { cleanMarkdownForLlms } from "../../../utils/llms";
import {
  getProjectTimeline,
  type TimelineEntry,
} from "../../../utils/projects";

export const getStaticPaths = (async () => {
  const projects = await getCollection("projects");

  return Promise.all(
    projects.map(async (project) => ({
      params: { slug: project.id },
      props: { project, timeline: await getProjectTimeline(project) },
    })),
  );
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const { project, timeline } = props;
  const pagePath = `/projects/${project.id}/`;
  const content = cleanMarkdownForLlms(project.body, site, pagePath);
  const url = (path: string) => new URL(path, site).href;

  const timelineMarkdown = timeline.length
    ? "\n\n## Year by year\n\n" +
      timeline
        .map((entry: TimelineEntry) =>
          entry.kind === "post"
            ? `- **${entry.year}: ${entry.title}.** ${entry.summary} [Read the write-up](${url(`/blog/${entry.post.id}/index.html.md`)})`
            : `- **${entry.year}: ${entry.title}.** ${entry.summary} [Recap video](https://www.youtube.com/watch?v=${entry.youtubeId})`,
        )
        .join("\n")
    : "";

  const body = `# ${project.data.title}\n\n> ${project.data.description}\n\nCanonical page: ${url(pagePath)}\nMediums: ${project.data.mediums.join(", ")}\n\n${content}${timelineMarkdown}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
