import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { cleanMarkdownForLlms } from "../../../utils/llms";

export const getStaticPaths = (async () => {
  const projects = await getCollection("projects");

  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const { project } = props;
  const pagePath = `/projects/${project.id}/`;
  const content = cleanMarkdownForLlms(project.body, site, pagePath);
  const body = `# ${project.data.title}\n\n> ${project.data.description}\n\nCanonical page: ${new URL(pagePath, site).href}\nMediums: ${project.data.mediums.join(", ")}\n\n${content}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
