import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Container
} from "@chakra-ui/react";

export default function WorkWithBusinesses({
  title,
  subtitle,
  image,
  ...rest
}) {
  return (
    <Container maxW="7xl" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12 }}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row-reverse" }}
        wrap="no-wrap"
        gap={12}
        {...rest}
      >
        <Stack
          spacing={6}
          w={{ base: "100%", md: "48%" }}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="gray.900"
            letterSpacing="-0.02em"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            fontWeight="400"
            lineHeight="1.7"
          >
            {subtitle}
          </Text>
        </Stack>
        <Box
          w={{ base: "100%", md: "48%" }}
          display={{ base: "none", md: "block" }}
        >
          <Image src={image} alt={subtitle} w="100%" h="auto" objectFit="contain" />
        </Box>
      </Flex>
    </Container>
  );
}

WorkWithBusinesses.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

WorkWithBusinesses.defaultProps = {
  title: "Partnership Approach",
  subtitle:
    "Our methodology combines strategic consultation, custom implementation, and comprehensive training. We work closely with your team to ensure seamless integration and maximum ROI from AI investments.",
  image: "/svgs/business.svg",
};
