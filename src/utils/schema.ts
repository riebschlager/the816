// JSON-LD builders for structured data (search results, link unfurlers).
import { AUTHOR, SITE_TITLE, SITE_URL, SOCIAL_LINKS } from "../consts";

const PERSON_ID = `${SITE_URL}/#person`;

export function personSchema(image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    url: SITE_URL,
    ...(image && { image }),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: AUTHOR.employer.name,
      url: AUTHOR.employer.url,
    },
    sameAs: SOCIAL_LINKS.filter((link) => link.href.startsWith("http")).map(
      (link) => link.href,
    ),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    url: SITE_URL,
    author: { "@id": PERSON_ID },
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  url: string;
  image?: string;
  pubDate: Date;
  updatedDate?: Date;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.url,
    mainEntityOfPage: post.url,
    ...(post.image && { image: post.image }),
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    ...(post.tags?.length && { keywords: post.tags.join(", ") }),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR.name,
      url: SITE_URL,
    },
  };
}

export function creativeWorkSchema(project: {
  title: string;
  description: string;
  url: string;
  image?: string;
  mediums: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.url,
    ...(project.image && { image: project.image }),
    keywords: project.mediums.join(", "),
    creator: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR.name,
      url: SITE_URL,
    },
  };
}
