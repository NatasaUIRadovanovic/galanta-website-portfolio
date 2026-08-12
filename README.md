# Galanta Design Studio — Portfolio

Static portfolio site (HTML, CSS, vanilla JavaScript).

**Project folder on your Mac:** `/Users/natasa/Projects/Test_sajt`  
Finder → **Go → Go to Folder…** → paste that path.

**How to update the site:** see [`docs/HOW-TO-UPDATE.md`](docs/HOW-TO-UPDATE.md)

## Quick start

Open `index.html` in your browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```
.
├── index.html              # Home page
├── cases/                  # Case-study pages
│   ├── case-template.html  # Reusable template
│   ├── finance-app.html
│   ├── ecommerce-flow.html
│   └── design-system.html
├── partials/               # Reusable HTML fragments loaded by JS
│   ├── header.html
│   ├── footer.html
│   └── work-grid.html
├── assets/
│   ├── css/
│   │   ├── styles.css      # Global styles
│   │   └── case.css        # Case-study page styles
│   ├── js/
│   │   └── main.js         # Partials loader, mobile menu, year
│   └── images/             # Your project images
├── sw.js                   # Optional service worker for caching
└── docs/
    └── portfolio-plan.md   # Original project plan
```

## Customize content

1. Replace placeholder text in `index.html` (name, headline, bio, email).
2. Replace placeholder images in `assets/images/` and update `src` attributes.
3. Duplicate `cases/case-template.html` for each new project.
4. Update `partials/work-grid.html` to link to your case-study pages.
5. Update `partials/header.html` and `partials/footer.html` if needed.

## Design tokens

Edit CSS custom properties in `assets/css/styles.css`:

- `--color-bg` — page background
- `--color-surface` — section/card background
- `--color-text` — primary text
- `--color-muted` — secondary text
- `--color-accent` — primary accent (currently red)
- `--font-display` — headings font
- `--font-body` — body font

## Deploy

### Vercel

1. Push the project to GitHub.
2. Import the repo in [Vercel](https://vercel.com).
3. Use the default static site settings.

### Netlify

1. Push the project to GitHub.
2. Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop), or connect the repo.
3. Build command can be left empty.

## Case-study writing template

For each project page, fill in these sections:

- **The problem** — what was broken or missing?
- **My role and process** — what did you own? How did you work?
- **The solution** — what did you design?
- **Results and impact** — metrics, testimonials, or qualitative outcomes.
