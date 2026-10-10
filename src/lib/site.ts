// Central site config. Domain: outdoor-kitchen-guide.pages.dev
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "Outdoor Kitchen Guide";
export const SITE_URL = "https://outdoor-kitchen-guide.pages.dev";
export const SITE_TAGLINE = "Built-in gas grill and pizza oven guides, comparisons, and cost calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to built-in gas grills and outdoor pizza ovens: model comparisons, cost-to-build calculators, grill sizing tools, and fuel comparisons so you buy the right gear the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/best-built-in-gas-grills-2026/", label: "Best Grills" },
  { href: "/posts/best-pizza-ovens-2026/", label: "Best Pizza Ovens" },
  { href: "/grills/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
