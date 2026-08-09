import type { APIRoute } from "astro";
import { CONTACT_EMAIL } from "../../consts";
import { markdownResponse } from "../../utils/llms";

// Keep this in sync with the copy in src/pages/about.astro.
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The site URL must be configured to generate Markdown");
  }

  const body = `# About Chris Riebschlager

> Career history, teaching experience, and the work experiences that shaped Chris Riebschlager.

Canonical page: ${new URL("/about/", site).href}

I never know what to say when people ask me what I do. Maybe we could start with what I've done so far.

## The Work Experiences that Shaped Me

### River City Studio (2000)

My first job out of college was at River City Studio, where I worked as a web developer. I learned to code before LLMs were a thing. Even before Stack Overflow was a thing. Yes, I am old.

### Bernstein-Rein (2006)

I'm still in touch with many of the ridiculously talented people I worked with at BR. Being on this team was like playing for the Chicago Bulls in 1995. It was truly a dream team and I learned **so much** from this group.

### RKO Workshop (2011)

My friends John and Tim and I started RKO Workshop to create interactive installations for clients like the Nelson-Atkins Museum of Art. This is when I fell in love with applying technology to the built space.

### Barkley (2012)

I worked at Moonshot, the innovation lab at Barkley and my actual job title was "Inventor". We made so many fun prototypes, like a "mind-controlled" slot car track, a vending machine that dispensed drinks in exchange for social likes, and an interactive portrait creation tool we brought to SXSW and TEDxAustin.

### Kansas City Art Institute (2018)

I was invited to teach two classes at KCAI, one on creative coding and one on interactive installations. Teaching was massively rewarding and insanely difficult. This gig enshrined the respect I have for educators.

### Dimensional Innovations (2015)

I joined DI as the first on-staff software developer. Within a couple months of starting, I was already on site at an MLB stadium, installing my first large-scale interactive games. Over the last decade (plus), I've helped build this team into what I now lead as the Director of Creative Technology.

---

**Want to see what we've built? Check out my [projects](${new URL("/projects/", site).href}).**

**Want to get in touch? Email me at [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}).**
`;

  return markdownResponse(body);
};
