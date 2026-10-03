# Phase 1 changes (3 Oct 2026)

## Merged (old URL now a redirect stub -> new home)
| Retired URL | Merged into |
|---|---|
| exhibition-stall-design-karachi.html | exhibition-booth-stall-design.html (#stall-vs-booth) |
| exhibition-booth-design-karachi.html | exhibition-booth-stall-design.html (#stall-vs-booth) |
| custom-exhibition-stall-fabrication-karachi.html | custom-exhibition-stands.html (#custom-fabrication) |
| custom-exhibition-booths-karachi.html | custom-exhibition-stands.html |
| how-to-choose-exhibition-stall-fabricator-karachi.html | how-to-find-the-right-...-karachi.html (#choose-a-fabricator) |
| denning-graduation-ceremony-2026-expo-centre-karachi.html | denning-5th-graduation-ceremony-expo-centre-karachi.html |

## Rebuilt
kiosk-design, exhibition-stall-cost-karachi, services (now a real hub).

## Retitled (all <= 60 chars)
index, exhibition-stall-fabrication-karachi, exhibition-booth-stall-design, custom-exhibition-stands, kiosk-design, exhibition-stall-cost-karachi, services, the guide, the Denning case study. Meta descriptions <= 160.

## Sitewide
Retired URLs removed from every footer, card, in-body link, sitemap.xml and llms.txt. sitemap.xml now has lastmod and no priority tags. FAQ JSON-LD updated wherever FAQs were added. Fixed a missing FAQ section tag on the fabrication page (the "Common questions" button was dead).

## Deploy notes
- GitHub Pages cannot send real 301s: the stubs use canonical + instant meta refresh. `_redirects` gives true 301s if you move to Cloudflare Pages or Netlify (GitHub Pages ignores it).
- After deploying: submit sitemap.xml again in GSC, then URL-Inspect and request indexing for kiosk-design, services, exhibition-stall-cost-karachi and exhibition-booth-stall-design.

## Still needs YOUR input (not invented)
- Real price ranges on the cost page (see OWNER NOTE comment in its source).
- Real photos/renders for kiosk and service pages (Phase 2).
