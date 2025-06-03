import React, { useState } from "react";
import { getTitles } from "../api";

function TitleGeneration({ keywords, setSelectedKeyword, setTitles, setStep }) {
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (!keyword) return;
    setLoading(true);
    const data = await getTitles(keyword);
    setTitles(data.titles || []);
    setSelectedKeyword(keyword);
    setStep(2);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a keyword:<br />
        <select
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          {keywords.map(k => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={loading || !keyword} style={{ marginLeft: 8 }}>
        {loading ? "Loading..." : "Generate Titles"}
      </button>
    </form>
  );
}

export default TitleGeneration;
