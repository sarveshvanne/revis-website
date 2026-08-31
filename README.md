# Revi's Group Tuitions — Website

A Next.js website for Revi's Group Tuitions (Kalyan, West), built with Tailwind CSS.

## Pages
- `/` — Home
- `/about` — About Us
- `/classes` — Classes V–X
- `/teaching-approach` — Teaching Approach (with sample timetable)
- `/results` — SSC Results (by year)
- `/gallery` — Photo Gallery
- `/admissions` — Admissions (enquiry form → opens WhatsApp with details)
- `/contact` — Contact (with map)

## Run locally
```
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel (recommended)
1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in, click "Add New Project", import the repo.
3. Framework preset: Next.js (auto-detected). Click Deploy.
4. Once deployed, go to Project Settings → Domains, add `www.revisgrouptutions.com`
   and `revisgrouptutions.com`.
5. In Hostinger's DNS settings for the domain, add the DNS records Vercel shows you
   (usually a CNAME for www, and an A record for the root domain).
6. Wait a few hours for DNS to propagate — the site will then be live on your domain.

## Editing content
- Colors/fonts: `lib/theme.js`
- Toppers/results: `app/results/page.js`
- Contact info, phone numbers: search for "9321016779" across files
- Images: `public/images/` (logo.jpg, family.jpg, storefront.jpg, balloon.jpg)
- WhatsApp number used in buttons/form: `919321016779` (search to update)

## Notes
- The enquiry form on /admissions opens WhatsApp with the filled details pre-written
  (no backend needed). If you'd prefer it to email you instead, let your developer know.
- Fonts (Fraunces + Inter) load via next/font/google — this requires internet access
  during `npm run build`, which Vercel provides automatically.
