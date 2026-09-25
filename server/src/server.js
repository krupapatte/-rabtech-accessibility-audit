const http = require("node:http");
const { getHealth } = require("./routes/health");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "GET" && req.url === "/api/health") {
    res.writeHead(200);
    res.end(JSON.stringify(getHealth()));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
});

const port = Number(process.env.PORT || 3001);
server.listen(port, () => console.log(`API listening on http://localhost:${port}`));
