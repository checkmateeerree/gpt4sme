import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Container
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  secondText,
  secondLink,
  ...rest
}) {
  return (
    <Container maxW="7xl" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12 }}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        wrap="no-wrap"
        minH={{ base: "60vh", md: "80vh" }}
        gap={12}
        {...rest}
      >
        <Stack
          spacing={8}
          w={{ base: "100%", md: "48%" }}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="700"
            color="gray.900"
            lineHeight="1.1"
            letterSpacing="-0.02em"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            fontWeight="400"
            lineHeight="1.7"
            maxW="600px"
          >
            {subtitle}
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} w="100%">
            <Link href={ctaLink}>
              <Button
                bg="gray.900"
                color="white"
                size="lg"
                px={8}
                py={6}
                rounded="none"
                fontWeight="500"
                letterSpacing="0.5px"
                textTransform="uppercase"
                fontSize="sm"
                _hover={{ bg: "gray.800" }}
                transition="all 0.2s"
                w={{ base: "100%", sm: "auto" }}
              >
                {ctaText}
              </Button>
            </Link>
            <Link href={secondLink}>
              <Button
                variant="outline"
                borderColor="gray.900"
                color="gray.900"
                size="lg"
                px={8}
                py={6}
                rounded="none"
                fontWeight="500"
                letterSpacing="0.5px"
                textTransform="uppercase"
                fontSize="sm"
                _hover={{ bg: "gray.50" }}
                transition="all 0.2s"
                w={{ base: "100%", sm: "auto" }}
              >
                {secondText}
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Box 
          w={{ base: "100%", md: "48%" }} 
          display={{ base: "none", md: "block" }}
        >
          <Image 
            src={image} 
            alt={subtitle}
            w="100%"
            h="auto"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </Container>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  secondText: PropTypes.string,
  secondLink : PropTypes.string
};

Hero.defaultProps = {
  title: "Enterprise AI Solutions for Modern Businesses",
  subtitle:
    "We partner with forward-thinking organizations to implement advanced AI technologies that drive efficiency, innovation, and competitive advantage.",
  image: "/svgs/artificial_intelligence.svg",
  ctaText: "Get Started",
  ctaLink: "/contact",
  secondText: "Learn More",
  secondLink: "/about"
};
