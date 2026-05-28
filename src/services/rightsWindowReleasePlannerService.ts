// SPDX-License-Identifier: AGPL-3.0-or-later

import { approvalQueues, releasePackets, rightsChanges } from "../data/sampleRightsWindows";

export function summary() {
  return {
    rightsChanges: rightsChanges.length,
    urgentWindows: rightsChanges.filter((item) => item.risk === "red").length,
    blockedClearances: approvalQueues.filter((item) => item.readiness !== "green").length,
    riskyPackets: releasePackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Repair holdback and clearance blockers first so rights-window releases do not ship with territory drift, promo exposure, or ad-sales mismatch."
  };
}

export function rightsLane() {
  return rightsChanges;
}

export function approvalBlockers() {
  return approvalQueues;
}

export function releasePosture() {
  return releasePackets;
}

export function verification() {
  return [
    "Rights-window changes map to concrete downstream systems, not just notes in a release brief.",
    "Approval blockers surface the exact evidence needed before a title becomes buyer-visible.",
    "Release posture ties holdbacks, promos, and sales commitments to one readable publishing packet.",
    "The planner is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real contracts, title libraries, or partner records are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    rightsLane: rightsLane(),
    approvalBlockers: approvalBlockers(),
    releasePackets: releasePosture(),
    verification: verification()
  };
}
