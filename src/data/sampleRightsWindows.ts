export type RightsWindowChange = {
  windowId: string;
  title: string;
  surface: string;
  issueType: string;
  owner: string;
  nextAction: string;
  risk: "red" | "yellow" | "green";
  excerpt: string;
};

export type ApprovalQueue = {
  blockerId: string;
  blocker: string;
  owner: string;
  source: string;
  readiness: "red" | "yellow" | "green";
  requiredEvidence: string;
  impactArea: string;
  note: string;
};

export type ReleasePacket = {
  packetId: string;
  market: string;
  completenessScore: number;
  status: "red" | "yellow" | "green";
  blocker: string;
  releaseWindowHours: number;
  decisionNote: string;
};

export const rightsChanges: RightsWindowChange[] = [
  {
    windowId: "RW-104",
    title: "Orbit After Dark S2",
    surface: "SVOD",
    issueType: "Territory holdback mismatch",
    owner: "Release Operations",
    nextAction: "Re-lock regional holdbacks and update release notes",
    risk: "red",
    excerpt: "The LATAM holdback expired in the rights sheet, but the storefront schedule still assumes the old blackout window."
  },
  {
    windowId: "RW-118",
    title: "City Pulse Live",
    surface: "FAST",
    issueType: "Promo clearance timing gap",
    owner: "Editorial Standards",
    nextAction: "Escalate promo review and lock disclaimer timing",
    risk: "yellow",
    excerpt: "The promo package is staged, but standards review and sponsor disclaimer approval are still not synchronized."
  },
  {
    windowId: "RW-132",
    title: "Signal Coast Sessions",
    surface: "Podcast + YouTube",
    issueType: "Music cue rights mismatch",
    owner: "Rights Management",
    nextAction: "Swap the cue sheet and republish the usage matrix",
    risk: "yellow",
    excerpt: "The episode cut is ready, but the music cue reference still points at the prior licensing window."
  },
  {
    windowId: "RW-149",
    title: "Northline Archives",
    surface: "AVOD",
    issueType: "Ad-sales inventory revision",
    owner: "Commercial Operations",
    nextAction: "Confirm amended ad load and notify release planning",
    risk: "red",
    excerpt: "Ad-sales updated the promised inventory, but the release packet and placement notes still reflect the earlier deal."
  }
];

export const approvalQueues: ApprovalQueue[] = [
  {
    blockerId: "AB-21",
    blocker: "Regional holdback matrix not approved",
    owner: "Release Operations",
    source: "Rights sheet and storefront calendar",
    readiness: "red",
    requiredEvidence: "Updated holdback matrix, storefront sync proof, and territory signoff",
    impactArea: "Territory launch integrity",
    note: "The expanded LATAM availability is still not reflected in the release packet."
  },
  {
    blockerId: "AB-28",
    blocker: "Standards review turnaround not locked",
    owner: "Editorial Standards",
    source: "Promo package and sponsor review",
    readiness: "yellow",
    requiredEvidence: "Review ETA, approved copy, and disclaimer signoff",
    impactArea: "Promo launch reliability",
    note: "The trailer is ready, but standards turnaround still has no fixed release-safe window."
  },
  {
    blockerId: "AB-34",
    blocker: "Cue-sheet replacement not reflected downstream",
    owner: "Rights Management",
    source: "Audio licensing and publishing ops",
    readiness: "yellow",
    requiredEvidence: "Updated cue sheet, usage matrix, and destination proof",
    impactArea: "Rights continuity",
    note: "The episode package changed, but downstream rights references still use the prior cue mapping."
  },
  {
    blockerId: "AB-41",
    blocker: "Ad-sales inventory change not synchronized",
    owner: "Commercial Operations",
    source: "Sales packet and release calendar",
    readiness: "red",
    requiredEvidence: "Revised ad load note, placement matrix, and internal acknowledgment",
    impactArea: "Commercial and viewer safety",
    note: "Updated inventory commitments are still not reflected in the release and promo packets."
  }
];

export const releasePackets: ReleasePacket[] = [
  {
    packetId: "RP-07",
    market: "US premiere window",
    completenessScore: 59,
    status: "red",
    blocker: "Holdback mismatch and sales packet drift",
    releaseWindowHours: 16,
    decisionNote: "Do not release until territory holds and commercial packets are reconciled."
  },
  {
    packetId: "RP-14",
    market: "Promo approvals",
    completenessScore: 76,
    status: "yellow",
    blocker: "Standards review ETA still pending",
    releaseWindowHours: 24,
    decisionNote: "Promo window can clear if disclaimer timing is locked in the next review cycle."
  },
  {
    packetId: "RP-22",
    market: "Audio-rights sync",
    completenessScore: 83,
    status: "yellow",
    blocker: "Cue-sheet matrix not fully updated",
    releaseWindowHours: 30,
    decisionNote: "Hold until licensing proof and downstream references are validated."
  },
  {
    packetId: "RP-31",
    market: "Internal packet sync",
    completenessScore: 96,
    status: "green",
    blocker: "No active blocker",
    releaseWindowHours: 72,
    decisionNote: "Packet is safe for governed publishing rollout."
  }
];
