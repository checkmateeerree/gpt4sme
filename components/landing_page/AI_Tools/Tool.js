import React from 'react'
import {
    WrapItem,
    Stack,
    Heading,
    Center,
    Button,
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'

const Tool = ({tool, fontColor}) => {
    return (

      <Card width="350px">
        <CardHeader>

          <Heading size='md' textAlign="center">{tool.name}</Heading>
          
        </CardHeader>
        <Center
                    style={{
                      width: "100px",
                      height: "50px",
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
        <CardBody>
          <Text color="black">{tool.summary}</Text>
        </CardBody>
        <CardFooter>
          <a href={tool.link}>
            <Button>Learn More</Button>
          </a>
        </CardFooter>
      </Card>
    
    )
}

export default Tool


/*


const Tool = ({tool, fontColor}) => {
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
                  <Center w="350px" color={fontColor} paddingTop="15px">{tool.name}</Center>
                  </a>
                </Stack>
              </Box>
            </WrapItem>
    )
}

export default Tool
*/