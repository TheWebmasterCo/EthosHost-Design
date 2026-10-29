# EthosHost-Design — Claude Context

Marketing site for **ethoshost.com** + the visual design system for EthosHost /
Ethos Builder. Astro, static output. Product brief: `docs/future/ethoshost-kickoff.md`
in `TheWebmasterCo/EthosHost`.

- Follow the section rules in `README.md` (self-contained sections, typed props as
  settings, design tokens only) — these sections are the seed of Ethos Builder's
  section library.
- Audience is **business owners, not designers**: plain words, no hosting jargon.
- Brand: company **EthosHost**, builder product **Ethos Builder**.
- **Homepage hero = the prompt builder** ("describe your business" box). Behind it,
  anonymous visitors get rules + pooled industry drafts only, never Claude — see
  "AI engine — DECIDED" in the brief.
- **Look: Evergreen is PROVISIONAL** — a working base, not the final brand. Keep the
  brand swappable: colours live only in `src/styles/look.css` (`npm run check`
  enforces it and runs before every build); fonts, spacing and radii also come from
  tokens. A brand change must stay a one-file edit.
- Homepage tells two equal halves: **Build** (AI) and **Run** (the platform: pages,
  content fields, data, leads, add-ons, domains) — plus the hosting promise.
- Pin exact dependency versions. Keep every page `noindex` until launch.
- Interim hosting: Cloudflare Pages (static `dist/`).
