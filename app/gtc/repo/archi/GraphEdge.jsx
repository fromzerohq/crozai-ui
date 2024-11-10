import React, { memo } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";

function GraphEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      {/* <circle r="2" fill="#ffffff" opacity="0.8">
        <animateMotion dur="1.5s" repeatCount="indefinite" path={edgePath} />
      </circle>
      <circle r="2" fill="#ffffff" opacity="0.6">
        <animateMotion
          dur="1.5s"
          repeatCount="indefinite"
          path={edgePath}
          begin="0.2s"
        />
      </circle> */}
      <polyline points="0,0 2,-3 4,0 2,3 6,0" fill="#00d1ff" opacity="0.8">
        <animateMotion dur="1s" repeatCount="indefinite" path={edgePath} />
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="0.3s"
          repeatCount="indefinite"
        />
      </polyline>
      <EdgeLabelRenderer></EdgeLabelRenderer>
    </>
  );
}

export default memo(GraphEdge);
