"use client";
import {
  List,
  Link,
  Button,
  HStack,
  Flex,
  Box,
  InputGroup,
  Input,
  Container,
} from "@chakra-ui/react";
import Logo from "../Logo";
import { BiSearch } from "react-icons/bi";
import { ColorModeButton } from "@/components/ui/color-mode";

function Header() {
  return (
    <Container as="header">
      <Flex
        gap={24}
        align="center"
        justify="center"
        p={4}
        // color="white"
      >
        <Box>
          <Logo />
        </Box>

        <Box width="450px">
          <InputGroup startElement={<BiSearch />}>
            <Input placeholder="Search mockups..." />
          </InputGroup>
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
            <ColorModeButton />
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Header;
