import { payload, summary } from "../src/services/rightsWindowReleasePlannerService";

console.log("rights-window-release-planner demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().approvalBlockers, null, 2));
