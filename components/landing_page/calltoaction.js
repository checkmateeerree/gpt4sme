import { Flex, Text, Stack, Container, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link"
import React from "react";

export default function CallToAction() {
  return (
    <Box bg="gray.900" py={{ base: 16, md: 20 }}>
      <Container maxW="4xl" px={{ base: 6, md: 12 }}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="white"
            letterSpacing="-0.02em"
          >
            Ready to Transform Your Business?
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color="gray.300"
            maxW="600px"
          >
            Connect with our team to discuss how AI can drive your organization forward.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Link href="/contact">
              <Button
                bg="white"
                color="gray.900"
                size="lg"
                px={8}
                py={6}
                rounded="none"
                fontWeight="500"
                letterSpacing="0.5px"
                textTransform="uppercase"
                fontSize="sm"
                _hover={{ bg: "gray.100" }}
                transition="all 0.2s"
                w={{ base: "100%", sm: "auto" }}
              >
                Get In Touch
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                px={8}
                py={6}
                rounded="none"
                fontWeight="500"
                letterSpacing="0.5px"
                textTransform="uppercase"
                fontSize="sm"
                _hover={{ bg: "whiteAlpha.100" }}
                transition="all 0.2s"
                w={{ base: "100%", sm: "auto" }}
              >
                Newsletter
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
