import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Badge,
  VStack,
} from "@chakra-ui/react";

export default function Projects() {
  return (
    <Box>
      <Heading size="lg" mb={6}>
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box bg="white" p={6} rounded="xl" shadow="sm">
          <VStack align="start" spacing={3}>
            <Heading size="md">Website Redesign</Heading>
            <Text fontSize="sm" color="gray.500">
              Production deployment monitoring
            </Text>
            <Badge colorScheme="green">Active</Badge>
            <Button size="sm" colorScheme="brand">
              View Details
            </Button>
          </VStack>
        </Box>

        <Box bg="white" p={6} rounded="xl" shadow="sm">
          <VStack align="start" spacing={3}>
            <Heading size="md">API Migration</Heading>
            <Text fontSize="sm" color="gray.500">
              Backend infrastructure upgrade
            </Text>
            <Badge colorScheme="yellow">In Progress</Badge>
            <Button size="sm" colorScheme="brand">
              View Details
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}