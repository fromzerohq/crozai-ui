import React from "react";
import { MarkerType } from "@xyflow/react";

export const nodes = [
  {
    id: "annotation-1",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 1,
      label: "Happy Diwali",
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-30px,10px) rotate(-80deg)",
      },
    },
    position: { x: 80, y: -30 },
  },
  {
    id: "1",
    type: "graphnode",
    data: { label: "samples" },
    position: { x: 50, y: 100 },
  },
  {
    id: "2",
    type: "graphnode",
    data: { label: "auth-code" },
    position: { x: 200, y: 50 },
  },
  {
    id: "3",
    type: "graphnode",
    data: { label: "refresh-token" },
    position: { x: 200, y: 150 },
  },
  {
    id: "4",
    type: "graphnode",
    data: { label: "Config" },
    position: { x: 350, y: 150 },
  },
  {
    id: "5",
    type: "graphnode",
    data: { label: "CustomConfig" },
    position: { x: 500, y: 150 },
  },
  {
    id: "6",
    type: "graphnode",
    data: { label: "msalApp.js" },
    position: { x: 350, y: 220 },
  },
  {
    id: "7",
    type: "graphnode",
    data: { label: "adalApp.js" },
    position: { x: 350, y: 280 },
  },
  {
    id: "8",
    type: "graphnode",
    data: { label: "client-credentials" },
    position: { x: 200, y: 300 },
  },
  {
    id: "9",
    type: "graphnode",
    data: { label: "lib" },
    position: { x: 50, y: 250 },
  },
  {
    id: "10",
    data: { label: "extensions" },
    type: "graphnode",
    position: { x: 50, y: 300 },
  },
  {
    id: "11",
    data: { label: "package.json" },
    type: "graphnode",
    position: { x: 50, y: 350 },
  },
];

export const edges = [
  {
    id: "e1-2",
    source: "1-1",
    target: "1-2",
    label: "edge",
    type: "smoothstep",
  },
  {
    id: "e1-3",
    source: "1-1",
    target: "1-3",
    animated: true,
    label: "animated edge",
  },
  {
    id: "e2-2",
    source: "1-2",
    target: "2-2",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2-2",
    target: "2-3",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-3",
    source: "2-3",
    sourceHandle: "a",
    target: "3-2",
    type: "button",
    animated: true,
    style: { stroke: "rgb(158, 118, 255)", strokeWidth: 2 },
  },
  {
    id: "e3-4",
    source: "2-3",
    sourceHandle: "b",
    target: "3-1",
    type: "button",
    style: { strokeWidth: 2 },
  },
];

// const initialElements = [

//   // Edges for relationships
//   { id: "e1-2", source: "1", target: "2", animated: true },
//   { id: "e1-3", source: "1", target: "3", animated: true },
//   { id: "e3-4", source: "3", target: "4", animated: true },
//   { id: "e4-5", source: "4", target: "5", animated: true },
//   { id: "e3-6", source: "3", target: "6", animated: true },
//   { id: "e3-7", source: "3", target: "7", animated: true },
//   { id: "e1-8", source: "1", target: "8", animated: true },
//   { id: "e1-9", source: "1", target: "9", animated: true },
//   { id: "e1-10", source: "1", target: "10", animated: true },
//   { id: "e1-11", source: "1", target: "11", animated: true },
// ];
