import React from "react";

function Dashboard({ step }) {
  const steps = [
    "Keyword Research",
    "Title Generation",
    "Topic Selection",
    "Content Creation",
    "Content Preview"
  ];
  return (
    <div style={{ marginBottom: 24 }}>
      <strong>Step {step + 1} of 5:</strong> {steps[step]}
      <hr />
    </div>
  );
}

export default Dashboard;
