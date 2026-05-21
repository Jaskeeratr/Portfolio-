# Jaskeerat Rai Portfolio

A cinematic React/Vite portfolio for software engineering, backend/data, ML, and full-stack internship recruiting.

## Stack

- React + Vite
- React Router
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Three.js + React Three Fiber + Drei
- Custom CSS design system

## Experience Goals

- Recruiter-readable project proof and case-study navigation.
- Cinematic homepage with lazy-loaded 3D hero and project-world scenes.
- Scroll-driven project storytelling with measured outcomes and direct CTAs.
- Responsive, accessible fallbacks for mobile and reduced-motion users.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```text
src/
  components/       Reusable UI, motion, 3D scenes, layout
  data/             Project and site content
  pages/            Route-level pages and case studies
  styles/           Global design system and animation styles
public/
  images/           Project visuals and architecture diagrams
  resume/           Resume PDF
  case-studies/     Case-study PDFs
```

## Performance Notes

- Route pages are code-split with `React.lazy`.
- 3D scenes are lazy-loaded and hidden on small screens/reduced-motion.
- Canvas DPR is capped to keep GPU load reasonable.
- Static SVG/project imagery remains available as fallback content.
