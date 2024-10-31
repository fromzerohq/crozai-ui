"use client";

import React, { useState } from "react";
import ReactFlow, { addEdge, Controls, Background } from "react-flow-renderer";

const DependencyGraph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addNode = () => {
    const newNode = {
      id: generateId(),
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const addDependency = (sourceId, targetId) => {
    const newEdge = {
      id: `e${sourceId}-${targetId}`,
      source: sourceId,
      target: targetId,
      animated: true,
    };
    setEdges((eds) => addEdge(newEdge, eds));
  };

  const handleAddDependency = () => {
    if (nodes.length < 2) {
      alert("Add at least two nodes to create a dependency.");
      return;
    }

    const source = nodes[nodes.length - 2].id;
    const target = nodes[nodes.length - 1].id;
    addDependency(source, target);
  };``

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }} // Hides the React Flow attribution
      >
        <Controls />
        <Background />
      </ReactFlow>

      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
        <button onClick={addNode} style={{ marginRight: 5 }}>
          Add Node
        </button>
        <button onClick={handleAddDependency}>Add Dependency</button>
      </div>
    </div>
  );
};

export default DependencyGraph;
