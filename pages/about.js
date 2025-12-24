import React from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Divider
} from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | GPT4SME</title>
        <meta name="description" content="Learn about GPT4SME - delivering enterprise AI solutions and strategic implementation." />
      </Head>
      <Box bg="white">
        {/* Hero Section */}
        <Box bg="gray.900" py={{ base: 20, md: 32 }} color="white">
          <Container maxW="4xl" px={{ base: 6, md: 12 }}>
            <VStack spacing={6} textAlign="center">
              <Heading
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="700"
                letterSpacing="-0.03em"
                lineHeight="1.1"
              >
                About GPT4SME
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.300"
                lineHeight="1.7"
                maxW="2xl"
              >
                A specialized consultancy delivering enterprise-grade AI solutions that drive measurable business outcomes and competitive advantage.
              </Text>
            </VStack>
          </Container>
        </Box>

        <Container maxW="7xl" px={{ base: 6, md: 12 }}>
          {/* Mission & Approach */}
          <Box py={{ base: 16, md: 24 }}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }} alignItems="start">
              <VStack align="stretch" spacing={6}>
                <Box>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color="gray.500"
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                    mb={3}
                  >
                    Our Mission
                  </Text>
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="700"
                    color="gray.900"
                    letterSpacing="-0.02em"
                    mb={4}
                  >
                    Empowering Organizations Through Strategic AI
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight="1.8"
                  >
                    We empower organizations with strategic AI implementation that transforms operations, enhances efficiency, and creates sustainable competitive advantages in an increasingly digital marketplace.
                  </Text>
                </Box>
              </VStack>

              <VStack align="stretch" spacing={6}>
                <Box>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color="gray.500"
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                    mb={3}
                  >
                    Our Approach
                  </Text>
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="700"
                    color="gray.900"
                    letterSpacing="-0.02em"
                    mb={4}
                  >
                    Technical Excellence Meets Business Strategy
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    lineHeight="1.8"
                  >
                    We combine deep technical expertise with strategic business acumen to deliver AI solutions that align with organizational goals and drive measurable ROI.
                  </Text>
                </Box>
              </VStack>
            </SimpleGrid>
          </Box>

          <Divider borderColor="gray.200" />

          {/* Core Values */}
          <Box py={{ base: 16, md: 24 }}>
            <VStack spacing={12} align="stretch">
              <Box textAlign="center" maxW="2xl" mx="auto">
                <Text
                  fontSize="xs"
                  fontWeight="600"
                  color="gray.500"
                  letterSpacing="0.5px"
                  textTransform="uppercase"
                  mb={3}
                >
                  Core Values
                </Text>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="700"
                  color="gray.900"
                  letterSpacing="-0.02em"
                >
                  What Drives Us
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 12 }}>
                <VStack align="flex-start" spacing={4}>
                  <Box
                    w="48px"
                    h="48px"
                    bg="gray.900"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontSize="xl" color="white" fontWeight="700">E</Text>
                  </Box>
                  <Heading
                    fontSize="xl"
                    fontWeight="600"
                    color="gray.900"
                  >
                    Excellence
                  </Heading>
                  <Text
                    fontSize="md"
                    color="gray.600"
                    lineHeight="1.7"
                  >
                    We maintain the highest standards in every engagement, ensuring quality outcomes that exceed expectations.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={4}>
                  <Box
                    w="48px"
                    h="48px"
                    bg="gray.900"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontSize="xl" color="white" fontWeight="700">I</Text>
                  </Box>
                  <Heading
                    fontSize="xl"
                    fontWeight="600"
                    color="gray.900"
                  >
                    Integrity
                  </Heading>
                  <Text
                    fontSize="md"
                    color="gray.600"
                    lineHeight="1.7"
                  >
                    Transparent communication and ethical practices form the foundation of all our client relationships.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={4}>
                  <Box
                    w="48px"
                    h="48px"
                    bg="gray.900"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                  >
                    <Text fontSize="xl" color="white" fontWeight="700">I</Text>
                  </Box>
                  <Heading
                    fontSize="xl"
                    fontWeight="600"
                    color="gray.900"
                  >
                    Innovation
                  </Heading>
                  <Text
                    fontSize="md"
                    color="gray.600"
                    lineHeight="1.7"
                  >
                    We stay at the forefront of AI technology, continuously evolving our methodologies to deliver cutting-edge solutions.
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          <Divider borderColor="gray.200" />

          {/* Expertise */}
          <Box py={{ base: 16, md: 24 }}>
            <VStack spacing={12} align="stretch">
              <Box textAlign="center" maxW="2xl" mx="auto">
                <Text
                  fontSize="xs"
                  fontWeight="600"
                  color="gray.500"
                  letterSpacing="0.5px"
                  textTransform="uppercase"
                  mb={3}
                >
                  Our Expertise
                </Text>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="700"
                  color="gray.900"
                  letterSpacing="-0.02em"
                >
                  What We Deliver
                </Heading>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Strategic AI consulting and roadmap development
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Custom AI solution implementation and integration
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Enterprise workflow automation and optimization
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Team training and knowledge transfer programs
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Performance measurement and ROI analysis
                  </Text>
                </HStack>
                <HStack align="flex-start" spacing={4}>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.900"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text fontSize="md" color="gray.700" lineHeight="1.8" fontWeight="500">
                    Ongoing support and optimization
                  </Text>
                </HStack>
              </SimpleGrid>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
