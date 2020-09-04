import React from "react";
import { Box } from "@chakra-ui/core";

export interface WrapperProps {
  variant?: "small" | "regular";
}

const Wrapper: React.SFC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      marginTop={8}
      mx="auto"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
