import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <Flex minH="100vh" bg="gray.100">
      {/* Sidebar */}
      <Box
        w="260px"
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        p={6}
      >
        <Text fontSize="xl" fontWeight="bold" mb={8}>
          LaunchGuard
        </Text>

        <VStack align="start" spacing={4}>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </VStack>
      </Box>

      {/* Main Content */}
      <Flex flex="1" direction="column">
        <HStack
          px={8}
          py={4}
          borderBottom="1px"
          borderColor="gray.200"
          bg="white"
          justify="space-between"
        >
          <Text fontWeight="semibold">Modern SaaS Platform</Text>
        </HStack>

        <Box p={8}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}