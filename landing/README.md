# ZeroClaw landing page

Performant, SEO-optimized landing page for ZeroClaw. Static HTML/CSS/JS — no build step. Dark mode with brand colors (electric blue + silver).

## Contents

- **index.html** — Single-page layout: hero (with logo), star-CTA, features, use cases, tutorials gallery, ideas board (from JSON), contribution guidelines, footer. Mobile nav toggle.
- **styles.css** — Brand theme (electric blue accent, silver/grey text, dark background); CSS variables; mobile-first responsive; touch-friendly tap targets.
- **main.js** — Loads `ideas.json` and renders the ideas board with category filter.
- **ideas.json** — Ideas by category (SaaS, IoT, Legal, Hackathon, Tools, Content). Edit to add or reorder ideas.
- **assets/logo.png** — ZeroClaw logo (armored crab, electric blue glow). Used in header and hero.

## Links

- GitHub: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- X (Twitter): [@zeroclawlabs](https://x.com/zeroclawlabs)

## Serve locally

From repo root:

```bash
# Python
python3 -m http.server 8080 --directory landing

# Or open index.html in a browser (fetch for ideas.json may fail on file://)
```

For GitHub Pages, configure the site to use the `landing` folder as the source, or copy the landing files to the root of the Pages branch.

## SEO

- Title, meta description, keywords, canonical URL.
- Open Graph and Twitter card meta tags.
- JSON-LD `SoftwareApplication` schema.
- Semantic headings (h1, h2), skip link, aria where needed.
