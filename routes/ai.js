const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

function callLLM(endpoint, payload, res) {
  const py = spawn("python3", ["./llm/llm_client.py", endpoint, JSON.stringify(payload)]);
  let data = "";
  py.stdout.on("data", chunk => data += chunk);
  py.stderr.on("data", err => console.error(err.toString()));
  py.on("close", () => res.json(JSON.parse(data)));
}

router.post("/keywords", (req, res) => callLLM("keywords", req.body, res));
router.post("/titles", (req, res) => callLLM("titles", req.body, res));
router.post("/topics", (req, res) => callLLM("topics", req.body, res));
router.post("/content", (req, res) => callLLM("content", req.body, res));

module.exports = router;
