import React from "react";
import { copyToClipboard } from "../utils";

function ContentPreview({ content, setStep }) {
  return (
    <div>
      <h2>Generated Content</h2>
      <textarea
        value={content}
        readOnly
        rows={10}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={() => copyToClipboard(content)}>
        Copy to Clipboard
      </button>
      <button onClick={() => setStep(0)} style={{ marginLeft: 8 }}>
        Start Over
      </button>
    </div>
  );
}

export default ContentPreview;
