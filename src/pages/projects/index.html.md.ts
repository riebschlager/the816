import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { markdownResponse } from "../../utils/llms";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const projects = await getCollection("projects");
  projects.sort((a, b) => a.data.order - b.data.order);

  const body = [
    "# Projects by Chris Riebschlager",
    "",
    "> Selected immersive and interactive projects, listed in their intended display order.",
    "",
    `Canonical page: ${new URL("/projects/", site).href}`,
    "",
    "Each link below is a Markdown version of the full project page.",
    "",
    ...projects.map(
      (project) =>
        `- [${project.data.title}](${new URL(`/projects/${project.id}/index.html.md`, site).href}): ${project.data.description} Mediums: ${project.data.mediums.join(", ")}.`,
    ),
    "",
  ].join("\n");

  return markdownResponse(body);
};
