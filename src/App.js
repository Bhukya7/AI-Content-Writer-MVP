import './App.css';
import React, { useState } from "react";
import KeywordResearch from "./components/KeywordResearch";
import TitleGeneration from "./components/TitleGeneration";
import TopicSelection from "./components/TopicSelection";
import ContentCreation from "./components/ContentCreation";
import ContentPreview from "./components/ContentPreview";
import Dashboard from "./components/Dashboard";

function App() {
  const [step, setStep] = useState(0);
  const [seed, setSeed] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [content, setContent] = useState("");

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 24 }}>
      <h1>AI Content Writer</h1>
      <Dashboard step={step} />
      {step === 0 && (
        <KeywordResearch
          seed={seed}
          setSeed={setSeed}
          setKeywords={setKeywords}
          setStep={setStep}
        />
      )}
      {step === 1 && (
        <TitleGeneration
          keywords={keywords}
          setSelectedKeyword={setSelectedKeyword}
          setTitles={setTitles}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <TopicSelection
          titles={titles}
          setSelectedTitle={setSelectedTitle}
          setTopics={setTopics}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <ContentCreation
          selectedKeyword={selectedKeyword}
          topics={topics}
          setSelectedTopic={setSelectedTopic}
          setContent={setContent}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <ContentPreview
          content={content}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default App;
