import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  VStack,
  Divider,
} from "@chakra-ui/react";

export default function Settings() {
  return (
    <Box maxW="600px">
      <Heading size="lg" mb={6}>
        Settings
      </Heading>

      <VStack spacing={6} align="stretch">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="notifications" mb="0">
            Enable Notifications
          </FormLabel>
          <Switch id="notifications" />
        </FormControl>

        <Divider />

        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="darkmode" mb="0">
            Dark Mode
          </FormLabel>
          <Switch id="darkmode" />
        </FormControl>
      </VStack>
    </Box>
  );
}