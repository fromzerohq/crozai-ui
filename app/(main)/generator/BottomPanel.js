import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AlertCircle, Code, FileText } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Styled components
const Container = styled.div`
  padding: 16px;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  overflow: hidden;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #333;
  padding-bottom: 8px;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #aaa;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: normal;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    color: #a4c8f0;
  }

  ${({ active }) =>
    active &&
    css`
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
      transform: scale(1.2);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      z-index: 2;
    `}
  
  svg {
    margin-right: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 14px;
  border-radius: 8px;
  resize: none;
  font-size: 14px;
  background: #333;
  color: #e1e1e1;
  border: 1px solid #555;
  transition: border 0.3s ease;

  &:focus {
    border: 2px solid #1a73e8;
    outline: none;
  }
`;

const InputBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  background: #333;
  padding: 12px;
  border-radius: 8px;
`;

const PromptInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  background: #222;
  border: 1px solid #555;
  font-size: 14px;
  color: #e1e1e1;

  &:focus {
    border-color: #1a73e8;
    outline: none;
  }
`;

const GenerateButton = styled.button`
  padding: 12px 20px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  color: #e1e4e8;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(109.6deg, #0d0d0d 10%, #0e61b0 90%);
    transform: translateY(-2px);
  }

  &:active {
    background: linear-gradient(109.6deg, #0d0d0d 10%, #0c4a84 90%);
    transform: translateY(1px);
  }
`;



const ResultBox = styled.div`
  padding: 12px;
  background: #333;
  border-radius: 8px;
  font-size: 14px;
  color: #e1e1e1;
  max-height: 120px;
  overflow-y: auto;
  border: 1px solid #555;
`;

const DiagramContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const DiagramBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background: #222;
  border-radius: 8px;
  color: #1a73e8;
  font-weight: bold;
  width: 200px;
  height: 160px;
`;

// SVG diagrams for visual representation
const DatabaseDiagram = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 3.791 7.134 2 12 2s8 1.791 8 4v12c0 2.209-3.134 4-8 4s-8-1.791-8-4V6z" stroke="#1a73e8" strokeWidth="1.5"/>
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#333" stroke="#1a73e8" strokeWidth="1.5"/>
  </svg>
);

const APIDiagram = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M5 12L8 8M5 12L8 16M19 12L16 8M19 12L16 16" stroke="#1a73e8" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="10" stroke="#1a73e8" strokeWidth="1.5"/>
  </svg>
);

// Main component
export const BottomPanel = () => {
  const [selectedTab, setSelectedTab] = useState('script');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const renderContent = () => {
    switch (selectedTab) {
      case 'script':
        return (
          <TextArea placeholder="Add a script description for this slide..." />
        );
      case 'code':
        return (
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Sample code snippet
function greet() {
  console.log("Hello, world!");
}`}
          </SyntaxHighlighter>
        );
      case 'diagrams':
        return (
          <DiagramContainer>
            <DiagramBox>
              <DatabaseDiagram />
              Database
            </DiagramBox>
            <DiagramBox>
              <APIDiagram />
              API Endpoint
            </DiagramBox>
          </DiagramContainer>
        );
      default:
        return null;
    }
  };

  const handleGenerate = () => {
    setResult(`Generated result for prompt: "${prompt}"`);
  };

  return (
    <Container>
      {/* Tabs */}
      <TabContainer>
        <TabButton
          active={selectedTab === 'script'}
          onClick={() => setSelectedTab('script')}
        >
          <FileText size={16} /> Script
        </TabButton>
        <TabButton
          active={selectedTab === 'code'}
          onClick={() => setSelectedTab('code')}
        >
          <Code size={16} /> Code
        </TabButton>
        <TabButton
          active={selectedTab === 'diagrams'}
          onClick={() => setSelectedTab('diagrams')}
        >
          <AlertCircle size={16} /> Diagrams
        </TabButton>
      </TabContainer>

      {/* Prompt Input and Generate Button */}
      <InputBox>
        <PromptInput
          type="text"
          placeholder="Enter a prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <GenerateButton onClick={handleGenerate}>Generate</GenerateButton>
      </InputBox>

      {/* Result Box */}
      {result && <ResultBox>{result}</ResultBox>}

      {/* Render content based on active tab */}
      {renderContent()}
    </Container>
  );
};
