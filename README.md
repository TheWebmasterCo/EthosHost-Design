# EthosHost — marketing site & design system

The website for **ethoshost.com**, and the place where EthosHost's visual design
is worked out. Built with [Astro](https://astro.build), the same stack Ethos
Builder will output.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## How this repo is organised

| Path | What it is |
|---|---|
| `src/styles/look.css` | The **look**: design tokens (colour, type, spacing). Sections only use these variables. |
| `src/sections/` | One file per **section** (hero, pricing, FAQ, …). Each section's `Props` are its settings. |
| `src/layouts/` | Page shell (head, meta). |
| `src/pages/` | Pages, composed from sections. Pages contain no styling of their own. |

## The rule that matters

This site is hand-built for now, but every section is shaped like an Ethos Builder
section so it can move into the builder's section library later:

- **Self-contained:** a section never depends on another section or a page.
- **Settings, not overrides:** anything that varies is a typed prop
  (`align: 'left' | 'center'`), never ad-hoc CSS passed in.
- **Tokens only:** no hard-coded colours, fonts or spacing in a section — use the
  variables from the look.

When Ethos Builder works, this site is rebuilt *through* the builder and moved onto
EthosHost's own platform ("this whole site was built by talking to EthosHost").

Until launch, every page is `noindex`.
