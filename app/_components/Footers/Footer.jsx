import {
  Box,
  Container,
  Grid,
  GridItem,
  Group,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <Box as={"footer"} bg="#111827" color="#eee" w={"100%"} py="32px">
      <Container>
        <Grid templateColumns="repeat(2, 1fr)" p={6} px={16} gap={24}>
          <GridItem>
            <Link href="/" style={{ textDecoration: "none" }}>
              Logo
            </Link>
            <Text mt={4} fontSize="sm" color="#ccc">
              The easiest way to create professional product mockups for your
              business or clients.
            </Text>
            <HStack mt={4} spacing={4}>
              <Link href="/">
                <FaFacebook />
              </Link>
              <Link href="/">
                <FaTwitter />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaYoutube />
              </Link>
            </HStack>
          </GridItem>
          <GridItem>
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
              <GridItem w="100%">
                <Text fontWeight="bold">Quick Links</Text>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Home
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Mockups
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Design
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Logos
                </Link>
              </GridItem>
              <GridItem w="100%">
                <Text fontWeight="bold">Quick Links</Text>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Home
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Mockups
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Design
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Logos
                </Link>
              </GridItem>
              <GridItem w="100%">
                <Text fontWeight="bold">Quick Links</Text>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Home
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Mockups
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Design
                </Link>
                <Link href="/" style={{ display: "block", marginTop: "8px" }}>
                  Logos
                </Link>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
