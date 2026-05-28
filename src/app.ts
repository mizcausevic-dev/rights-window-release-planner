// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  approvalBlockers,
  payload,
  releasePosture,
  rightsLane,
  summary,
  verification
} from "./services/rightsWindowReleasePlannerService";
import {
  renderApprovalBlockers,
  renderDocs,
  renderOverview,
  renderReleasePosture,
  renderRightsLane,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5544);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/rights-lane", (_req, res) => res.type("html").send(renderRightsLane()));
app.get("/approval-blockers", (_req, res) => res.type("html").send(renderApprovalBlockers()));
app.get("/release-posture", (_req, res) => res.type("html").send(renderReleasePosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/rights-lane", (_req, res) => res.json(rightsLane()));
app.get("/api/approval-blockers", (_req, res) => res.json(approvalBlockers()));
app.get("/api/release-posture", (_req, res) => res.json(releasePosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Rights Window Release Planner listening on http://${host}:${port}`);
  });
}

export default app;
