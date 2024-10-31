import { memo } from "react";
import classNames from "classnames";

function GraphNode({ data, selected }) {
  return (
    <div className="graph-node">
      <div style={{ padding: 6, display: "flex" }}>
        <button
          className={classNames(
            "rounded-xl border border-white px-3 py-2 font-nacelle text-sm transition-all",
            {
              "bg-gradient-to-r from-indigo-500 to-purple-500 text-white":
                selected, // Filled gradient for selected
              "bg-transparent text-white hover:bg-white/10": !selected, // Transparent for unselected
            },
          )}
        >
          <div>{data.label.toUpperCase()}</div>{" "}
        </button>
      </div>
    </div>
  );
}

export default memo(GraphNode);
