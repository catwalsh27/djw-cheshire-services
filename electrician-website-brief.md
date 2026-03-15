# Electrician Website — Claude Code Project Brief

## Project Overview

Build a mobile-first static website for a sole trader electrician. The client is not technical and will manage the site themselves after handover. The site must be fast, credible, and designed to convert visitors into leads.

---

## Goals

- Attract new enquiries and leads from local customers
- Showcase past work and build credibility
- Allow customers to request quotes and book jobs
- Enable direct contact via phone and form

---

## Target User

- **Client:** Sole trader electrician, single city/town coverage
- **Customers:** Local homeowners and businesses, likely browsing on mobile
- **Admin:** The electrician themselves — non-technical, needs to update content without developer help

---

## Services to Feature

1. Domestic / household electrics
2. Commercial electrical work
3. EV charger installation
4. Rewiring & testing

---

## Pages Required

### 1. Home
- Hero section with headline, subheading, and clear CTA (e.g. "Get a Free Quote")
- Click-to-call button — prominent, visible above the fold on mobile
- Brief intro / trust statement
- Service overview cards (links to Services page)
- Featured testimonials (2–3)
- Coverage area mention

### 2. Services
- One section per service with a short description
- Each section should have a CTA to the contact/quote form

### 3. Past Work / Gallery
- Grid of job photos with short captions
- Simple lightbox or expand on click
- Placeholder images acceptable for initial build — structured so the electrician can swap in real photos

### 4. Testimonials
- Full reviews page
- Star rating visual, customer name, job type
- Structured so new reviews can be added by editing a simple data section

### 5. Contact / Quote Request
- Quote request form: name, phone, email, service type (dropdown), message
- Click-to-call button
- Business hours
- Town/city coverage area

---

## Functional Requirements

| Feature | Requirement |
|---|---|
| Click-to-call | Visible on every page, especially mobile |
| Quote form | Netlify Forms (no backend needed, free tier) |
| Mobile-first | Responsive, fast-loading, thumb-friendly navigation |
| Reviews section | Static, easy to update manually |
| Gallery | Photo grid, swap-friendly for non-technical user |
| Navigation | Simple hamburger menu on mobile |

---

## Design Direction

- **Branding:** Starting from scratch — Claude should propose a palette
- **Suggested palette:** Navy (#1a2e4a) + Amber/Yellow (#f5a623) + White — professional, electrical trade feel
- **Font suggestion:** Inter or Poppins (clean, readable on mobile)
- **Tone:** Trustworthy, local, professional — not corporate
- **No unnecessary animations** — keep it fast and simple

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Plain HTML / CSS / Vanilla JS | Simplest for non-technical owner to maintain |
| Forms | Netlify Forms | Free, no backend, works out of the box |
| Hosting | Netlify (free tier) | Under £10/month budget, easy deploys |
| Domain | Any registrar (e.g. 123-reg, Namecheap) | ~£10–15/year |

> **Alternative:** Astro if Claude prefers a little more structure — still outputs static HTML, stays simple.

---

## Content Maintainability Rules

Claude should build with the non-technical owner in mind:

- All editable text (business name, phone number, services, testimonials) should be clearly marked with comments like `<!-- EDIT: Update phone number here -->`
- Photos should use a predictable naming convention (e.g. `work-1.jpg`, `work-2.jpg`) with instructions in a `README.md`
- Avoid JavaScript frameworks that require a build step to update content
- Form submissions handled by Netlify — no server config needed

---

## Claude Code Prompts — Suggested Build Order

### Step 1 — Scaffold & Design System
```
Build a mobile-first static HTML/CSS website scaffold for a local electrician.
Set up: index.html, services.html, gallery.html, testimonials.html, contact.html.
Create a shared styles.css and nav include.
Use a navy (#1a2e4a) and amber (#f5a623) colour scheme with Inter font from Google Fonts.
Include a responsive hamburger nav and a sticky click-to-call button on mobile.
```

### Step 2 — Home Page
```
Build the homepage (index.html) for the electrician site.
Include: hero with CTA button, service overview cards (4 services), 
3 placeholder testimonials with star ratings, and a footer with phone number and coverage area.
All CTAs should link to contact.html.
```

### Step 3 — Services Page
```
Build services.html covering: Domestic, Commercial, EV Charger Installation, Rewiring & Testing.
Each service gets a section with heading, 2-3 sentence description, and a "Get a Quote" CTA.
```

### Step 4 — Gallery Page
```
Build gallery.html as a responsive photo grid.
Use 8 placeholder images in a 2-col mobile / 3-col desktop layout.
Add a simple lightbox on click.
Name images work-1.jpg through work-8.jpg and add a comment block explaining how to swap them.
```

### Step 5 — Testimonials Page
```
Build testimonials.html with 6 placeholder reviews.
Each review: customer name, star rating (SVG stars), job type, and review text.
Structure the reviews as a simple JS array at the top of the file so the electrician can add new ones easily.
```

### Step 6 — Contact & Quote Form
```
Build contact.html with a Netlify Form for quote requests.
Fields: Name, Phone, Email, Service Type (dropdown with the 4 services), Message.
Add a large click-to-call button above the form.
Include business hours and a "We cover [Town/City]" line.
Configure Netlify Forms with form name="quote-request".
```

### Step 7 — Polish & README
```
Review all pages for mobile responsiveness, consistent spacing, and load speed.
Add HTML comments throughout marking all editable content (phone number, business name, address, photos).
Write a simple README.md explaining: how to update the phone number, how to add a testimonial, how to swap gallery photos, and how to deploy to Netlify.
```

---

## Out of Scope (for now)

- CMS integration (can revisit if electrician finds editing HTML difficult)
- Online payments or job scheduling software
- Blog or SEO content strategy
- Analytics (can add Google Analytics / Plausible later)
- Map embed (can add in Step 7 polish if desired)

---

## Handover Checklist

- [ ] All 5 pages built and mobile tested
- [ ] Netlify Forms working (test submission)
- [ ] Click-to-call button tested on real mobile device
- [ ] All placeholder content clearly marked for swapping
- [ ] README.md written for the client
- [ ] Deployed to Netlify with custom domain connected
- [ ] Client shown how to log into Netlify to view form submissions

---

*Brief version 1.0 — generated March 2026*
