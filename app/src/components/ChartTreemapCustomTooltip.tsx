"use client";

import { Box } from "@panda/jsx";
import { getNumberFormatted } from "@src/lib";

export const ChartTreemapCustomTooltip = ({
  active,
  payload
}) => {
  if (active && payload && payload.length) {
    return (
      <Box pointerEvents="none" transition="ease-in">
        <Box
          bg="white"
          borderColor="gray.200"
          borderStyle="solid"
          borderWidth="1px"
          p="0.625rem"
          whiteSpace="nowrap"
        >
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
        </Box>
      </Box>
    );
  }

  return null;
};
