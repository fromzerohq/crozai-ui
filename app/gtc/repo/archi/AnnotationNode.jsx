import { memo } from "react";
import classNames from "classnames";

function AnnotationNode({ data, selected }) {
  return (
    <div className="annotation w-16">
      <div style={{ padding: 6, display: "flex" }}>
        <div style={{ marginRight: 4 }}>{data.level}.</div>
        <div>{data.label}</div>
      </div>
      {data.arrowStyle && (
        <div className="arrow" style={data.arrowStyle}>
          ⤹
        </div>
      )}
    </div>
  );
}

export default memo(AnnotationNode);
