const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

function callPythonLLM(endpoint, payload, res) {
  const py = spawn("python", [path.join(__dirname, "llm", "llm_client.py"), endpoint, JSON.stringify(payload)]);
  let data = "";
  py.stdout.on("data", chunk => data += chunk);
  py.stderr.on("data", err => console.error(err.toString()));
  py.on("close", () => res.json(JSON.parse(data)));
}

app.post("/api/keywords", (req, res) => callPythonLLM("keywords", req.body, res));
app.post("/api/titles", (req, res) => callPythonLLM("titles", req.body, res));
app.post("/api/topics", (req, res) => callPythonLLM("topics", req.body, res));
app.post("/api/content", (req, res) => callPythonLLM("content", req.body, res));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
