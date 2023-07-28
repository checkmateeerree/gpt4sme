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

const AITools = ({ tools, moreToolsLink }) => {
  return (
    <Stack bgColor="rgba(74, 153, 211, 1)" py="10" spacing="10">
      <Center>
        <Heading color="white" fontSize="30px">AI Services That We Teach</Heading>
      </Center>

      <Wrap spacing="30px" justify="center">
        {tools.slice(0, 4).map((tool) => {
          return (
            <Tool tool={tool} key={tool.name}/>
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
  tools: [
    { 
      name: "Fotor AI", 
      image: "/ai_logos/fotor_logo.png",
      link: "https://www.fotor.com/",
    },
    { 
      name: "Flexclip AI", 
      image: "/ai_logos/flexclip_logo.png", 
      link: "https://flexclip.com/"
    },
    { 
      name: "Voicemaker AI", 
      image: "/ai_logos/voicemaker_logo.png",
      link: "https://voicemaker.in/"
    },
    {
      name: "Tabnine AI",
      image: "/ai_logos/tabnine_logo.png",
      link: "https://tabnine.com/"
    },
    { 
      name: "Postwise AI", 
      image: "/mostec-logo.png",
      link: "https://postwise.ai/"
    },
    { 
      name: "TLDV AI", 
      image: "/office_of_intramural.png",
      link: "https://TLDV.io/"
    }
  ],
  moreToolsLink: "/resources/services"
};
