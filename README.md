# FUDOFAB Static Site

This folder is a non-WordPress rebuild of the FUDOFAB site. It keeps the same core content and visual direction from the WordPress/Elementor site, but removes WordPress, PHP, plugins, and the database.

## Files to Edit

- `index.html` controls the page structure.
- `css/style.css` controls colors, spacing, layout, and responsive styling.
- `js/content.js` controls editable services, team members, gallery images, and social links.
- `assets/images` and `assets/videos` contain the copied media from the WordPress uploads folder.

## Quick Updates

To change a service, team member, or gallery image, edit `js/content.js`.

To change the hero text or contact section text, edit `index.html`.

To change the look, edit `css/style.css`.

## Run Locally

You can open `index.html` directly in a browser. For best testing, run a tiny static server from this folder:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.
