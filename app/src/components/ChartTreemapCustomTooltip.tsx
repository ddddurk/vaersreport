"use client";

import { getNumberFormatted } from "@lib";

const TreemapCustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="pointer-events-none transition-[transform_400ms_ease_0s]">
        <div className="whitespace-nowrap border border-[rgb(204,_204,_204)] bg-white p-[0.625rem]">
          <p className="recharts-tooltip-label">
            {payload[0].payload.root.name}
          </p>
          <ul className="recharts-tooltip-item-list">
            <li className="recharts-tooltip-item">
              <span className="recharts-tooltip-item-name">
                {payload[0].payload.name}
              </span>
              <span className="recharts-tooltip-item-separator">
                &nbsp;:&nbsp;
              </span>
              <span className="recharts-tooltip-item-value">
                {getNumberFormatted(payload[0].value)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

export default TreemapCustomTooltip;
