const { spawn } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

const root = path.resolve(__dirname, "..");
const server = spawn(process.execPath, [path.join(root, "server/src/server.js")], {
  cwd: root, stdio: "inherit", env: process.env
});

console.log("Client files are static. Serve client/ on http://localhost:5173 using a local static server.");
console.log("If Python is installed, in a second terminal run: cd client && python -m http.server 5173");

server.on("exit", code => process.exit(code ?? 0));
process.on("SIGINT", () => server.kill("SIGINT"));
