# Architecture

## Overview

`rights-window-release-planner` is a lightweight TypeScript + Express control plane for modeling the operating layer between rights-window changes, clearance blockers, and publishing-safe release posture.

## Surfaces

- `overview`
  - active rights changes
  - blocked clearances
  - release-ready packets
  - governance recommendation
- `rights-lane`
  - title-by-title queue
  - owner routing
  - downstream release impact
- `approval-blockers`
  - rights, standards, and commercial blockers
  - required evidence
  - readiness posture
- `release-posture`
  - release packets
  - completeness score
  - go/no-go timing
- `verification`
  - what the repo proves about publishing-governance systems

## Data Model

- `RightsWindowChange`
  - surface, title, owner, risk, downstream impact, next action
- `ApprovalQueue`
  - blocker, source, required evidence, owner, readiness, impact area
- `ReleasePacket`
  - market, completeness score, release window, blocker, decision note

## Design Principle

Publishing release state should be inspectable by rights, standards, revenue, and operator stakeholders. The system should explain:
- which release window is under pressure right now
- which downstream approval is still missing
- who owns the next move
- where territory or commercial risk is building
