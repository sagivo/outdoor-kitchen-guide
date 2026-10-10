/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:btu]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 */
import { MODELS, priceTier, type OutdoorProduct } from "../data/models";

const EMBER = "#e8631a";
const STEEL = "#5b7a99";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${note}</p>` : ""}
</figure>`;
}

/** Horizontal bar chart of grill BTU output. */
export function btuChart(models: OutdoorProduct[] = MODELS): string {
  const grills = models.filter((m) => m.category === "grill" && m.totalBtu);
  const max = Math.max(...grills.map((m) => m.totalBtu!));
  const bars = grills
    .sort((a, b) => (b.totalBtu ?? 0) - (a.totalBtu ?? 0))
    .map(
      (m) => `<a class="hbar" href="/grills/${m.id}/" data-tip-value="${m.totalBtu!.toLocaleString("en-US")} BTU total" data-tip-label="${esc(m.shortName)}">
        <span class="hbar-label">${esc(m.shortName)}</span>
        <span class="hbar-track"><span class="hbar-fill" style="width:${((m.totalBtu! / max) * 100).toFixed(1)}%;background:${EMBER}"></span></span>
        <span class="hbar-val">${(m.totalBtu! / 1000).toFixed(0)}k</span>
      </a>`
    )
    .join("");
  return figure(
    "Built-in grill firepower",
    "Total BTU (all burners) — higher means faster preheat and harder searing",
    `<div class="hbars">${bars}</div>`,
    "BTU figures are manufacturer totals. Main-burner output is what you grill on; rear and side burners add to the headline number."
  );
}

/** Horizontal bar chart of pizza oven max temperature. */
export function tempChart(models: OutdoorProduct[] = MODELS): string {
  const ovens = models.filter((m) => m.category === "pizza-oven" && m.maxTempF);
  const max = Math.max(...ovens.map((m) => m.maxTempF!));
  const bars = ovens
    .sort((a, b) => (b.maxTempF ?? 0) - (a.maxTempF ?? 0))
    .map(
      (m) => `<a class="hbar" href="/grills/${m.id}/" data-tip-value="${m.maxTempF}°F max · ${m.pizzaSizeIn}-inch pizzas" data-tip-label="${esc(m.shortName)}">
        <span class="hbar-label">${esc(m.shortName)}</span>
        <span class="hbar-track"><span class="hbar-fill" style="width:${((m.maxTempF! / max) * 100).toFixed(1)}%;background:${STEEL}"></span></span>
        <span class="hbar-val">${m.maxTempF}°F</span>
      </a>`
    )
    .join("");
  return figure(
    "Pizza oven max temperatures",
    "Neapolitan pizza needs ~900°F+; New York style is happy around 700°F",
    `<div class="hbars">${bars}</div>`
  );
}

/** Price-range dot strip across all models. */
export function priceChart(models: OutdoorProduct[] = MODELS): string {
  const min = Math.min(...models.map((m) => m.priceLow));
  const max = Math.max(...models.map((m) => m.priceHigh));
  const x = (p: number) => ((p - min) / (max - min)) * 100;
  const dots = models
    .map(
      (m) => `<a class="sc-dot" href="/grills/${m.id}/" style="left:${x((m.priceLow + m.priceHigh) / 2).toFixed(1)}%" data-tip-value="${priceTier(m).sym} ${priceTier(m).label} · ~$${m.priceLow.toLocaleString("en-US")}–$${m.priceHigh.toLocaleString("en-US")}" data-tip-label="${esc(m.shortName)}" aria-label="${esc(m.shortName)}"><i></i></a>`
    )
    .join("");
  return figure(
    "Street price ranges",
    "Typical US prices, October 2026 — verify on Amazon before buying",
    `<div class="scatter"><div class="sc-axis"><span>$${min.toLocaleString("en-US")}</span><span>$${max.toLocaleString("en-US")}</span></div><div class="sc-plot">${dots}</div></div>`,
    `Hover or tap a dot for details. Full numbers are in the <a href="/grills/">comparison chart</a>.`
  );
}

/** Anatomy diagram: parts of a built-in grill island. */
export function islandDiagram(): string {
  return `<figure class="viz"><figcaption class="viz-head"><strong>Anatomy of a grill island</strong><span>The five pieces every outdoor kitchen needs</span></figcaption>
  <svg viewBox="0 0 400 220" role="img" aria-label="Diagram of a grill island: grill head, countertop, access doors, gas line and ventilation">
    <rect x="40" y="90" width="320" height="100" rx="8" fill="#e8e4da" stroke="#2b2f36" stroke-width="2.5"/>
    <rect x="120" y="60" width="160" height="50" rx="6" fill="#9aa3ad" stroke="#2b2f36" stroke-width="2.5"/>
    <path d="M120 60 Q120 38 200 38 Q280 38 280 60 Z" fill="#c7ccd3" stroke="#2b2f36" stroke-width="2.5"/>
    <rect x="30" y="80" width="340" height="14" rx="4" fill="#c9bfa8" stroke="#2b2f36" stroke-width="2"/>
    <rect x="60" y="120" width="70" height="50" rx="4" fill="#d8d2c2" stroke="#2b2f36" stroke-width="2"/>
    <rect x="270" y="120" width="70" height="50" rx="4" fill="#d8d2c2" stroke="#2b2f36" stroke-width="2"/>
    <line x1="200" y1="110" x2="200" y2="190" stroke="#e8631a" stroke-width="3" stroke-dasharray="6 4"/>
    <text x="200" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#2b2f36">Grill head (drop-in)</text>
    <text x="200" y="208" text-anchor="middle" font-size="12" fill="#2b2f36">Island base · access doors · gas line + ventilation gap</text>
  </svg>
  <p class="viz-note">Leave a ventilation gap around the grill head and never enclose a propane tank without dedicated vents — your installer will thank you.</p></figure>`;
}

export const VISUALS: Record<string, () => string> = {
  "chart:btu": () => btuChart(),
  "chart:temp": () => tempChart(),
  "chart:prices": () => priceChart(),
  "diagram:island": islandDiagram,
};
