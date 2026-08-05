import type { APIRoute } from "astro";
import { SITE_TITLE } from "../consts";
import { markdownResponse } from "../utils/llms";

// Keep this in sync with the copy in src/pages/index.astro.
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const body = `# ${SITE_TITLE}: Hello, I'm Chris.

> A concise introduction to Chris Riebschlager, his work, and his approach to creative technology.

Canonical page: ${new URL("/", site).href}

I lead Creative Technology at [Dimensional Innovations](https://dimin.com), where my teams build interactive installations and immersive experiences for stadiums, museums, and entertainment venues. Twenty-plus years in, my work has run the gamut from web applications to venue-scale projects like [Atlas9](${new URL("/projects/atlas9/", site).href}). The through-line has always been the same: knowing what an experience should feel like, and building until it does.

I came up through creative coding (TouchDesigner, Processing, openFrameworks) and taught interactive installation and interaction design at the collegiate level. These days most of my energy goes into building teams of artists and technologists, and making sure the people doing the work have what they need to do it well. **I learned from generous mentors. I try to be one.**
`;

  return markdownResponse(body);
};
