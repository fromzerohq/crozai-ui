"use client";

import React, { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  Controls,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "./archi.css";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";

import AnnotationNode from "./AnnotationNode";
import GraphNode from "./GraphNode";

import { rfStyle, gridOverlayStyle } from "./style";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  annotation: AnnotationNode,
  graphnode: GraphNode,
};

// const edgeTypes = {
//   button: ButtonEdge,
// };

const nodeClassName = (node) => node.type;

const DependencyGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const proOptions = { hideAttribution: true, account: "veerravi" };

  const onNodeClick = (event, node) => {
    alert(`You clicked on ${node.data.label}`);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className="archi">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodeClick={onNodeClick}
        style={rfStyle}
        fitView
        proOptions={proOptions}
        className="overview h-full w-full"
      >
        <div style={gridOverlayStyle}></div>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default DependencyGraph;
