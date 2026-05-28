import { describe, expect, test } from "vitest";

import {
  approvalBlockers,
  releasePosture,
  rightsLane,
  summary,
  verification
} from "./services/rightsWindowReleasePlannerService";

describe("rights-window-release-planner", () => {
  test("returns a release recommendation", () => {
    expect(summary().recommendation).toMatch(/release/i);
  });

  test("maps rights changes and blockers", () => {
    expect(rightsLane().length).toBeGreaterThan(2);
    expect(approvalBlockers().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("verification posture stays buyer-readable", () => {
    expect(releasePosture().every((packet) => packet.market.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("rights"))).toBe(true);
  });
});
