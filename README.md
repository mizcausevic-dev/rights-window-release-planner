# Rights Window Release Planner

[![CI](https://github.com/mizcausevic-dev/rights-window-release-planner/actions/workflows/ci.yml/badge.svg)](https://github.com/mizcausevic-dev/rights-window-release-planner/actions/workflows/ci.yml)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](./LICENSE)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](./.github/dependabot.yml)
[![Deploy](https://github.com/mizcausevic-dev/rights-window-release-planner/actions/workflows/pages.yml/badge.svg)](https://github.com/mizcausevic-dev/rights-window-release-planner/actions/workflows/pages.yml)

TypeScript operator surface for media rights windows, clearance blockers, release sequencing, and publishing-safe launch posture.

## Why this exists

- Publishing teams lose trust when rights holdbacks, promo approvals, and release commitments live in separate systems.
- Rights windows need a clear view of which territory rules, cue sheets, standards packets, and ad-sales updates still block the next release.
- Media / Publishing buyers care whether a title can launch safely without fragmenting rights notes, storefront calendars, or commercial promises.
- Operator tooling should turn release chaos into governed windows, ownership, and measurable launch readiness.

## Why this matters (KG Embedded tie-back)

This repo demonstrates the rights-window governance primitive for Media / Publishing buyers: release changes, approval blockers, and release posture tied into one operator surface. A B2B SaaS buyer would care because content, rights, and reporting data often need to surface inside customer-facing products without exposing unsafe write paths or fragmented release evidence. Kinetic Gain Embedded extends this into security-first in-product analytics for publishing, rights, and revenue workflows, see [kineticgain.com/embedded](https://kineticgain.com/embedded).

## Routes

- `/`
- `/rights-lane`
- `/approval-blockers`
- `/release-posture`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/rights-lane`
- `/api/approval-blockers`
- `/api/release-posture`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Rights lane](./screenshots/02-rights-lane-proof.png)
![Approval blockers](./screenshots/03-approval-blockers-proof.png)
![Release posture](./screenshots/04-release-posture-proof.png)

## Local Development

```powershell
cd rights-window-release-planner
npm install
npm run dev
```

Open:
- [http://127.0.0.1:5544/](http://127.0.0.1:5544/)
- [http://127.0.0.1:5544/rights-lane](http://127.0.0.1:5544/rights-lane)
- [http://127.0.0.1:5544/approval-blockers](http://127.0.0.1:5544/approval-blockers)
- [http://127.0.0.1:5544/release-posture](http://127.0.0.1:5544/release-posture)
- [http://127.0.0.1:5544/verification](http://127.0.0.1:5544/verification)

## Validation

- `npm run build`
- `npm run test`
- `npm run coverage`
- `npm run demo`
- `npm run smoke`
- `npm run prerender`
- `npm run render:assets`

## Production status

| Aspect | Status |
|--------|--------|
| CI | Node 20 + 22 matrix — lint · typecheck · coverage · build · demo · smoke · `npm audit` ([workflow](./.github/workflows/ci.yml)) |
| Test coverage | `src/services/` coverage gate maintained via `vitest` |
| License | [AGPL-3.0-or-later](./LICENSE) |
| Dependencies | Dependabot weekly (npm + GitHub Actions); `npm audit --audit-level=high` in CI |
| Data handling | Synthetic, non-sensitive publishing packets only. No live title library, partner, or contract records. |
| Deploy | Static prerender → **https://rights.kineticgain.com/** (GitHub Pages, [pages workflow](./.github/workflows/pages.yml)) |

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)

## Part of the Kinetic Gain Suite

Operator surface in the [Kinetic Gain Suite](https://suite.kineticgain.com/) — a portfolio of buyer-readable control planes spanning security posture, compliance evidence, data-platform governance, FinOps, and operator workflows. Apex: [kineticgain.com](https://kineticgain.com/).

## Related surfaces

- [**`creator-partnership-deal-desk`**](https://github.com/mizcausevic-dev/creator-partnership-deal-desk) — creator launch and rights coordination
- [**`campaign-taxonomy-governor`**](https://github.com/mizcausevic-dev/campaign-taxonomy-governor) — campaign naming and reporting discipline
- [**`booking-disruption-command-center`**](https://github.com/mizcausevic-dev/booking-disruption-command-center) — live operations disruption handling
