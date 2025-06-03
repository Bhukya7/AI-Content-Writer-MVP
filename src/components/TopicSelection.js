import React, { useState } from "react";
import { getTopics } from "../api";

function TopicSelection({ titles, setSelectedTitle, setTopics, setStep }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (!title) return;
    setLoading(true);
    const data = await getTopics(title);
    setTopics(data.topics || []);
    setSelectedTitle(title);
    setStep(3);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a title:<br />
        <select
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          {titles.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={loading || !title} style={{ marginLeft: 8 }}>
        {loading ? "Loading..." : "Generate Topics"}
      </button>
    </form>
  );
}

export default TopicSelection;
