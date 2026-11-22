import rawTweets from "../data/rockfacts.json";

export interface RockFact {
  id: string;
  date: string;
  text: string;
  stamp: string;
}

/*
  2009 Twitter stamped tweets like "3:28 PM Apr 16th, 2010" in the
  account's own time zone. The account was run from Kansas City.
 */
const TIME_ZONE = "America/Chicago";

function ordinal(day: number): string {
  if (day % 100 >= 11 && day % 100 <= 13) return `${day}th`;
  return `${day}${["th", "st", "nd", "rd"][day % 10] ?? "th"}`;
}

export function formatStamp(iso: string): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      hour: "numeric",
      minute: "2-digit",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
      .formatToParts(new Date(iso))
      .map((p) => [p.type, p.value]),
  );
  return `${parts.hour}:${parts.minute} ${parts.dayPeriod} ${parts.month} ${ordinal(Number(parts.day))}, ${parts.year}`;
}

export function splitHashtags(
  text: string,
): { value: string; hashtag: boolean }[] {
  return text
    .split(/(#\w+)/)
    .filter(Boolean)
    .map((value) => ({ value, hashtag: /^#\w+$/.test(value) }));
}

/* Newest first, like a timeline. */
export const rockFacts: RockFact[] = rawTweets.map((t) => ({
  ...t,
  stamp: formatStamp(t.date),
}));
