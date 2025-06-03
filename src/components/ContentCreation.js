import React, { useState } from "react";
import { getContent } from "../api";

function ContentCreation({ selectedKeyword, topics, setSelectedTopic, setContent, setStep }) {
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (!topic) return;
    setLoading(true);
    const data = await getContent(selectedKeyword, topic);
    setContent(data.content || "");
    setSelectedTopic(topic);
    setStep(4);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a topic:<br />
        <select
          value={topic}
          onChange={e => setTopic(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          {topics.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={loading || !topic} style={{ marginLeft: 8 }}>
        {loading ? "Loading..." : "Generate Content"}
      </button>
    </form>
  );
}

export default ContentCreation;
