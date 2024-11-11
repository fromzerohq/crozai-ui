// components/Editor/LayersList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, Lock, Trash2 } from 'lucide-react';

// Styled components for the new layout
const SlideList = styled.div`
  display: flex;
  flex-direction: column;  // Arrange images vertically
  gap: 20px;  // Space between images
  padding: 12px;
`;

const SlideItem = styled.div`
  width: 200px;  // Set width for the image
  height: 120px;  // Set height for the image
  border-radius: 8px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: ${props => props.active ? '2px solid #1a73e8' : '2px solid transparent'};
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #1a73e8;
  }
`;

const LayerActions = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${SlideItem}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.button`
  width: 24px;
  height: 24px;
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
    background: rgba(0, 0, 0, 0.05);
    color: #1a73e8;
  }
`;

export const LayersList = ({ selectedLayer, onSelectLayer }) => {
  const [expandedGroups, setExpandedGroups] = useState([]);
  
  // Sample data with pages represented by images
  const slides = [
    { id: 'slide1', name: 'Slide 1', imageUrl: '/images/thumb.png' },
    { id: 'slide2', name: 'Slide 2', imageUrl: '/images/msal_thumbnail.jpg' },
    { id: 'slide3', name: 'Slide 3', imageUrl: '/images/web3_thumbnail.jpg' },
  ];

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => 
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  return (
    <div>
      <SlideList>
        {slides.map(slide => (
          <SlideItem
            key={slide.id}
            image={slide.imageUrl}
            active={selectedLayer === slide.id}
            onClick={() => onSelectLayer(slide.id)}
          >
            {/* Optional actions */}
            <LayerActions>
              <IconButton>
                <Eye size={16} />
              </IconButton>
              <IconButton>
                <Lock size={16} />
              </IconButton>
              <IconButton>
                <Trash2 size={16} />
              </IconButton>
            </LayerActions>
          </SlideItem>
        ))}
      </SlideList>
    </div>
  );
};
