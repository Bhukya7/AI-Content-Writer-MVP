const API_BASE = "http://localhost:5000/api";

export async function getKeywords(seed) {
  const res = await fetch(`${API_BASE}/keywords`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seed })
  });
  return res.json();
}

export async function getTitles(keyword) {
  const res = await fetch(`${API_BASE}/titles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword })
  });
  return res.json();
}

export async function getTopics(title) {
  const res = await fetch(`${API_BASE}/topics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  return res.json();
}

export async function getContent(keyword, topic) {
  const res = await fetch(`${API_BASE}/content`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword, topic })
  });
  return res.json();
}
