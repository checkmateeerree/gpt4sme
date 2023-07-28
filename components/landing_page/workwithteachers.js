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
  Wrap,
  WrapItem
} from "@chakra-ui/react";

export default function WorkWithTeachers({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      pt={12}
      px={8}
      mb={16}
      {...rest}
    >
      <Box
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        pl={{ md: 4, lg: 6 }}
      >
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="m"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        
      </Stack>
    </Flex>
  );
}

WorkWithTeachers.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

WorkWithTeachers.defaultProps = {
  title: "Working with businesses",
  subtitle:
    "working with businesses.",
  image: "/svgs/Online Math Class.svg",
  ctaText: "Learn More",
  ctaLink: "/about"
};
