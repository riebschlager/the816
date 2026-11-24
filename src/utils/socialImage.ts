import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import DefaultSocialImage from "../assets/site-og-image.jpg";
import { SITE_URL } from "../consts";

// 1.91:1 renders well as a large card on Facebook, LinkedIn, X, Slack and
// iMessage, and a q82 JPEG at this size stays far under every file-size cap.
const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 630;
// Below this, Facebook and LinkedIn fall back to a small thumbnail card.
const MIN_WIDTH = 600;

export interface SocialImage {
  url: string;
  width: number;
  height: number;
}

/**
 * Crops an image to a 1.91:1 share-card JPEG. Astro never upscales, so
 * smaller sources get the largest 1.91:1 crop they can fill, and the
 * returned dimensions are the real ones (for og:image:width/height).
 */
export async function getSocialImage(
  image: ImageMetadata = DefaultSocialImage,
): Promise<SocialImage> {
  const width = Math.min(
    TARGET_WIDTH,
    image.width,
    Math.floor((image.height * TARGET_WIDTH) / TARGET_HEIGHT),
  );
  const height = Math.round((width * TARGET_HEIGHT) / TARGET_WIDTH);

  if (width < MIN_WIDTH) {
    throw new Error(
      `Share image ${image.src} only yields a ${width}x${height} card (min ${MIN_WIDTH}px wide). ` +
        `Add a larger socialImage in frontmatter.`,
    );
  }

  const result = await getImage({
    src: image,
    width,
    height,
    fit: "cover",
    format: "jpg",
    quality: 82,
  });
  return { url: new URL(result.src, SITE_URL).href, width, height };
}

export async function getSocialImageURL(image?: ImageMetadata) {
  return (await getSocialImage(image)).url;
}
