import { token } from "@panda/tokens";

export const ChartTreemapCustomContent = ({
  depth,
  height,
  label,
  width,
  x,
  y
}: any) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill: depth < 2 ? token("colors.blue.500") : "none",
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
        {label}
      </text>
    ) : null}
  </g>
);
