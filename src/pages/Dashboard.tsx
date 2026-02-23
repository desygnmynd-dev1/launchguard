import { SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
      <Box bg="white" p={6} rounded="xl" shadow="sm">
        <Text fontSize="sm" color="gray.500">
          Active Projects
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          12
        </Text>
      </Box>

      <Box bg="white" p={6} rounded="xl" shadow="sm">
        <Text fontSize="sm" color="gray.500">
          System Health
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="green.400">
          Operational
        </Text>
      </Box>
    </SimpleGrid>
  );
}