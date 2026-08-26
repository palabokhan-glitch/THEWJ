# THEWJ Law Firm Website

A static, responsive law firm website — no build tools, frameworks, or server required.

## Pages

- `index.html` — Home
- `about.html` — About the firm
- `practice-areas.html` — Practice area details
- `attorneys.html` — Attorney profiles
- `contact.html` — Contact form + FAQ

## Structure

```
css/styles.css   Shared styling (colors, layout, components)
js/script.js     Mobile nav toggle, FAQ accordion, contact form handling
images/          Put real photos here (firm, office, attorney headshots)
```

## Editing content

Everything is plain HTML — open any `.html` file and edit the text directly.
Shared bits (nav, footer, phone/email/address) are repeated at the top and
bottom of every page, so update them in all five files when they change.

Placeholder photos are CSS boxes (`.image-placeholder`, `.attorney-photo`).
To use a real photo, drop the file in `images/` and replace the div with:

```html
<img src="images/your-photo.jpg" alt="Description">
```

Colors and fonts live in `css/styles.css` under `:root` at the top of the file.

## Previewing locally

Just open `index.html` in a browser, or serve it locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying / going live

The site is static, so any static host works. Two easy options:

**GitHub Pages** (free, tied to this repo)
1. Repo Settings → Pages → Source: deploy from branch `main`, folder `/ (root)`.
2. Push to `main` and the site publishes at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel** (free, custom domains, instant deploys on push)
1. Connect this GitHub repo in the Netlify/Vercel dashboard.
2. No build command needed — leave build settings blank, publish directory `/`.
3. Every push to `main` auto-deploys.

## Updating the site after launch

1. Edit the relevant `.html`, `.css`, or `.js` file(s).
2. Commit and push your changes to `main` (or open a PR into `main`).
3. Your host (GitHub Pages / Netlify / Vercel) automatically redeploys the
   updated site within a minute or two — no manual build step needed.
