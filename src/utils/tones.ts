export const NEON_TONES = ["pink", "cyan", "lime", "orange"] as const;

export type NeonTone = (typeof NEON_TONES)[number];

/** Each project gets a neon from its order, so list rows and detail pages agree. */
export function projectTone(order: number): NeonTone {
  return NEON_TONES[(order - 1) % NEON_TONES.length];
}
