import React from 'react'
import {
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

const Tool = ({tool, fontColor}) => {
    return (
      <Card 
        w="100%" 
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
        <CardHeader pb={4}>
          <Center mb={4}>
            <Box
              w="120px"
              h="60px"
              position="relative"
            >
              <Image
                src={tool.image}
                alt={tool.name + " Logo"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Center>
          <Heading 
            size='md' 
            textAlign="center"
            fontWeight="600"
            color="gray.900"
            fontSize="lg"
          >
            {tool.name}
          </Heading>
        </CardHeader>
        <CardBody flex="1">
          <Text 
            color="gray.600" 
            fontSize="sm"
            lineHeight="1.6"
          >
            {tool.summary}
          </Text>
        </CardBody>
        <CardFooter pt={4}>
          <a href={tool.link} style={{ width: '100%' }}>
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
              Learn More
            </Button>
          </a>
        </CardFooter>
      </Card>
    )
}

export default Tool