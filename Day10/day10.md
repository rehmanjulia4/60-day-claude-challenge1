# Day 10 — Claude Artifacts: Personal Portfolio Website

## Deliverable

Built a complete, premium single-file personal portfolio website for Dr. Julia Rehman using HTML, CSS custom properties, and vanilla JavaScript. No build step, no framework, no external dependencies beyond Google Fonts.

## Files in This Folder

| File | Description |
|------|-------------|
| `index.html` | Complete portfolio website, single HTML file |
| `carousel.html` | LinkedIn carousel (6 slides for screenshotting) |
| `portfolio-home.png` | Desktop hero section screenshot |
| `portfolio-projects.png` | Projects section screenshot |
| `portfolio-mobile.png` | Mobile responsive view screenshot |
| `day10.md` | This file |

## Design Approach

The ChatGPT-generated version used Tailwind CDN with a dark/light glassmorphism treatment. The design was functional but templated: teal gradient text, floating blobs, card-based layout common across hundreds of portfolios.

This version takes a different approach:

**Editorial aesthetic.** Inspired by high-end print design. Ink-on-paper light mode, deep-dark night mode. Syne (display, 800 weight) paired with DM Sans (body, 300 weight) creates a tension between editorial weight and contemporary readability.

**Structural decisions:**
- Split-screen hero: content on the left, full-bleed photo on the right with a dark overlay and inline metadata. The photo is embedded as base64 so the file is fully self-contained.
- Dark expertise section breaks the light/dark rhythm deliberately, creating visual separation between positioning content and detailed content.
- Timeline for experience uses a two-column grid: period/org on the left, role/summary on the right. Reads like an annual report, not a resume template.
- Grid-of-1px-gaps technique for the expertise and leadership sections creates a mosaic effect without borders cluttering the design.

**Signature element:** The hero-right panel. Most portfolio templates show a round headshot in a card. This version uses the photo as the full canvas for the right column, with a gradient overlay and inline credential tags — the photo becomes executive context rather than decoration.

## Key Features

- Premium editorial design: Syne display + DM Sans body, ink-on-paper palette
- Dark/light mode toggle with localStorage persistence
- Typing animation cycling through 5 executive title phrases
- Profile photo embedded as base64 (truly standalone, no external assets)
- Smooth scroll reveal using IntersectionObserver
- Active navigation link highlighting on scroll
- Mobile responsive with hamburger menu
- Split-screen hero, grid expertise section, timeline experience, project cards, mosaic leadership grid
- SEO meta tags and Open Graph metadata
- Contact section targeting VP, CDO, CITO, COO-adjacent US and GCC roles
- Zero JavaScript dependencies

## What I Learned

A portfolio built around personal brand is fundamentally different from a portfolio built around a job description.

**Lesson 1: Structure is positioning.**
Where you put content tells the reader what to value. Leading with "18+ years across four countries" followed by a split-screen photo and credential tags communicates executive gravitas before anyone reads a single bullet point.

**Lesson 2: A portfolio's job is to answer one question fast.**
For me, that question is: *can this person connect healthcare data, AI, and operations into decisions that health systems and boards can act on?* Every section of this site is designed to answer that question from a different angle.

**Lesson 3: AI fluency is itself a credential.**
Completing this in a single AI-assisted session and publishing it publicly is part of the point. The 60-Day Claude Challenge is not a coding exercise. It is a demonstration that an executive can use AI as a build partner for real deliverables.

**Lesson 4: Generic design erases differentiation.**
The fastest way to look like everyone else is to use the same Tailwind card template. Opinionated typography, a real color rationale, and structural decisions grounded in the subject create a site that actually looks like the person it represents.

## Portfolio Positioning

The site is designed around three parallel positioning tracks:

**Clinician and patient advocacy:** Every section anchors the work to its purpose. The portfolio explicitly frames data governance, AI, and analytics as tools that exist to give clinicians better decisions and patients safer, more equitable care. This directly supports Executive Director and association leadership positioning, including healthcare professional society roles where advocacy and member service are the organizational center.

**GCC track:** Healthcare AI governance, regulatory analytics, government health authority experience, MENA professional leadership (ACHE VP, ACHDM International Chair, DIGIHEALTH Lab, ACAIM)

**US track:** VP, Executive Director, CDO, and COO-adjacent leadership, enterprise analytics, clinical informatics, EHR optimization, integrated delivery system experience (UCHealth, Presbyterian Healthcare Services, IQVIA)

The contact section explicitly names target roles, the clinician and patient focus, and geographies to signal readiness to recruiting and association leadership audiences.

## Optional Deployment

Deploy by uploading the `index.html` file directly to:
- **Vercel:** Drag and drop in the Vercel dashboard
- **Netlify:** Drop file into Netlify Drop (drop.netlify.com)
- **GitHub Pages:** Push to a repo and enable Pages in settings

```bash
mkdir Day10
cp index.html Day10/
cp carousel.html Day10/
cp portfolio-home.png Day10/
cp portfolio-projects.png Day10/
cp portfolio-mobile.png Day10/
cp day10.md Day10/

git add Day10
git commit -m "Add Day 10 personal portfolio website"
git push
```

## Screenshots

### Homepage / Hero
![Homepage Screenshot](portfolio-home.png)

### Projects Section
![Projects Screenshot](portfolio-projects.png)

### Mobile View
![Mobile Screenshot](portfolio-mobile.png)

## LinkedIn Post

Day 10 of 60: I built a personal portfolio website with AI.

Not because I needed a website.

Because building it forced me to answer a harder question: what is my actual executive narrative?

Here's what I learned.

A resume lists what you've done.
A portfolio answers what you make possible.

For 18+ years I've been at the intersection of healthcare operations, enterprise analytics, and now AI governance. The work connects data, governance, execution, and clinical reality into decisions health systems and boards can actually act on.

That's not a role title. That's a positioning statement. And I couldn't see it clearly until I had to put it on a page.

What I built: a single HTML file. No framework. No build step. Syne + DM Sans editorial typography, split-screen hero with embedded photo, dark/light mode, typing animation, scroll reveal, six content sections. Entirely AI-generated.

The bigger lesson: context engineering produces dramatically better AI outputs than a generic prompt. I didn't ask Claude to "make me a portfolio." I gave it my career narrative, my target audiences, my positioning goals, and specific design direction. The difference is substantial.

Day 10 done. 50 to go.

@Anthropic @ABTalksOnAI @AnilBajpai

#60DayClaudeChallenge #HealthcareAI #HealthData #DigitalHealth #HealthcareLeadership #AIInHealthcare #PersonalBranding #ExecutivePresence
