import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { SITE_TITLE, SOCIAL_LINKS } from "../consts";
import { markdownResponse } from "../utils/llms";

const socialUrl = (name: string) =>
  SOCIAL_LINKS.find((social) => social.name === name)?.href ?? "";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate llms.txt");
  }

  const [posts, projects] = await Promise.all([
    getCollection("blog"),
    getCollection("projects"),
  ]);

  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  projects.sort((a, b) => a.data.order - b.data.order);

  const url = (path: string) => new URL(path, site).href;
  const link = (title: string, path: string, description: string) =>
    `- [${title}](${url(path)}): ${description}`;

  const body = [
    `# ${SITE_TITLE}`,
    "",
    "> The portfolio and blog of Chris Riebschlager, a Kansas City creative technology leader who builds interactive installations and immersive experiences.",
    "",
    "Chris leads Creative Technology at Dimensional Innovations. His work spans TouchDesigner, creative coding, interactive installations, experience design, and venue-scale projects. Every link below points to a Markdown version of the page; prefer them when retrieving content — they are generated from the same source as the human-readable pages.",
    "",
    "Key facts:",
    "",
    "- Chris Riebschlager is based in Kansas City.",
    "- He is the Director of Creative Technology at Dimensional Innovations.",
    "- His specialties include TouchDesigner, creative coding, interactive installations, immersive experiences, and experience design.",
    "- This is Chris's personal portfolio and writing archive, not the official website of Dimensional Innovations.",
    "",
    "## Essential",
    "",
    link(
      "Home",
      "/index.html.md",
      "A concise introduction to Chris, his work, and his approach to creative technology.",
    ),
    link(
      "About Chris Riebschlager",
      "/about/index.html.md",
      "Career history, teaching experience, and the work experiences that shaped him.",
    ),
    link(
      "Projects index",
      "/projects/index.html.md",
      "An overview of selected immersive and interactive projects.",
    ),
    link(
      "Blog index",
      "/blog/index.html.md",
      "Tutorials and behind-the-scenes articles about creative technology projects.",
    ),
    "",
    "## Projects",
    "",
    ...projects.map((project) =>
      link(
        project.data.title,
        `/projects/${project.id}/index.html.md`,
        `${project.data.description} Mediums: ${project.data.mediums.join(", ")}.`,
      ),
    ),
    "",
    "## Blog",
    "",
    ...posts.map((post) =>
      link(
        post.data.title,
        `/blog/${post.id}/index.html.md`,
        `${post.data.description} Published ${post.data.pubDate.toISOString().slice(0, 10)}.`,
      ),
    ),
    "",
    "## Profiles",
    "",
    `- [GitHub](${socialUrl("GitHub")}): Chris Riebschlager's public code and software projects.`,
    `- [LinkedIn](${socialUrl("LinkedIn")}): Professional employment history and profile.`,
    "",
    "## Optional",
    "",
    link("RSS feed", "/rss.xml", "The complete blog feed, newest first."),
    link(
      "Sitemap",
      "/sitemap-index.xml",
      "A machine-readable inventory of the site's public HTML pages.",
    ),
    "",
  ].join("\n");

  return markdownResponse(body);
};
