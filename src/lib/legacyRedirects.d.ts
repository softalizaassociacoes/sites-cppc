export interface LegacyRedirectPair {
  source: string;
  destination: string;
}

export interface LegacyRedirect extends LegacyRedirectPair {
  permanent: true;
}

export function legacyPostPath(post: { slug: string; date: string }): string;
export function legacyRedirectPairs(): LegacyRedirectPair[];
export function legacyRedirects(): LegacyRedirect[];
