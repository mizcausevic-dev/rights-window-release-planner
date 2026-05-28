import fs from "node:fs";
import path from "node:path";

import {
  approvalBlockers,
  payload,
  releasePosture,
  rightsLane,
  summary,
  verification
} from "../src/services/rightsWindowReleasePlannerService";
import {
  renderApprovalBlockers,
  renderDocs,
  renderOverview,
  renderReleasePosture,
  renderRightsLane,
  renderVerification
} from "../src/services/render";

const outputDir = path.resolve(__dirname, "..", "site");
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, "api"), { recursive: true });
fs.copyFileSync(path.resolve(__dirname, "..", "CNAME"), path.join(outputDir, "CNAME"));

function writePage(route: string, html: string) {
  const relativePath = route === "/" ? "index.html" : path.join(route.replace(/^\//, ""), "index.html");
  const pagePath = path.join(outputDir, relativePath);
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.writeFileSync(pagePath, html, "utf8");
}

writePage("/", renderOverview());
writePage("/rights-lane", renderRightsLane());
writePage("/approval-blockers", renderApprovalBlockers());
writePage("/release-posture", renderReleasePosture());
writePage("/verification", renderVerification());
writePage("/docs", renderDocs());

const apiPayloads: Record<string, unknown> = {
  "api/dashboard/summary.json": summary(),
  "api/rights-lane.json": rightsLane(),
  "api/approval-blockers.json": approvalBlockers(),
  "api/release-posture.json": releasePosture(),
  "api/verification.json": verification(),
  "api/sample.json": payload()
};

for (const [filename, data] of Object.entries(apiPayloads)) {
  fs.mkdirSync(path.dirname(path.join(outputDir, filename)), { recursive: true });
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2), "utf8");
}
