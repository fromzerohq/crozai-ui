// components/Editor/LayersList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronRight, Eye, Lock, Trash2, Type, Image, Folder, Layout, Shapes } from 'lucide-react';

const LayerGroup = styled.div`
  margin-bottom: 16px;
`;

const LayerGroupHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 8px;
  font-weight: 500;
  color: #3c4043;
  transition: all 0.2s;
  
  &:hover {
    background: #f1f3f4;
  }
`;

const LayerItem = styled.div`
  padding: 8px 12px;
  margin: 4px 0;
  background: ${props => props.active ? '#e8f0fe' : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.active ? '#e8f0fe' : '#f5f5f5'};
  }
`;

const LayerActions = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${LayerItem}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.button`
  width: 28px;
  height: 28px;
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

const LayerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5f6368;
`;

const SubLayers = styled.div`
  padding-left: 24px;
`;

export const LayersList = ({ selectedLayer, onSelectLayer }) => {
  const [expandedGroups, setExpandedGroups] = useState(['page1', 'page2']);
  
  const layers = [
    {
      id: 'page1',
      name: 'Page 1',
      items: [
        { id: 'header', name: 'Header Text', type: 'text', locked: false, visible: true },
        { id: 'main-image', name: 'Main Image', type: 'image', locked: false, visible: true },
        { id: 'description', name: 'Description', type: 'text', locked: false, visible: true },
        { 
          id: 'shapes-group',
          name: 'Shapes',
          type: 'group',
          items: [
            { id: 'rect1', name: 'Rectangle 1', type: 'shape', locked: false, visible: true },
            { id: 'circle1', name: 'Circle 1', type: 'shape', locked: false, visible: true },
          ]
        }
      ]
    },
    {
      id: 'page2',
      name: 'Page 2',
      items: [
        { id: 'gallery', name: 'Gallery', type: 'group', locked: false, visible: true },
        { id: 'caption', name: 'Caption', type: 'text', locked: true, visible: true },
        { id: 'template', name: 'Template', type: 'template', locked: false, visible: true }
      ]
    }
  ];

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => 
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const getLayerIcon = (type) => {
    switch (type) {
      case 'text':
        return <Type size={16} />;
      case 'image':
        return <Image size={16} />;
      case 'group':
        return <Folder size={16} />;
      case 'shape':
        return <Shapes size={16} />;
      case 'template':
        return <Layout size={16} />;
      default:
        return null;
    }
  };

  const renderLayer = (layer, depth = 0) => (
    <LayerItem
      key={layer.id}
      active={selectedLayer === layer.id}
      onClick={() => onSelectLayer(layer.id)}
      style={{ paddingLeft: `${12 + depth * 20}px` }}
    >
      <LayerIcon>
        {getLayerIcon(layer.type)}
      </LayerIcon>
      <span style={{ flex: 1 }}>{layer.name}</span>
      <LayerActions>
        <IconButton active={layer.visible}>
          <Eye size={16} />
        </IconButton>
        <IconButton active={layer.locked}>
          <Lock size={16} />
        </IconButton>
        <IconButton>
          <Trash2 size={16} />
        </IconButton>
      </LayerActions>
    </LayerItem>
  );

  const renderGroup = (group) => {
    const isExpanded = expandedGroups.includes(group.id);

    return (
      <LayerGroup key={group.id}>
        <LayerGroupHeader onClick={() => toggleGroup(group.id)}>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <span style={{ marginLeft: 8 }}>{group.name}</span>
        </LayerGroupHeader>
        
        {isExpanded && (
          <SubLayers>
            {group.items.map(item => 
              item.type === 'group' 
                ? renderGroup(item)
                : renderLayer(item, 1)
            )}
          </SubLayers>
        )}
      </LayerGroup>
    );
  };

  return (
    <div>
      {layers.map(layer => renderGroup(layer))}
    </div>
  );
};
