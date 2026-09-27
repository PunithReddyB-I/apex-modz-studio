# AGENTS.md

## Project overview

Single-page marketing site for Apex Modz Studio (car accessories & custom painting). Built with
TanStack Start, React 19, and Tailwind CSS 4, deployed on Netlify. There is no backend/API layer —
the only server-side feature is Netlify Forms handling the enquiry form.

## Directory structure

```
src/
  components/
    Header.tsx        # sticky nav, mobile menu
    ContactForm.tsx    # enquiry form, Netlify Forms AJAX submission
    WhatsAppButton.tsx # fixed floating button, links to wa.me
  data/
    business.ts        # name, WhatsApp number, phone, email, address, hours + whatsappLink() helper
    services.ts         # services grid content
    effects.ts           # visual-effects gallery content (name, description, image path)
  routes/
    __root.tsx    # HTML shell, SEO meta, mounts <WhatsAppButton />
    index.tsx     # the entire page: hero, services, effects gallery, why-us, contact, footer
public/
  img/            # generated hero + paint-effect demo images (referenced via Image CDN, never directly)
  __forms.html    # hidden static form matching the enquiry form's fields — required for Netlify
                  # to detect the form at build time since it's rendered client-side by React
```

## Conventions

- Business contact info (WhatsApp number, phone, email, address) is centralized in
  `src/data/business.ts` — never hardcode a phone number or WhatsApp link elsewhere.
- Content sections (`services.ts`, `effects.ts`) are plain data arrays mapped over in
  `routes/index.tsx`; add a new service/effect by adding an entry, not by duplicating JSX.
- Images are referenced through the Netlify Image CDN
  (`/.netlify/images?url=/img/<file>&w=<width>&fm=webp`), not the raw file path, so the browser
  never downloads full-resolution originals.
- Icons come from `lucide-react`; the `icons` map in `routes/index.tsx` maps a service's `icon`
  key to a component.

## Netlify Forms — non-obvious constraint

TanStack Start renders the contact form client-side, so Netlify's build-time HTML scan never sees
it. `public/__forms.html` is a hidden static duplicate of the form's fields that exists solely so
Netlify registers the form name at build time. If you add/remove/rename a field in
`ContactForm.tsx`, update `public/__forms.html` to match, or submissions will be rejected. The
form also posts to `/__forms.html` (not `/`) because in TanStack Start, `fetch('/')` is
intercepted by the SSR handler rather than reaching Netlify's forms middleware.

## Running locally

```bash
npm run dev        # vite dev server only
netlify dev         # full Netlify emulation (Image CDN, Forms) — recommended for testing
```

There is no `PLAN.md` — this project's scope is the single landing page described above and is
considered complete. Future work would mean adding new sections/pages by the same data-driven
pattern already in place.
