# Galanta Portfolio — How to Update

This site is a **static website** (HTML + CSS + JavaScript). No app server, no WordPress, no build step.

**Format of this guide:** Markdown (`.md`) — a plain text file that opens in Cursor, TextEdit, GitHub, and any browser. You do **not** need Word (.docx) for the project itself. If you want a printable copy later, open this file in Cursor and export or copy into Google Docs / Word once.

---

## Where is the project folder?

**Full path on your Mac:**

```
/Users/natasa/Projects/Test_sajt
```

**Open in Finder:**

1. Open **Finder**
2. Menu **Go → Go to Folder…** (or press **Cmd + Shift + G**)
3. Paste: `/Users/natasa/Projects/Test_sajt`
4. Press **Return**

You should see: `index.html`, folders `cases/`, `partials/`, `assets/`, `docs/`.

**Open in Cursor:** File → Open Folder → choose `Test_sajt` inside `Projects`.

---

## Preview before publishing

In Terminal:

```bash
cd /Users/natasa/Projects/Test_sajt
python3 -m http.server 8000
```

Open in browser: **http://localhost:8000**

Stop the server: **Ctrl + C** in Terminal.

Hard refresh if something looks old: **Cmd + Shift + R**

---

## What to edit for common changes

| I want to change… | Edit this file |
|-------------------|----------------|
| Homepage headline, about, contact | `index.html` |
| Work cards on homepage | `partials/work-grid.html` |
| Top navigation / logo link | `partials/header.html` |
| Footer | `partials/footer.html` |
| PawStay case study | `cases/pawstay.html` |
| Spona case study | `cases/spona-sales.html` |
| UXZGB case study | `cases/uxzgb.html` |
| New case study | Copy `cases/case-template.html` → `cases/my-project.html`, then add a card in `partials/work-grid.html` |
| Site colors & fonts | `assets/css/styles.css` (top section `:root { ... }`) |
| Galaxy mouse effects | `assets/css/effects.css` and `assets/js/main.js` |
| Case study layout tweaks | `assets/css/case.css` |

---

## Adding or replacing images

**Always use Finder — not chat uploads** (chat compresses images and they look blurry).

1. Open `assets/images/` in Finder (e.g. `assets/images/spona/` for Spona)
2. Drag your PNG or JPG into the folder
3. Update the `src="..."` in the HTML file to match the filename

Example in a case page:

```html
<img src="../assets/images/spona/spona-hero2.png?v=3" alt="..." loading="lazy">
```

Bump `?v=3` to `?v=4` after replacing an image so browsers load the new file.

**Logo files:**

- Nav: `assets/images/galanta/logo-nav.png`
- About section: `assets/images/galanta/logo-about.png`

Use **PNG with transparent background**.

---

## After you change CSS or JavaScript

Browsers cache old files. Bump the version number in `index.html`:

```html
<link rel="stylesheet" href="assets/css/effects.css?v=41">
<script src="assets/js/main.js?v=41" defer></script>
```

Change `41` → `42` each time you update those files.

Case pages: bump `case.css?v=6` in each case HTML file if you changed case styles.

---

## Saving a “code version” (Git)

Git remembers every saved version of the project. Use it before big changes.

**Save current work:**

```bash
cd /Users/natasa/Projects/Test_sajt
git status
git add .
git commit -m "Describe what you changed, e.g. Updated Spona hero image"
```

**See past versions:**

```bash
git log --oneline
```

**Undo uncommitted changes to one file:**

```bash
git checkout -- path/to/file.html
```

---

## Publish / update the live site

### If you use GitHub + Netlify (recommended)

After `git commit`:

```bash
git push
```

Netlify rebuilds the site automatically (about 1 minute).

### If you use Netlify Drop (drag & drop)

1. Go to https://app.netlify.com/drop
2. Drag the whole **Test_sajt** folder again

---

## Connect GitHub (one-time setup)

1. Create a repo at https://github.com/new (e.g. `galanta-portfolio`)
2. In Terminal:

```bash
cd /Users/natasa/Projects/Test_sajt
git remote add origin https://github.com/YOUR_USERNAME/galanta-portfolio.git
git branch -M main
git push -u origin main
```

3. Netlify → Add site → Import from Git → select the repo  
   - Build command: *(empty)*  
   - Publish directory: `.`

---

## Quick checklist before going live

- [ ] Email and links correct in `index.html` (#contact)
- [ ] LinkedIn / Behance URLs work
- [ ] All three case studies open and images load
- [ ] Test on phone (menu, scroll, images)
- [ ] Run local preview once more

---

## Need help?

- Edit files in **Cursor** (best for HTML/CSS)
- Images via **Finder** into `assets/images/`
- Preview with **python3 -m http.server 8000**
- Save versions with **git commit**
- Go live with **git push** (Netlify) or **Netlify Drop**
