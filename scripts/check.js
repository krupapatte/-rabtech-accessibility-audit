const fs = require("node:fs");
const path = require("node:path");
const required = [
  "README.md", "client/index.html", "client/src/app.js",
  "server/src/server.js", "docs/audit/audit-report.md",
  "docs/architecture/README.md"
];
const missing = required.filter(file => !fs.existsSync(path.join(__dirname, "..", file)));
if (missing.length) {
  console.error("Missing required files:", missing.join(", "));
  process.exit(1);
}
console.log("Repository structure check passed.");
