import React from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

const guides = [
  {
    title: 'Data Analysis with GPT-4',
    description: 'Learn how to leverage GPT-4 for advanced data analysis, pattern recognition, and business intelligence insights.',
    slug: 'data-analysis',
    category: 'Analytics'
  },
  {
    title: 'Social Media Strategy with AI',
    description: 'Create comprehensive social media calendars and content strategies using AI-powered tools and automation.',
    slug: 'social-media-calendar',
    category: 'Marketing'
  },
  {
    title: 'Customer Service Automation',
    description: 'Implement AI-driven customer service solutions to improve response times and customer satisfaction.',
    slug: 'customer-service-automation',
    category: 'Operations'
  },
  {
    title: 'Document Processing & Analysis',
    description: 'Streamline document workflows with AI-powered processing, extraction, and intelligent document management.',
    slug: 'document-processing',
    category: 'Operations'
  }
];

export default function GuidesIndex() {
  return (
    <>
      <Head>
        <title>Enterprise AI Guides | GPT4SME</title>
        <meta name="description" content="Comprehensive guides on implementing AI solutions for enterprise operations, analytics, and automation." />
      </Head>
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl" px={{ base: 6, md: 12 }}>
          <Stack spacing={12}>
            <Box textAlign="center" maxW="3xl" mx="auto">
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="700"
                color="gray.900"
                letterSpacing="-0.02em"
                mb={4}
              >
                Enterprise AI Guides
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                lineHeight="1.7"
              >
                Comprehensive resources and strategic frameworks for implementing AI solutions across your organization.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {guides.map((guide) => (
                <Card
                  key={guide.slug}
                  border="1px solid"
                  borderColor="gray.200"
                  rounded="none"
                  shadow="none"
                  _hover={{
                    borderColor: "gray.900",
                    shadow: "md"
                  }}
                  transition="all 0.2s"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <CardHeader pb={2}>
                    <Text
                      fontSize="xs"
                      fontWeight="600"
                      color="gray.500"
                      letterSpacing="0.5px"
                      textTransform="uppercase"
                      mb={2}
                    >
                      {guide.category}
                    </Text>
                    <Heading
                      size="md"
                      fontWeight="600"
                      color="gray.900"
                      fontSize="xl"
                    >
                      {guide.title}
                    </Heading>
                  </CardHeader>
                  <CardBody flex="1">
                    <Text
                      fontSize="md"
                      color="gray.600"
                      lineHeight="1.7"
                    >
                      {guide.description}
                    </Text>
                  </CardBody>
                  <Box p={6} pt={0}>
                    <Link href={`/guides/${guide.slug}`}>
                      <Button
                        w="100%"
                        bg="gray.900"
                        color="white"
                        rounded="none"
                        fontWeight="500"
                        letterSpacing="0.5px"
                        textTransform="uppercase"
                        fontSize="xs"
                        _hover={{ bg: "gray.800" }}
                        transition="all 0.2s"
                      >
                        Read Guide
                      </Button>
                    </Link>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

