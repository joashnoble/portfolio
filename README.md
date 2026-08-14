# Portfolio — React + Tailwind, hosted free on Cloudflare Pages

No PHP, no server to manage. React (via Vite) is the whole site; a
Cloudflare Pages Function handles the one thing that needs a backend —
sending the contact form email — using Resend's free tier. Everything
here fits on free plans.

## What's in this folder

```
src/main.jsx                        → mounts the React app
src/App.jsx                         → page shell — theme state, scroll/nav logic, assembles the sections
src/data/site.js                    → all your content lives here (profile, projects, skills, timelines, etc.)
src/index.css                       → Tailwind's @tailwind directives

src/components/layout/
  Header.jsx                        → sidebar/top nav, mobile menu, theme toggle
  Footer.jsx                        → footer

src/components/sections/
  Hero.jsx, About.jsx, Skills.jsx   → landing, bio, skill bars
  Experience.jsx, Academic.jsx      → work history and education timelines
  Projects.jsx, Services.jsx        → project cards (open the lightbox) and services offered
  Contact.jsx                       → contact form, posts to CONTACT_ENDPOINT

src/components/common/
  Lightbox.jsx                      → zoomable project image viewer
  Reveal.jsx                        → scroll-in fade/slide wrapper
  SkillBar.jsx                      → animated skill percentage bar
  Timeline.jsx                      → shared timeline UI for Experience/Academic

index.html                          → Vite's HTML entry point
functions/api/contact.js            → Cloudflare Pages Function — handles POST /api/contact
public/images/                      → avatar, project screenshots, technology logos
public/Joash_Noble_..._Resume.pdf   → resume served at RESUME_URL
vite.config.js, tailwind.config.js, postcss.config.js
package.json
```

`src/data/site.js` is the one file you'll edit most — it holds every
piece of content on the site (name/title/tagline, socials, resume path,
contact info, about paragraphs, services, skill levels, projects,
academic/experience timelines, hero tech logos, and nav labels). The
components just render whatever's in there.

`functions/api/contact.js` is the important part: on Cloudflare Pages,
any file under `functions/` automatically becomes a route matching its
path — this file at `functions/api/contact.js` becomes `POST /api/contact`
with zero routing config. The React form already points at `/api/contact`,
so once this is deployed, it just works.

## Part 1 — Get a free Resend account (for sending the email)

Resend is a transactional email API with a genuinely free tier: 3,000
emails/month, 100/day — plenty for a contact form.

1. Sign up at [resend.com](https://resend.com) using **the email address
   you want contact-form messages delivered to**. This matters: without a
   verified custom domain, Resend only lets you send *to the address you
   signed up with* and *from* their shared test address
   (`onboarding@resend.dev`). That's a real limitation for most use cases,
   but it's exactly what a "send me a message" form needs, so it works
   perfectly here for free.
2. In the Resend dashboard, go to **API Keys** → **Create API Key**. Give
   it "Sending access" only (not full access). Copy the key — you'll only
   see it once.

*(Later, if you buy a domain, you can verify it in Resend to send from
your own address instead of `onboarding@resend.dev`, and to any
recipient — not just your own inbox. The function code won't need to
change, just the `from` address in `functions/api/contact.js`.)*

## Part 2 — Deploy to Cloudflare Pages

1. Push this project to a GitHub repository (Cloudflare Pages deploys
   from Git — this is the easiest path, no CLI needed).
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to
   **Compute → Workers & Pages → Create → Pages → Connect to Git**, and
   select your repository.
3. Set the build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - (Framework preset: Vite, if offered)
4. Before your first deploy (or right after, then redeploy), go to your
   project's **Settings → Environment variables** and add, for both
   **Production** and **Preview**:
   - `RESEND_API_KEY` — the key from Part 1 — click **Encrypt** on this one
   - `DESTINATION_EMAIL` — the email address messages should go to (the
     same one you signed up to Resend with)
5. Click **Save and Deploy**. Cloudflare builds and gives you a free
   `your-project.pages.dev` address.

That's it — visit the `.pages.dev` URL, submit the contact form, and the
message should land in your inbox (check spam the first time; mail from
`onboarding@resend.dev` sometimes lands there until you have your own
verified domain).

## Local development

Two workflows, depending on what you're doing:

**Editing content, layout, or images (most of the time)**

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Vite hot-reloads instantly as you edit
`src/data/site.js` or any component in `src/components/` — no rebuild
step. The contact form's `fetch('/api/contact')` will fail in this mode
(there's nothing at that route yet — Vite alone doesn't run Cloudflare
Functions), but everything else — layout, dark mode, scroll animations,
images, the project lightbox — works exactly as it will in production.

**Testing the contact form itself**

The `/api/contact` function only runs under Wrangler (Cloudflare's own
local runtime), not under Vite:

```bash
npm run build
npx wrangler pages dev dist
```

This serves the built site *and* the function together, matching
production. Create a `.dev.vars` file in the project root first (already
gitignored) with:

```
RESEND_API_KEY=your_key_here
DESTINATION_EMAIL=you@example.com
```

Rebuild (`npm run build`) each time you change something under `src/`
before restarting `wrangler pages dev` — this path doesn't hot-reload
the way `npm run dev` does.

## Updating content

Everything on the site — profile info, resume link, socials, contact
details, about copy, services, skill levels, the project list, and the
academic/experience timelines — is already filled in and lives in
`src/data/site.js`. To change something, edit the relevant export
there rather than the components:

- **`RESUME_URL`** — points at the PDF in `public/`.
- **`SOCIALS.github` / `SOCIALS.linkedin`** — profile URLs.
- **`AVATAR_URL`**, **`CONTACT_INFO.email` / `.phone`**.
- **`projects`** — one entry per project card (title, image, tags,
  description, optional `url`); opening a card triggers the lightbox.
- **`skillCategories`** — grouped skills with self-rated percentages.
- **`experienceTimeline`** / **`academicTimeline`** — feed the
  Experience and Academic sections via the shared `Timeline` component.
- **`NAV`** — controls the sidebar/top-nav links and their scroll targets.

To swap a photo or add a new project screenshot, drop the file in
`public/images/` (e.g. `public/images/avatar.jpeg`,
`public/images/projects/your-project.png`) and point the matching
field in `site.js` at `/images/avatar.jpeg` — a leading slash, no
`public` in the path, since Vite serves everything in `public/` from
the site root.

## Notes on what's already wired up

- **Contact form** posts to `/api/contact`, gets validated both in the
  browser and again in the function, and sends a real email via Resend.
  A hidden honeypot field silently drops bot submissions without
  emailing you about them.
- **Dark mode** defaults on load, toggles from the sidebar/top bar.
- **Scroll animations** — sections and cards fade/slide in as they enter
  the viewport.
- **Back-to-top button** — appears after scrolling, bottom-right.
- **Timeline markers, project image lightbox, fully responsive layout**
  — all handled client-side, no backend dependency beyond the contact form.

## A note on the free tier's limits

Cloudflare Pages' free plan includes unlimited requests and 500 builds/month
— generous enough that a personal portfolio won't come close. Resend's
free tier (100 emails/day, 3,000/month) is likewise far more than a
contact form will ever need. Realistically, this setup costs nothing
unless you outgrow "personal portfolio" traffic by a wide margin.
