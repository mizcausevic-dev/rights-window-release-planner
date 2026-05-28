# Security Policy

## Scope

This repository is a **reference control plane** for media rights-window and release-governance workflows — rights triage, approval-blocker mapping, and release-posture visibility. It ships synthetic, non-sensitive sample data only. It is not a production system of record and should not be deployed with real title-library, contract, partner, or sales data without an independent security review.

## Supported versions

| Version | Supported |
|---------|-----------|
| `v0.1-shipped` and later | ✅ |

## Reporting a vulnerability

Please report suspected vulnerabilities privately to **security@kineticgain.com**
(or open a [GitHub security advisory](https://github.com/mizcausevic-dev/rights-window-release-planner/security/advisories/new)).
Do not open a public issue for a security report.

We aim to acknowledge within 3 business days.

## Dependency posture

- Dependencies are monitored weekly via Dependabot (npm + GitHub Actions).
- CI runs `npm audit --audit-level=high` on every push and pull request.
- High/critical advisories are triaged and either patched or documented here.
