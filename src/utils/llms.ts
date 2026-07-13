const iframePattern =
  /<div class="video-embed">\s*<iframe[^>]+src="([^"]+)"[^>]*>\s*<\/iframe>\s*<\/div>/g;
const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;

export function cleanMarkdownForLlms(
  source: string,
  site: URL,
  pagePath: string,
) {
  const pageUrl = new URL(pagePath, site).href;

  return source
    .replace(iframePattern, (_match, src: string) => {
      const videoUrl = new URL(src, site).href;
      return `[Embedded video](${videoUrl})`;
    })
    .replace(imagePattern, (_match, alt: string, src: string) => {
      if (src.startsWith("./")) {
        return `[Image: ${alt || "View image"}](${pageUrl})`;
      }

      return `![${alt}](${new URL(src, site).href})`;
    })
    .trim();
}
