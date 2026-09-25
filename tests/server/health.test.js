const test = require("node:test");
const assert = require("node:assert/strict");
const { getHealth } = require("../../server/src/routes/health");

test("health endpoint payload reports service as ok", () => {
  assert.deepEqual(getHealth(), {
    status: "ok",
    service: "accessibility-audit-api"
  });
});
