"use client";

import React from 'react';
import ReactFlow, { MiniMap, Controls, useNodesState, useEdgesState } from 'react-flow-renderer';

const initialElements = [
  { id: '1', data: { label: 'samples' }, position: { x: 250, y: 5 }, style: { backgroundColor: '#4f46e5', color: 'white', borderRadius: '5px' } },
  { id: '2', data: { label: 'auth-code' }, position: { x: 100, y: 100 }, style: { backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px' } },
  { id: '3', data: { label: 'refresh-token' }, position: { x: 250, y: 100 }, style: { backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px' } },
  { id: '4', data: { label: 'Config' }, position: { x: 150, y: 200 }, style: { backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px' } },
  { id: '5', data: { label: 'CustomConfig' }, position: { x: 150, y: 300 }, style: { backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px' } },
  { id: '6', data: { label: 'client-credentials' }, position: { x: 400, y: 100 }, style: { backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px' } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e1-6', source: '1', target: '6', animated: true },
];

const TreeDiagram = () => {
  const [nodes, setNodes] = useNodesState(initialElements.filter(e => !e.source));
  const [edges, setEdges] = useEdgesState(initialElements.filter(e => e.source));

  const onNodeClick = (event, node) => {
    alert(`You clicked on ${node.data.label}`);
    // Implement more complex logic for selection here
  };

  return (
    <div style={{ height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick} // Add the click handler
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default TreeDiagram;
