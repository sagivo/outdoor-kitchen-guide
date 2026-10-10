export type Category = "grill" | "pizza-oven";
export type Tier = "budget" | "mid" | "premium";

export const CATEGORY_LABEL: Record<Category, string> = {
  grill: "Built-in gas grill",
  "pizza-oven": "Pizza oven",
};

export interface OutdoorProduct {
  /** URL slug: /grills/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons */
  shortName: string;
  brand: string;
  category: Category;
  tier: Tier;
  releaseYear?: number;
  // --- built-in grill specs ---
  /** main burners (grills) */
  burners?: number;
  /** total BTU incl. all burners (grills) */
  totalBtu?: number;
  /** main cooking area in square inches (grills) */
  cookingAreaSqIn?: number;
  /** fuel options, e.g. "Propane or natural gas" */
  fuel?: string;
  infraredBurner?: boolean;
  rotisserieBurner?: boolean;
  // --- pizza oven specs ---
  /** max temperature in °F (pizza ovens) */
  maxTempF?: number;
  /** max pizza diameter in inches (pizza ovens) */
  pizzaSizeIn?: number;
  /** e.g. "Gas", "Multi-fuel (wood/charcoal/gas)" */
  fuelType?: string;
  weightLb?: number;
  preheatMin?: number;
  // --- common ---
  /** typical US street price range (guidance — prices move weekly) */
  priceLow: number;
  priceHigh: number;
  /** Caveats shown under the spec table */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** One-paragraph verdict */
  verdict: string;
  sources: string[];
}

/**
 * Specs and US street prices as of October 10, 2026, compiled from manufacturer
 * pages and dated retailer listings (see `sources`). Treat as guidance —
 * prices move weekly; verify before buying.
 */
export const MODELS: OutdoorProduct[] = [
  {
    id: "napoleon-prestige-500-built-in",
    name: "Napoleon Prestige 500 Built-In",
    shortName: "Prestige 500 BI",
    brand: "Napoleon",
    category: "grill",
    tier: "premium",
    burners: 4,
    totalBtu: 76000,
    cookingAreaSqIn: 760,
    fuel: "Propane or natural gas",
    infraredBurner: true,
    rotisserieBurner: true,
    priceLow: 2299,
    priceHigh: 2799,
    specNotes: [
      "BTU figure includes the rear infrared rotisserie burner; main burners alone are lower.",
      "Sold in separate propane and natural gas versions — confirm fuel type before ordering.",
    ],
    query: "Napoleon Prestige 500 built-in gas grill",
    bestFor: "The serious home griller who wants rotisserie and searing in one built-in head.",
    pros: [
      "Infrared rear rotisserie burner for slow-roasted meats",
      "Thick 9mm stainless cooking grids hold heat well and are nearly maintenance-free",
      "Integrated trim ring is designed for a clean drop-in install",
    ],
    cons: [
      "Premium price for a 32-inch head — you pay for the Napoleon badge",
      "Needs a sizable island cutout; measure twice",
    ],
    verdict:
      "The Prestige 500 Built-In is the safe premium pick: four strong main burners, a real infrared rear burner for rotisserie, and Napoleon's drop-in trim that makes the island cutout forgiving. It costs more than a Blaze or Bull of similar size, but the cooking grids and warranty support justify it for buyers who grill weekly.",
    sources: [
      "https://www.napoleon.com",
      "https://www.bbqguys.com/a/23317/top-rated/bbq/gas-grills/built-in",
    ],
  },
  {
    id: "blaze-premium-lte-32",
    name: "Blaze Premium LTE 32-Inch Built-In",
    shortName: "Premium LTE 32",
    brand: "Blaze",
    category: "grill",
    tier: "premium",
    burners: 4,
    totalBtu: 60000,
    cookingAreaSqIn: 915,
    fuel: "Propane or natural gas",
    infraredBurner: false,
    rotisserieBurner: false,
    priceLow: 2699,
    priceHigh: 3199,
    specNotes: [
      "Cooking area figure is Blaze's published total including warming rack zone.",
      "Lifetime warranty covers the grill body; wear parts have shorter terms.",
    ],
    query: "Blaze Premium LTE 32 built-in gas grill",
    bestFor: "Outdoor-kitchen builders who want a grill engineered for permanent installation.",
    pros: [
      "Best-in-class lifetime warranty on the grill body",
      "Heat zone separators let you run different techniques side by side",
      "Double-lined hood holds heat and shrugs off weather",
    ],
    cons: [
      "No infrared or rotisserie burner at this price — searing is direct-heat only",
      "Heavy; plan the island structure and get help setting it",
    ],
    verdict:
      "Blaze builds grills for the hole in your countertop, not the patio, and the Premium LTE 32 shows it: 304 stainless throughout, zone separators, and a lifetime body warranty no rival matches. You give up infrared searing and rotisserie, but for a permanent install that has to survive a decade of weather, it is the rational pick.",
    sources: [
      "https://www.bbqguys.com/a/23317/top-rated/bbq/gas-grills/built-in",
      "https://www.barbecuemen.com/best-gas-grill-brands/",
    ],
  },
  {
    id: "bull-outlaw-30",
    name: "Bull Outlaw 30-Inch Built-In",
    shortName: "Outlaw 30",
    brand: "Bull",
    category: "grill",
    tier: "premium",
    burners: 4,
    totalBtu: 60000,
    cookingAreaSqIn: 810,
    fuel: "Propane or natural gas",
    infraredBurner: false,
    rotisserieBurner: true,
    priceLow: 2299,
    priceHigh: 2699,
    specNotes: ["Rotisserie kit with rear burner is included on most Outlaw configurations."],
    query: "Bull Outlaw 30 built-in gas grill",
    bestFor: "Value-focused builders who want 30 inches of 304 stainless without the Blaze premium.",
    pros: [
      "Solid 304 stainless construction at a lower price than Blaze or Napoleon",
      "Rear infrared rotisserie burner included",
      "Dual-lined hood for heat retention",
    ],
    cons: [
      "Fit and finish a half-step below the top tier",
      "Fewer premium touches (no interior lighting on base config)",
    ],
    verdict:
      "The Outlaw is the value play in premium built-ins: four 15,000 BTU burners, 810 square inches, and a rear infrared rotisserie burner for less than the big names. If your budget has to stretch to cover the island and countertop too, this is where the savings should come from.",
    sources: [
      "https://hotfoodoven.com/best-gas-grill-for-deck/",
      "https://www.bbqguys.com/a/23317/top-rated/bbq/gas-grills/built-in",
    ],
  },
  {
    id: "coyote-s-series-30",
    name: "Coyote S-Series 30-Inch Built-In",
    shortName: "S-Series 30",
    brand: "Coyote",
    category: "grill",
    tier: "mid",
    burners: 3,
    totalBtu: 60000,
    cookingAreaSqIn: 700,
    fuel: "Propane or natural gas",
    infraredBurner: false,
    rotisserieBurner: false,
    priceLow: 1899,
    priceHigh: 2299,
    specNotes: ["Infinity burners are rated to 20,000 BTU each on high."],
    query: "Coyote S-Series 30 built-in gas grill",
    bestFor: "Mid-budget builds that still want 304 stainless and interior lighting.",
    pros: [
      "Interior grill lighting and LED-lit knobs at a mid-range price",
      "Ceramic briquettes even out heat across the grates",
      "Compact 30-inch footprint fits smaller islands",
    ],
    cons: [
      "Three burners means less zoning flexibility than four-burner rivals",
      "No infrared or rotisserie option",
    ],
    verdict:
      "Coyote's S-Series brings premium touches — interior lighting, ceramic heat tents, full 304 stainless — down to a mid-range price. Three burners limit multi-zone cooking, but for a family that grills burgers, chicken, and veggies rather than running a steakhouse, it is plenty.",
    sources: [
      "https://hotfoodoven.com/best-gas-grill-for-deck/",
      "https://aluxurylifestyle.com/vetted/best-high-end-bbq-grills/",
    ],
  },
  {
    id: "lion-l75000-32",
    name: "Lion Premium L75000 32-Inch Built-In",
    shortName: "L75000 32",
    brand: "Lion",
    category: "grill",
    tier: "premium",
    burners: 4,
    totalBtu: 90000,
    cookingAreaSqIn: 830,
    fuel: "Propane or natural gas",
    infraredBurner: false,
    rotisserieBurner: true,
    priceLow: 2499,
    priceHigh: 2999,
    specNotes: [
      "90,000 BTU is the all-burner total including rear infrared burner; main grilling burners are 60,000 BTU.",
    ],
    query: "Lion L75000 32 built-in gas grill",
    bestFor: "Maximum firepower per dollar in a 32-inch cutout.",
    pros: [
      "Highest total BTU rating in its class — serious searing headroom",
      "Cast stainless burners and 830 sq in of cooking space",
      "Rear infrared rotisserie burner included",
    ],
    cons: [
      "Brand support network is smaller than Napoleon or Blaze",
      "Big BTU number needs a properly sized gas line — check with your installer",
    ],
    verdict:
      "Lion's headline is raw output: 90,000 BTU all-in makes the L75000 the hottest 32-inch head here. The main burners are a conventional 60,000 BTU, so treat the big number as searing and rotisserie headroom. For buyers who want the most grill for the money and have a good installer, it is hard to beat.",
    sources: [
      "https://aluxurylifestyle.com/vetted/best-high-end-bbq-grills/",
      "https://angelnumberwisdom.com/vetted/best-highend-outdoor-grills/",
    ],
  },
  {
    id: "ooni-koda-16",
    name: "Ooni Koda 16 Gas Pizza Oven",
    shortName: "Koda 16",
    brand: "Ooni",
    category: "pizza-oven",
    tier: "mid",
    maxTempF: 950,
    pizzaSizeIn: 16,
    fuelType: "Gas (propane)",
    weightLb: 40,
    preheatMin: 20,
    priceLow: 549,
    priceHigh: 599,
    query: "Ooni Koda 16 gas pizza oven",
    bestFor: "First pizza oven: 16-inch pies with push-button gas convenience.",
    pros: [
      "16-inch cooking area — half the launches of a 12-inch oven when feeding a crowd",
      "Heats to 950°F in about 20 minutes on propane",
      "L-shaped flame design spreads heat more evenly than early Koda models",
    ],
    cons: ["Gas only — no wood-fired flavor option", "At 40 lb it is portable, not packable"],
    verdict:
      "The Koda 16 is the default recommendation for a reason: real 16-inch Neapolitan pizzas, 950°F, zero fire management. If you want wood smoke, look at the Karu line instead — but for weeknight pizza with a 60-second bake, gas wins on convenience and this is the gas oven to beat.",
    sources: [
      "https://pizzaovenworld.com/best-outdoor-gas-pizza-ovens-to-elevate-your-bbq/",
      "https://ditmasparkcorner.com/best-outdoor-pizza-ovens/",
    ],
  },
  {
    id: "gozney-roccbox",
    name: "Gozney Roccbox Pizza Oven",
    shortName: "Roccbox",
    brand: "Gozney",
    category: "pizza-oven",
    tier: "mid",
    maxTempF: 950,
    pizzaSizeIn: 12,
    fuelType: "Gas (wood burner optional add-on)",
    weightLb: 44,
    preheatMin: 20,
    priceLow: 499,
    priceHigh: 549,
    specNotes: ["Wood burner is a separate accessory, not included in the base price."],
    query: "Gozney Roccbox pizza oven",
    bestFor: "Restaurant-grade 12-inch Neapolitan pizza with the best heat retention in its class.",
    pros: [
      "Patented baffle creates a rolling flame for unusually even heat",
      "Safe-touch silicone jacket — the exterior will not burn you mid-bake",
      "Holds heat between bakes better than most portable ovens",
    ],
    cons: ["12-inch limit — no 16-inch pies", "Wood burner costs extra; no temperature display"],
    verdict:
      "The Roccbox is the oven that reset expectations for portable pizza: 950°F, a 60-second Margherita, and heat retention that keeps up with back-to-back bakes at a party. The 12-inch ceiling is the only real compromise. For couples and small families, nothing at this price cooks better.",
    sources: [
      "https://pizzaovenworld.com/best-outdoor-gas-pizza-ovens-to-elevate-your-bbq/",
      "https://www.thirstybear.com/best-pizza-ovens-for-backyard-parties/",
    ],
  },
  {
    id: "ooni-karu-12",
    name: "Ooni Karu 12 Multi-Fuel Pizza Oven",
    shortName: "Karu 12",
    brand: "Ooni",
    category: "pizza-oven",
    tier: "budget",
    maxTempF: 950,
    pizzaSizeIn: 12,
    fuelType: "Multi-fuel (wood/charcoal; gas burner optional)",
    weightLb: 26.4,
    preheatMin: 15,
    priceLow: 379,
    priceHigh: 449,
    specNotes: ["Gas burner attachment is sold separately."],
    query: "Ooni Karu 12 multi fuel pizza oven",
    bestFor: "Wood-fired flavor on a budget, with the option to add gas later.",
    pros: [
      "Real wood and charcoal fire at the lowest entry price in the category",
      "Lightest oven here at 26.4 lb — genuinely portable",
      "Optional gas burner gives you both worlds",
    ],
    cons: ["Fire management has a learning curve; first bakes can scorch", "12-inch pizzas only"],
    verdict:
      "The Karu 12 is the cheapest ticket to real wood-fired pizza: 950°F on wood or charcoal, folding legs, and under 27 pounds. You will burn a few crusts learning fire control, but that is the tuition for flavor gas cannot fake. Add the gas burner later if weeknight convenience wins.",
    sources: [
      "https://ditmasparkcorner.com/best-outdoor-pizza-ovens/",
      "https://grillingdude.com/best-outdoor-pizza-ovens-2/",
    ],
  },
  {
    id: "gozney-dome-s1",
    name: "Gozney Dome S1 Pizza Oven",
    shortName: "Dome S1",
    brand: "Gozney",
    category: "pizza-oven",
    tier: "premium",
    maxTempF: 950,
    pizzaSizeIn: 16,
    fuelType: "Gas (propane)",
    weightLb: 58,
    preheatMin: 25,
    priceLow: 1399,
    priceHigh: 1599,
    specNotes: ["Dome S1 is the streamlined gas-only sibling of the dual-fuel Gozney Dome."],
    query: "Gozney Dome S1 pizza oven",
    bestFor: "The centerpiece oven: 16-inch pizzas with Gozney's best heat management.",
    pros: [
      "Huge 16-inch deck with professional-grade heat distribution",
      "Precision gas control — dial in Neapolitan or New York temps",
      "Built like a permanent outdoor-kitchen appliance",
    ],
    cons: ["Gas only — the dual-fuel Dome costs more still", "58 lb and bulky; this one lives where you put it"],
    verdict:
      "The Dome S1 is what you buy when the pizza oven is the point of the outdoor kitchen. It keeps everything that made the original Dome great — the rolling flame, the stone mass, the precise control — in a gas-only package that costs meaningfully less than the dual-fuel flagship. Expensive, but it cooks like it.",
    sources: [
      "https://pizzaovenworld.com/best-outdoor-gas-pizza-ovens-to-elevate-your-bbq/",
      "https://www.MensJournal.com/gear/best-pizza-ovens",
    ],
  },
  {
    id: "solo-stove-pi-prime",
    name: "Solo Stove Pi Prime Pizza Oven",
    shortName: "Pi Prime",
    brand: "Solo Stove",
    category: "pizza-oven",
    tier: "budget",
    maxTempF: 950,
    pizzaSizeIn: 12,
    fuelType: "Gas (propane)",
    weightLb: 30,
    preheatMin: 15,
    priceLow: 329,
    priceHigh: 379,
    query: "Solo Stove Pi Prime pizza oven",
    bestFor: "The cheapest easy entry into 950°F pizza.",
    pros: [
      "Lowest price for a true 950°F gas oven",
      "Demi-dome design preheats fast and sips propane",
      "Simple — no assembly puzzles, no accessories required",
    ],
    cons: ["12-inch limit and a smaller opening than Ooni/Gozney rivals", "Fewer accessories in the Solo Stove ecosystem"],
    verdict:
      "The Pi Prime undercuts every big-name gas oven while still hitting 950°F. You trade opening size and brand ecosystem for the lowest price of entry. For renters, small patios, or anyone unsure pizza-oven life is for them, it is the low-risk way to find out.",
    sources: [
      "https://ditmasparkcorner.com/best-outdoor-pizza-ovens/",
      "https://grillingdude.com/best-outdoor-pizza-ovens-2/",
    ],
  },
];

export function getModel(id: string): OutdoorProduct {
  const m = MODELS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown model id "${id}"`);
  return m;
}

export const PRICE_TIERS = [
  { level: 1, sym: "$", label: "Budget", range: "under $750" },
  { level: 2, sym: "$$", label: "Mid-range", range: "$750–$1,500" },
  { level: 3, sym: "$$$", label: "Premium", range: "$1,500–$3,000" },
  { level: 4, sym: "$$$$", label: "Flagship", range: "over $3,000" },
] as const;
export type PriceTier = (typeof PRICE_TIERS)[number];

export function priceTierOf(price: number): PriceTier {
  return PRICE_TIERS[price < 750 ? 0 : price < 1500 ? 1 : price < 3000 ? 2 : 3];
}

export function priceTier(m: OutdoorProduct): PriceTier {
  return priceTierOf(m.priceLow);
}

/** One-line spec summary for cards and tables. */
export function specSummary(m: OutdoorProduct): string {
  if (m.category === "grill") {
    return `${m.burners} burners · ${m.totalBtu?.toLocaleString("en-US")} BTU · ${m.cookingAreaSqIn} sq in`;
  }
  return `${m.maxTempF}°F max · ${m.pizzaSizeIn}" pizzas · ${m.fuelType}`;
}
