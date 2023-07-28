import { Flex, Text, Wrap, WrapItem, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link"
import React from "react";

export default function CallToAction() {
  return (
    <Flex bgColor="#F5F5F5" px={4} py={16} justify="center">
        <Stack>
        <Text fontSize={{ base: "md", md: "xl", lg: "2xl" }} my="auto" fontWeight="medium">
            Sign up to our email newsletter to access our latest resources and features!
        </Text>
    
        <Wrap my="auto" spacing="12px" justify="center">
        <WrapItem>
          <Button
            colorScheme="blue"
            borderRadius="8px"
            variant="outline"
            py="4"
            px="4"
            lineHeight="1"
          >
            <Link href="/newsletter">
                Join Today  
            </Link>
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            colorScheme="teal"
            borderRadius="8px"
            variant="outline"
            py="4"
            px="4"
            lineHeight="1"
          >
            <Link href="/contact">
                Contact Us 
            </Link>
          </Button>
        </WrapItem>
      </Wrap>
      </Stack>
    </Flex>
  );
}
