import {
  Flex,
  Wrap,
  WrapItem,
  Stack,
  Heading,
  Center,
  Button,
  Box
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import Tool from "./Tool";
import AIToolsList from "../../../utils/AITools/LandingPageAIToolsList";

const AITools = ({ tools, moreToolsLink }) => {
  return (
    <Stack py="10" spacing="10" px="20px">
      <Center>
        <Heading color="black" as="h2" fontSize="24px">AI Services That We Teach</Heading>
      </Center>

      <Wrap spacing="30px" justify="center">
        {tools.map((tool) => {
          return (
            <Tool tool={tool} key={tool.name} fontColor="white"/>
          );
        })}
      </Wrap>
      <Center>
        <Link href={moreToolsLink}>
          <Button size="lg" variant="outline" colorScheme="teal" color="white">More Services</Button>
        </Link>
      </Center>
    </Stack>
  );
};

export default AITools;

AITools.propTypes = {
  tools: PropTypes.array,
  moreToolsLink: PropTypes.string
};

AITools.defaultProps = {
  tools: AIToolsList,
  moreToolsLink: "/resources/services"
};
