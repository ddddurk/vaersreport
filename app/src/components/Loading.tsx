import type { FlexProps } from "@panda/jsx";
import { Flex, panda } from "@panda/jsx";
import { useParams } from "@src/lib";

export interface LoadingProps extends FlexProps {}

export const Loading = ({
  children,
  ...props
}: LoadingProps) => {
  const { vaccine, year } = useParams();

  return (
    <Flex
      align="center"
      bg="white"
      h="screen"
      justify="center"
      left="0"
      pos="fixed"
      top="0"
      w="screen"
      {...props}
    >
      {children}
      <panda.span
        bottom="8"
        color="blue.600"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        pos="fixed"
        right="8"
      >
        {vaccine || ""}
        {year ? (vaccine ? `, ${year}` : year) : ""}
      </panda.span>
    </Flex>
  );
};
