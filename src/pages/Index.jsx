import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to the React and Chakra UI Page
      </Heading>
      <Text fontSize="lg">This is a sample page built with React and Chakra UI.</Text>
    </Box>
  );
};

export default Index;
