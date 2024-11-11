import React from 'react';
import styled from 'styled-components';
import { Layout, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Image, Shapes, Square, User, Code, Upload, Activity } from 'lucide-react';
import * as S from './styles';

// General styles for input fields, buttons, and sections
const PropertyPanel = styled.div`
  padding: 16px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  border-radius: 8px;
`;

const PropertySection = styled.div`
  margin-bottom: 20px;
`;

const PropertyTitle = styled.h4`
  font-size: 18px;
  color: #e1e4e8;
  margin-bottom: 12px;
  font-weight: 600;
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const FontSelector = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #444;
  border-radius: 6px;
  font-size: 16px;
  background-color: #333;
  color: #e1e4e8;
  transition: all 0.2s;
  
  &:focus {
    border-color: #1a73e8;
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
  }
`;

const ColorPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColorPreview = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: ${props => props.color};
  border: 1px solid #444;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #333;
  color: #e1e4e8;
  font-size: 16px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
  transition: all 0.2s;
  
  &:hover {
    background: #444;
    color: #1a73e8;
  }

  ${props => props.active && `
    color: #1a73e8;
    background: #333;
  `}
`;

export const RightPanelContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'template':
        return (
          <PropertyPanel>
            <PropertyTitle>Select a Template Style</PropertyTitle>
            <S.Grid>
              {['Basic', 'Professional', 'Creative', 'Minimal', 'Modern', 'Classic'].map(template => (
                <S.MediaBox key={template} style={{ aspectRatio: '4/3', padding: '12px' }}>
                  <Layout size={24} />
                  <span>{template}</span>
                </S.MediaBox>
              ))}
            </S.Grid>
          </PropertyPanel>
        );
      case 'Text':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Font Selection</PropertyTitle>
              <FontSelector>
                <Select style={{ flex: 1 }}>
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Times New Roman</option>
                  <option>Courier New</option>
                  <option>Georgia</option>
                  <option>Verdana</option>
                </Select>
                <Input type="number" placeholder="Font Size" defaultValue="16" />
              </FontSelector>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <IconButton active><AlignLeft size={16} /></IconButton>
                <IconButton><AlignCenter size={16} /></IconButton>
                <IconButton><AlignRight size={16} /></IconButton>
                <IconButton><Bold size={16} /></IconButton>
                <IconButton><Italic size={16} /></IconButton>
                <IconButton><Underline size={16} /></IconButton>
              </div>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Text Color</PropertyTitle>
              <ColorPicker>
                <ColorPreview color="#000000" />
                <Input type="color" defaultValue="#000000" />
              </ColorPicker>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Background Color</PropertyTitle>
              <ColorPicker>
                <ColorPreview color="#ffffff" />
                <Input type="color" defaultValue="#ffffff" />
              </ColorPicker>
            </PropertySection>
          </PropertyPanel>
        );
      case 'MEDIA_ITEMS':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Media Library</PropertyTitle>
              <S.Grid>
                {['Image', 'Video', 'Audio', 'GIF', 'Sticker'].map(type => (
                  <S.MediaBox key={type} style={{ aspectRatio: '4/3', padding: '12px' }}>
                    <Image size={24} />
                    <span>{type}</span>
                  </S.MediaBox>
                ))}
              </S.Grid>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Image Properties</PropertyTitle>
              <PropertyGrid>
                <Input type="number" placeholder="Width" />
                <Input type="number" placeholder="Height" />
                <Input type="number" placeholder="Position X" />
                <Input type="number" placeholder="Position Y" />
              </PropertyGrid>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Apply Effects</PropertyTitle>
              <Select>
                <option>None</option>
                <option>Brightness</option>
                <option>Contrast</option>
                <option>Saturation</option>
                <option>Blur</option>
              </Select>
            </PropertySection>
          </PropertyPanel>
        );
      case 'Shapes':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Select a Shape</PropertyTitle>
              <S.Grid>
                {['Rectangle', 'Circle', 'Triangle', 'Line', 'Arrow', 'Star'].map(shape => (
                  <S.MediaBox key={shape} style={{ aspectRatio: '4/3', padding: '12px' }}>
                    <Shapes size={24} />
                    <span>{shape}</span>
                  </S.MediaBox>
                ))}
              </S.Grid>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Shape Properties</PropertyTitle>
              <PropertyGrid>
                <Input type="number" placeholder="Width" />
                <Input type="number" placeholder="Height" />
                <Input type="number" placeholder="Position X" />
                <Input type="number" placeholder="Position Y" />
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
        );
      case 'avatar':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Avatar Customization</PropertyTitle>
              <S.Grid>
                {['Male', 'Female', 'Custom'].map(gender => (
                  <S.MediaBox key={gender} style={{ aspectRatio: '4/3', padding: '12px' }}>
                    <User size={24} />
                    <span>{gender}</span>
                  </S.MediaBox>
                ))}
              </S.Grid>
            </PropertySection>
            <PropertySection>
              <PropertyTitle>Avatar Appearance</PropertyTitle>
              <PropertyGrid>
                <Input type="text" placeholder="Hair Color" />
                <Input type="text" placeholder="Eye Color" />
                <Input type="number" placeholder="Height (cm)" />
                <Input type="text" placeholder="Skin Tone" />
              </PropertyGrid>
            </PropertySection>
          </PropertyPanel>
        );
      case 'snippets':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Code Snippets</PropertyTitle>
              <S.Grid>
                {['JavaScript', 'HTML', 'CSS', 'Python'].map(language => (
                  <S.MediaBox key={language} style={{ aspectRatio: '4/3', padding: '12px' }}>
                    <Code size={24} />
                    <span>{language}</span>
                  </S.MediaBox>
                ))}
              </S.Grid>
            </PropertySection>
          </PropertyPanel>
        );
      case 'uploads':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Upload Files</PropertyTitle>
              <Upload />
            </PropertySection>
          </PropertyPanel>
        );
      case 'interactivity':
        return (
          <PropertyPanel>
            <PropertySection>
              <PropertyTitle>Interactions</PropertyTitle>
              <S.Grid>
                {['Click', 'Hover', 'Scroll'].map(event => (
                  <S.MediaBox key={event} style={{ aspectRatio: '4/3', padding: '12px' }}>
                    <Activity size={24} />
                    <span>{event}</span>
                  </S.MediaBox>
                ))}
              </S.Grid>
            </PropertySection>
          </PropertyPanel>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};
