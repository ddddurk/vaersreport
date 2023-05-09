"use client";

import { colors } from "@lib";

const TreemapCustomContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  name
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors.sequential[2] : "none",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10)
        }}
      />
      {depth === 2 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
        >
          {name}
        </text>
      ) : null}
    </g>
  );
};

export default TreemapCustomContent;
