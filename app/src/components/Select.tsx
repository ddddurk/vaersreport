import type { SelectProps as ArkSelectProps } from "@ark-ui/react";
import {
  Select as ArkSelect,
  SelectContent,
  SelectOption,
  SelectTrigger
} from "@ark-ui/react";
import { css } from "@panda/css";
import { Box, panda } from "@panda/jsx";
import { IconSelector } from "@tabler/icons-react";
import type { ReactNode } from "react";

export interface SelectProps extends ArkSelectProps {
  options: { label: string; value: string }[];
}

export const Select = ({
  children,
  options,
  ...props
}: SelectProps) => (
  <ArkSelect {...props}>
    {({ selectedOption }) => (
      <Box pos="relative">
        <SelectTrigger
          className={css({
            alignItems: "center",
            bg: "white",
            borderColor: "gray.200",
            borderStyle: "solid",
            borderWidth: "1px",
            cursor: "pointer",
            display: "flex",
            fontSize: { base: "sm", md: "inherit" },
            gap: "2",
            justifyContent: "space-between",
            pb: "2",
            pl: "4",
            pr: "4",
            pt: "2",
            rounded: "xl",
            w: { base: "32", md: "40" },
            _focus: {
              outline: "none",
              ring: "none"
            },
            _hover: {
              bg: "gray.100"
            }
          })}
        >
          <panda.span fontWeight="bold">
            {selectedOption?.label}
          </panda.span>
          <IconSelector size={16} />
        </SelectTrigger>
        <SelectContent
          className={css({
            bg: "white",
            borderColor: "gray.200",
            borderStyle: "solid",
            borderWidth: "1px",
            maxH: "50vh",
            mt: "2",
            overflowY: "scroll",
            pos: "absolute",
            rounded: "xl",
            top: "16",
            w: { base: "32", md: "40" }
          })}
        >
          {options.map((option) => (
            <SelectOption
              className={css({
                bg:
                  selectedOption.label === option.label
                    ? "blue.600"
                    : "inherit",
                color:
                  selectedOption.label === option.label
                    ? "white"
                    : "inherit",
                cursor: "pointer",
                fontWeight:
                  selectedOption.label === option.label
                    ? "bold"
                    : "inherit",
                pb: "2",
                pl: "4",
                pr: "4",
                pt: "2",
                _hover: {
                  bg:
                    selectedOption.label === option.label
                      ? "blue.600"
                      : "gray.100"
                }
              })}
              key={option.label}
              label={option.label}
              value={option.value}
            >
              {option.label}
            </SelectOption>
          ))}
          {children as ReactNode}
        </SelectContent>
      </Box>
    )}
  </ArkSelect>
);
