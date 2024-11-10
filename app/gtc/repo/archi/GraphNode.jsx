import { memo } from "react";
import classNames from "classnames";
import { Handle, Position } from "@xyflow/react";

const handleStyle = {
  backgroundColor: "#6366F1", // Indigo background
  width: "2px",
  height: "2px",
  border: ".1px solid white",
};

function GraphNode({ data, selected }) {
  const isFile = data.type === "file";
  const buttonStyle = classNames(
    "rounded-md border border-white px-3 py-1 font-nacelle text-sm transition-all relative group",
    {
      "bg-gradient-to-r from-indigo-500 to-purple-500 text-white":
        selected && !isFile,
      "bg-transparent text-white hover:bg-white/10": !selected && !isFile,
      "bg-gradient-to-r from-indigo-500 via-gray-800 to-purple-500 text-white":
        selected && isFile,
      "bg-gray-700 text-white hover:bg-gray-600": !selected && isFile,
    },
  );

  const labelStyle = {
    fontStyle: isFile ? "italic" : "normal",
    fontWeight: isFile ? "normal" : "bold",
    color: isFile ? "#D1D5DB" : "white",
  };

  return (
    <div className="graph-node relative">
      <div style={{ padding: 0, display: "flex", alignItems: "center" }}>
        {/* Button with tooltip on hover */}
        <button className={buttonStyle}>
          <div style={labelStyle}>
            {isFile ? `📄 ${data.label}` : `${data.label.toUpperCase()}`}
          </div>

          {/* Tooltip with Smooth Arrow */}
          {data.description && (
            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-xs -translate-x-1/2 transform rounded-md bg-[#e1f4ec] p-2 text-xs text-black opacity-0 shadow-lg backdrop-blur-md transition duration-500 ease-out group-hover:translate-y-1 group-hover:scale-100 group-hover:opacity-100">
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 transform bg-[#e1f4ec] shadow-lg"></div>

              {/* Tooltip Content */}
              <div className="relative z-10">
                <span>{data.description}</span>
              </div>
            </div>
          )}
        </button>

        {/* Conditionally render left and right handles based on whether the node is root or leaf */}
        {!data.isRoot && (
          <Handle type="target" position={Position.Left} style={handleStyle} />
        )}
        {!data.isLeaf && (
          <Handle type="source" position={Position.Right} style={handleStyle} />
        )}
      </div>
    </div>
  );
}

export default memo(GraphNode);
