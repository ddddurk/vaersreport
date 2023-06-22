"use client";

import type { SelectProps as ArkSelectProps } from "@ark-ui/react";
import {
  Select as ArkSelect,
  SelectContent,
  SelectLabel,
  SelectOption,
  SelectTrigger
} from "@ark-ui/react";
import { css } from "@panda/css";
import { panda } from "@panda/jsx";
import { IconSelector } from "@tabler/icons-react";
import type { ReactNode } from "react";

export interface SelectProps extends ArkSelectProps {
  options: string[] | { label: string; value: string }[];
}

export const Select = ({
  children,
  options,
  ...props
}: SelectProps) => (
  <ArkSelect {...props}>
    {({ selectedOption }) => (
      <>
        <SelectLabel className={css({ display: "none" })}>
          Year
        </SelectLabel>
        <SelectTrigger
          className={css({
            alignItems: "center",
            bg: "white",
            borderColor: "gray.200",
            borderStyle: "solid",
            borderWidth: "1px",
            cursor: "pointer",
            display: "flex",
            gap: "2",
            justifyContent: "space-between",
            pos: "relative",
            px: "4",
            py: "2",
            rounded: "xl",
            w: "40",
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
            w: "40"
          })}
        >
          {options.map((option) => (
            <SelectOption
              className={css({
                bg:
                  selectedOption.label === option.label ||
                  selectedOption.label === option
                    ? "blue.600"
                    : "inherit",
                color:
                  selectedOption.label === option.label ||
                  selectedOption.label === option
                    ? "white"
                    : "inherit",
                cursor: "pointer",
                fontWeight:
                  selectedOption.label === option.label ||
                  selectedOption.label === option
                    ? "bold"
                    : "inherit",
                px: "4",
                py: "2",
                _hover: {
                  bg:
                    selectedOption.label === option.label ||
                    selectedOption.label === option
                      ? "blue.600"
                      : "gray.100"
                }
              })}
              key={option.label || option}
              label={option.label || option}
              value={option.value || option}
            >
              {option.label || option}
            </SelectOption>
          ))}
          {children as ReactNode}
        </SelectContent>
      </>
    )}
  </ArkSelect>
);
