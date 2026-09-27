# Apex Modz Studio

Marketing website for Apex Modz Studio, a car accessories and custom painting shop with a
dedicated paint booth and advanced tooling. The site introduces the business, showcases the
services offered, demos a gallery of custom paint visual effects, and collects customer
enquiries — with a floating WhatsApp button for instant chat.

## Key technologies

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) for the app shell and routing
- Tailwind CSS 4 for styling
- Netlify Forms for the enquiry form (no backend code required)
- Netlify Image CDN for on-demand image resizing/format conversion
- Images generated with Gemini ("Nano Banana") via Netlify AI Gateway

## Project structure

- `src/routes/index.tsx` — the single-page site: hero, services, visual effects gallery, why-us, contact
- `src/routes/__root.tsx` — document shell, SEO metadata, mounts the floating WhatsApp button
- `src/components/Header.tsx` — sticky nav header
- `src/components/ContactForm.tsx` — the enquiry form (Netlify Forms, AJAX submit)
- `src/components/WhatsAppButton.tsx` — floating button that opens a WhatsApp chat
- `src/data/business.ts` — business name, WhatsApp number, contact details in one place
- `src/data/services.ts` — services list rendered in the Services section
- `src/data/effects.ts` — visual-effects gallery entries (name, description, image)
- `public/img/` — generated hero and paint-effect demo images
- `public/__forms.html` — static form skeleton required for Netlify to detect the React-rendered form at build time

## Running locally

```bash
npm install
npm run dev
```

Or, to use the full Netlify emulation (image CDN, forms, etc.):

```bash
netlify dev
```

## Updating business details

WhatsApp number, phone, email, address and hours all live in `src/data/business.ts`. Change them
there and every reference across the site (floating button, hero CTA, contact section) updates
automatically.
