"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  addEdge,
  Controls,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "./archi.css";

import useFetchGraphData from "./useFetchGraphData";

import AnnotationNode from "./AnnotationNode";
import GraphNode from "./GraphNode";
import GraphEdge from "./GraphEdge";

import { rfStyle, gridOverlayStyle } from "./style";
import "@xyflow/react/dist/style.css";
import type { memo } from "react";

const nodeTypes = {
  annotation: AnnotationNode,
  graphnode: GraphNode,
};

const edgeTypes = {
  graphedge: GraphEdge,
};

const DependencyGraph = ({ datasetCode }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [clickedNodes, setClickedNodes] = useState([]); // State to store clicked nodes

  const {
    nodes: apiNodes,
    edges: apiEdges,
    loading,
    error,
  } = useFetchGraphData(datasetCode);

  const proOptions = { hideAttribution: true, account: "veerravi" };

  // Handle node click and toggle selection
  const onNodeClick = (event, node) => {
    setClickedNodes((prevClickedNodes) => {
      if (prevClickedNodes.some((clickedNode) => clickedNode.id === node.id)) {
        // Remove node if it's already selected
        return prevClickedNodes.filter(
          (clickedNode) => clickedNode.id !== node.id,
        );
      } else {
        // Add node if it's not selected
        return [...prevClickedNodes, node];
      }
    });
  };

  useEffect(() => {
    console.log("selected nodes", clickedNodes);
  }, [clickedNodes]);

  useEffect(() => {
    if (!loading && apiNodes && apiEdges) {
      setNodes(apiNodes);
      setEdges(apiEdges);
    }
  }, [loading, apiNodes, apiEdges, setNodes, setEdges]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
          },
          selected: clickedNodes.some(
            (clickedNode) => clickedNode.id === node.id,
          ), // Set selected prop based on clickedNodes state
        }))}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick} // Use onNodeClick for toggling selection
        fitView
        proOptions={proOptions}
      >
        <Controls />
      </ReactFlow>
      <div style={gridOverlayStyle}></div>
      {/* <Controls />
      </ReactFlow> */}
    </>
  );
};

export default DependencyGraph;
