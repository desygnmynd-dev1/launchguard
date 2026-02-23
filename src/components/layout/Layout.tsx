import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  // =========================
  // DESKTOP LAYOUT
  // =========================
  if (isDesktop) {
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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "400",
                color: isActive ? "#4F46E5" : "black",
              })}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "400",
                color: isActive ? "#4F46E5" : "black",
              })}
            >
              Projects
            </NavLink>

            <NavLink
              to="/settings"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "400",
                color: isActive ? "#4F46E5" : "black",
              })}
            >
              Settings
            </NavLink>
          </VStack>
        </Box>

        {/* Content Area */}
        <Box flex="1" p={8}>
          <Outlet />
        </Box>
      </Flex>
    );
  }

  // =========================
  // MOBILE LAYOUT
  // =========================
  return (
    <Box minH="100vh" bg="gray.100">
      {/* Header with Hamburger */}
      <HStack
        px={4}
        py={4}
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        justify="space-between"
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="ghost"
          />
          <MenuList>
            <MenuItem as={NavLink} to="/">
              Dashboard
            </MenuItem>
            <MenuItem as={NavLink} to="/projects">
              Projects
            </MenuItem>
            <MenuItem as={NavLink} to="/settings">
              Settings
            </MenuItem>
          </MenuList>
        </Menu>

        <Text fontWeight="semibold">LaunchGuard</Text>
      </HStack>

      {/* Visible Navigation Links */}
      <Box bg="white" px={4} py={4} borderBottom="1px" borderColor="gray.200">
        <VStack align="start" spacing={4}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "600" : "400",
              background: isActive ? "#E2E8F0" : "transparent",
              padding: "8px 12px",
              borderRadius: "8px",
              width: "100%",
            })}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              fontWeight: isActive ? "600" : "400",
              background: isActive ? "#E2E8F0" : "transparent",
              padding: "8px 12px",
              borderRadius: "8px",
              width: "100%",
            })}
          >
            Projects
          </NavLink>

          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              fontWeight: isActive ? "600" : "400",
              background: isActive ? "#E2E8F0" : "transparent",
              padding: "8px 12px",
              borderRadius: "8px",
              width: "100%",
            })}
          >
            Settings
          </NavLink>
        </VStack>
      </Box>

      {/* Dynamic Content Area */}
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}