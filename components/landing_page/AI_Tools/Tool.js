import React from 'react'
import {
    WrapItem,
    Stack,
    Heading,
    Center,
    Button,
    Box
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'

const Tool = ({tool}) => {
    return (
        <WrapItem key={tool.name}>
              <Box 
                
              >
                <Stack>
                <a href={tool.link}>
                  <Center
                    style={{
                      width: "200px",
                      height: "100px",
                      position: "relative",
                      margin: "0 auto",
                      
                    }}
                   
                  >
                    <Image
                      src={tool.image}
                      alt={tool.name + " Logo"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Center>
                  <Center w="350px" color="white" paddingTop="15px">{tool.name}</Center>
                  </a>
                </Stack>
              </Box>
            </WrapItem>
    )
}

export default Tool
