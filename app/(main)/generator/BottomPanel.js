// components/Editor/BottomPanel.js
import React from 'react';
import styled from 'styled-components';
import { AlertCircle, Sparkles } from 'lucide-react';

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
  resize: none;
  font-size: 14px;
  
  &:focus {
    border-color: #1a73e8;
    outline: none;
  }
`;

const PromptBox = styled.div`
  padding: 12px;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BottomPanel = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div style={{ padding: '16px' }}>
            <TextArea 
              placeholder="Add a description for this slide..."
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus sem at augue finibus, eu pharetra nisl sagittis."
            />
          </div>
        );
      case 'diagrams':
        return (
          <div style={{ padding: '16px' }}>
            <PromptBox>
              <AlertCircle size={16} />
              Select a diagram type to add to your slide
            </PromptBox>
            <S.Grid>
              {['Flow Chart', 'Mind Map', 'Timeline', 'Org Chart'].map(type => (
                <S.MediaBox key={type}>
                  <GridIcon size={24} />
                  <span>{type}</span>
                </S.MediaBox>
              ))}
            </S.Grid>
          </div>
        );
      case 'prompts':
        return (
          <div style={{ padding: '16px' }}>
            <PromptBox>
              <Sparkles size={16} />
              Use AI to generate content
            </PromptBox>
            <TextArea 
              placeholder="Enter a prompt to generate content..."
            />
          </div>
        );
      default:
        return null;
    }
  };

  return renderContent();
};