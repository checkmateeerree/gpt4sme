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
  import Tool from "../../components/landing_page/AI_Tools/Tool";
  import AIToolsList from "../../utils/AITools/LandingPageAIToolsList";
  
  const AIServices = ({ tools }) => {
    return (
      <Stack bgColor="white" py="10" spacing="10">
        <Center px="50px">
          <Heading color="black" fontSize="30px" textAlign="center">A Comprehensive List of AI Services That Will Automate your Business Functions</Heading>
        </Center>
        <Box>

        </Box>
        <Wrap spacing="30px" justify="center">
          {tools.map((tool) => {
            return (
                
                    <Tool tool={tool} key={tool.name} fontColor="black"/>
              
                
            );
          })}
        </Wrap>
      
      </Stack>
    );
  };
  
  export default AIServices;
  
  AIServices.propTypes = {
    tools: PropTypes.array,
  };
  
  AIServices.defaultProps = {
    tools: AIToolsList
  };
  