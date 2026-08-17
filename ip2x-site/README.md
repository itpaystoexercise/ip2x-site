# IP2X — Website

Static marketing site for IP2X. No build step, no dependencies beyond Google Fonts. Everything renders straight from the file system or any static host.

## Structure

```
ip2x-site/
├── index.html              ← Homepage (everyone)
├── partners/
│   └── index.html          ← B2B partners page (insurers, employers, GLP-1 providers)
├── glp1/
│   └── index.html          ← First-cohort landing page for GLP-1 users
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styling. Brand tokens at the top.
│   ├── js/
│   │   └── main.js         ← Nav scroll, FAQ accordions, scroll-reveal
│   ├── img/                ← For founder photos and any future imagery
│   │   └── video-posters/  ← Click-to-play poster frames for the exercise clips
│   └── video/              ← Exercise demo clips (Pep & Pip)
├── README.md
└── .gitignore
```

URLs once deployed:

- `/` — homepage
- `/partners/` — partners page
- `/glp1/` — GLP-1 cohort landing page

## Editing the most common things

**Colours, fonts, spacing** — top of `assets/css/styles.css` under `:root`. Brand tokens lifted directly from Kat's brand kit.

**Copy on the homepage** — `index.html`. Sections are commented (`<!-- HERO -->`, `<!-- HOW IT WORKS -->` etc) so search for the section name.

**Founder details** — search `team-grid` in `index.html`. To swap initial-circles for real photos, replace the `<div class="avatar">XX</div>` with `<img class="avatar" src="assets/img/firstname.jpg" alt="Name">` — the existing CSS will size and shape them correctly.

**FAQs** — search `faq-list` in `index.html`. Each `<div class="faq-item">` is one Q+A.

**Exercise videos** — search `video-grid` in `index.html`. Clips live in `assets/video/`, poster frames in `assets/img/video-posters/`. Videos are click-to-play (`preload="none"`), so adding a clip costs no page weight until someone presses play.

**Partner page copy** — `partners/index.html`. The three audience cards correspond to GLP-1 Providers, Insurers and Employers.

**GLP-1 page copy** — `glp1/index.html`. Worth pressure-testing the muscle-loss statistics with Dr Nic before this goes live.

## Deploying to GitHub Pages

1. Create a public repo (e.g. `ip2x-site`).
2. Upload the contents of this folder (not the folder itself — the files should be at the repo root).
3. **Settings → Pages → Source: Deploy from a branch → Branch: `main`, root.**
4. Wait 1–3 minutes. Your URL will be `https://<username>.github.io/<repo-name>/`.

To update later: edit files in the repo (web UI or git push). Pages re-builds automatically.

## What's a placeholder

- **Founder avatars** are coloured initial circles. Swap for real headshots when available.
- **CTA buttons** all link to `#cta` or `#`. Wire them to a real sign-up flow when one exists.
- **Hero tag "Now accepting first cohort"** — change to "Join the waitlist" if the app isn't live at launch.
- **Partner email** is `partners@ip2x.com` — confirm the inbox exists before publishing.
- **Cambridge / LSE research footer line** — only landlocks once those collaborations are confirmed contractually.
- **Vitality 61% stat** — confirm source before going live with regulators / partners reading.
- **Domain and company number** in the footer assume registration via the entity in the Innovate UK application. Confirm before publishing.

## What's not built yet

- Actual sign-up flow (form, app store links, or waitlist tool).
- Privacy policy and terms pages (links exist, no content).
- A favicon. Anything in `assets/img/favicon.ico` will be picked up automatically; otherwise add a `<link rel="icon">` to each page's `<head>`.
- Analytics — drop in Plausible, Fathom or GA4 in `<head>` of each page when you're ready.
- Open Graph / Twitter card images for nice link previews.

## Notes for whoever extends this

- Pages share `styles.css` and `main.js`. Keep them sharing — duplicating styles per page will rot fast.
- The `.reveal-on-scroll` and `.stagger` classes drive the entrance animations. Add them to any new section to get the same effect for free.
- The `.accent` class is the italic-blue treatment Kat uses in the brand kit. Use sparingly for emphasis in headlines.
- Fonts are Bricolage Grotesque (display), Manrope (body), Newsreader Italic (the accent treatment). All three load from Google Fonts in one request per page.
