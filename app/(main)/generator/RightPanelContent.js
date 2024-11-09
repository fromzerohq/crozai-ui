import React from 'react';
import styled from 'styled-components';
import { Layout } from 'lucide-react';

import * as S from './styles';

const FontSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s;
  
  &:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
  }
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  transition: all 0.2s;
  
  &:hover {
    background: #f1f3f4;
    color: #1a73e8;
  }

  ${props => props.active && css`
    color: #1a73e8;
    background: #e8f0fe;
  `}
`;

const FontSizeInput = styled(Input)`
  width: 80px;
`;

const TextAlignButton = styled(IconButton)`
  background: ${props => props.active ? '#e8f0fe' : 'transparent'};
  color: ${props => props.active ? '#1a73e8' : '#5f6368'};
`;

export const RightPanelContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'template':
        return (
          <S.Grid>
            {['Basic', 'Professional', 'Creative', 'Minimal'].map(template => (
              <S.MediaBox key={template} style={{ aspectRatio: '4/3' }}>
                <Layout size={24} />
                <span>{template}</span>
              </S.MediaBox>
            ))}
          </S.Grid>
        );
      case 'text':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Font</PropertyTitle>
              <FontSelector>
                <Select style={{ flex: 1 }}>
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                </Select>
                <FontSizeInput type="number" defaultValue="16" />
              </FontSelector>
              <div style={{ display: 'flex', gap: '8px' }}>
                <TextAlignButton active>
                  <AlignLeft size={16} />
                </TextAlignButton>
                <TextAlignButton>
                  <AlignCenter size={16} />
                </TextAlignButton>
                <TextAlignButton>
                  <AlignRight size={16} />
                </TextAlignButton>
              </div>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Color</PropertyTitle>
              <ColorPicker>
                <ColorPreview color="#000000" />
                <Input type="color" defaultValue="#000000" />
              </ColorPicker>
            </PropertySection>
          </PropertyPanel>
        );
      case 'media':
        return (
          <>
            <S.Grid>
              {MEDIA_ITEMS.map(item => (
                <S.MediaBox key={item.type}>
                  <item.icon size={24} />
                  <span>{item.label}</span>
                </S.MediaBox>
              ))}
            </S.Grid>
            <PropertyPanel>
              <PropertySection>
                <PropertyTitle>Image Properties</PropertyTitle>
                <PropertyGrid>
                  <Input type="number" placeholder="Width" />
                  <Input type="number" placeholder="Height" />
                  <Input type="number" placeholder="X" />
                  <Input type="number" placeholder="Y" />
                </PropertyGrid>
              </PropertySection>
              <PropertySection>
                <PropertyTitle>Effects</PropertyTitle>
                <Select>
                  <option>None</option>
                  <option>Blur</option>
                  <option>Grayscale</option>
                  <option>Sepia</option>
                </Select>
              </PropertySection>
            </PropertyPanel>
          </>
        );
      case 'shapes':
        return (
          <>
            <S.Grid>
              {['Rectangle', 'Circle', 'Triangle', 'Line', 'Arrow', 'Star'].map(shape => (
                <S.MediaBox key={shape}>
                  <Shapes size={24} />
                  <span>{shape}</span>
                </S.MediaBox>
              ))}
            </S.Grid>
            <PropertyPanel>
              <PropertySection>
                <PropertyTitle>Shape Properties</PropertyTitle>
                <PropertyGrid>
                  <Input type="number" placeholder="Width" />
                  <Input type="number" placeholder="Height" />
                  <Input type="number" placeholder="X" />
                  <Input type="number" placeholder="Y" />
                </PropertyGrid>
              </PropertySection>
              <PropertySection>
                <PropertyTitle>Style</PropertyTitle>
                <ColorPicker>
                  <ColorPreview color="#1a73e8" />
                  <Input type="color" defaultValue="#1a73e8" />
                </ColorPicker>
                <Select style={{ marginTop: '8px' }}>
                  <option>Solid</option>
                  <option>Dashed</option>
                  <option>Dotted</option>
                </Select>
              </PropertySection>
            </PropertyPanel>
          </>
        );
      default:
        return null;
    }
  };

  return renderContent();
};