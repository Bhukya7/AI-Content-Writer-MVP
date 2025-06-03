import React, { useState } from "react";
import { getKeywords } from "../api";

function KeywordResearch({ seed, setSeed, setKeywords, setStep }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!seed) return;
    setLoading(true);
    const data = await getKeywords(seed);
    setKeywords(data.keywords || []);
    setStep(1);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a seed keyword: <br />
        <input
          type="text"
          value={seed}
          onChange={e => setSeed(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
        {loading ? "Loading..." : "Suggest Keywords"}
      </button>
    </form>
  );
}

export default KeywordResearch;
