import {
  Stack,
  Heading,
  Box,
  Container,
  SimpleGrid,
  Center,
  Button
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Tool from "./Tool";
import AIToolsList from "../../../utils/AITools/LandingPageAIToolsList";

const AITools = ({ tools, moreToolsLink }) => {
  return (
    <Box bg="white" py={{ base: 16, md: 20 }}>
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
              AI Solutions Portfolio
            </Heading>
            <Box 
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              lineHeight="1.7"
            >
              Strategic AI implementations designed to drive enterprise transformation.
            </Box>
          </Box>

          <SimpleGrid 
            columns={{ base: 1, sm: 2, lg: 3 }} 
            spacing={{ base: 8, md: 10 }}
          >
            {tools.map((tool) => {
              return (
                <Tool tool={tool} key={tool.name} fontColor="black"/>
              );
            })}
          </SimpleGrid>
          
          <Center>
            <Link href={moreToolsLink}>
              <Button 
                size="lg"
                variant="outline"
                borderColor="gray.900"
                color="gray.900"
                rounded="none"
                fontWeight="500"
                letterSpacing="0.5px"
                textTransform="uppercase"
                fontSize="sm"
                px={8}
                py={6}
                _hover={{ bg: "gray.50" }}
                transition="all 0.2s"
              >
                View All Services
              </Button>
            </Link>
          </Center>
        </Stack>
      </Container>
    </Box>
  );
};

export default AITools;

AITools.propTypes = {
  tools: PropTypes.array,
  moreToolsLink: PropTypes.string
};

AITools.defaultProps = {
  tools: AIToolsList,
  moreToolsLink: "/services"
};
