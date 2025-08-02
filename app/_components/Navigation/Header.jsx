import {
  List,
  ListItem,
  Link,
  Button,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import Logo from "../Logo";

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      p={4}
      color="white"
    >
      <Box>
        <Logo />
      </Box>

      <Flex as="nav" gap={6} align="center">
        <List.Root
          display="flex"
          gap={6}
          styleType="none"
          m={0}
          flexDirection="row"
        >
          {["Home", "Mockup", "Design", "Logos"].map((item) => (
            <List.Item key={item} listStyle="none">
              <Link
                href="/"
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                {item}
              </Link>
            </List.Item>
          ))}
        </List.Root>

        <HStack spacing={4}>
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button colorScheme="teal" size="sm" px={6}>
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Header;
