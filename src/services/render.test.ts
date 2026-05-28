import { describe, expect, test } from "vitest";

import {
  renderApprovalBlockers,
  renderDocs,
  renderOverview,
  renderReleasePosture,
  renderRightsLane,
  renderVerification
} from "./render";
import {
  approvalQueues,
  releasePackets,
  rightsChanges
} from "../data/sampleRightsWindows";

const renderers = [
  ["overview", renderOverview],
  ["rights-lane", renderRightsLane],
  ["approval-blockers", renderApprovalBlockers],
  ["release-posture", renderReleasePosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Rights Window Release Planner");
    expect(html).toContain('href="/rights-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("rights lane lists every change with a risk tag", () => {
    const html = renderRightsLane();
    for (const change of rightsChanges) {
      expect(html).toContain(change.windowId);
    }
    expect(html).toContain('class="st needs"');
  });

  test("approval blockers list every block with readiness tags", () => {
    const html = renderApprovalBlockers();
    for (const block of approvalQueues) {
      expect(html).toContain(block.blockerId);
    }
    expect(html).toContain('class="bad"');
    expect(html).toContain("Promo launch reliability");
  });

  test("release posture shows packets and completeness scores", () => {
    const html = renderReleasePosture();
    for (const packet of releasePackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/approval-blockers");
    expect(html).toContain("/release-posture");
  });
});
