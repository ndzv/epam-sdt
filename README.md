# EPAM School of Digital Technologies landing

A single-page landing for EPAM School of Digital Technologies at American University Kyiv (AUK), restyled to follow the main auk.edu.ua site.

- `index.html` is the landing. Shared styles live in `assets/css/site.css` (tokens, header, footer, cards), subpage components in `assets/css/pages.css`, and the menu/anchor-bar script in `assets/js/site.js`. Serve the folder with any static host (GitHub Pages, Netlify).
- Content comes from the current landing at sdt.semanticidea.com and the AUK page /ua/epam-school-of-digital-technologies/.
- Design tokens come from auk.edu.ua's own stylesheet: navy `#002588`, red `#d01822`, grey surface `#f6f6f6`, black text, Inter for body text, and Object Sans at weight 400 for headings. The page uses self-hosted Object Sans for headings and Open Sans (Apache 2.0) for body text, both in `assets/fonts`. Object Sans is a commercial font: keep its use covered by AUK's licence.
- Images, logos and the hero video are bundled in `assets/`.

## Pages
Copies of the sdt.semanticidea.com subpages that the landing links to, in the same AUK design:
- Programs: `software-engineering.html`, `bachelor-software-engineering-and-ai.html`, `bachelor-digital-experience-design-and-ai.html`, `bachelor-data-science-and-ai.html`, `bachelor-cybersecurity.html`
- Faculty: `faculty.html`, `sergiy-tytenko.html`, `oleksandra-antoniouk.html`, `viktor-putrenko.html`, `oleksandr-yosypenko.html`
- News: `news.html`, `tytenko-asu-agentic-ai-student-experience-2026.html`, `software-engineering-in-the-age-of-ai-2026.html`, `tytenko-ucu-digital-transformation-universities-2026.html`
- English landing: `en.html`

Links to pages that were not copied (other faculty profiles, older news, the English versions of subpages) still point to sdt.semanticidea.com.

## Open questions
- Dean title for Сергій Титенко differs between the two sources ("Декан" vs "Заступник декана").
- The program list differs (5 programs on the new landing, 7 on the AUK page).
- The lead form is a front-end demo and is not connected to a backend yet.
