import React from 'react'
import {
    Box,
    Card,
    Center,
} from "@chakra-ui/react";
import Image from "next/image";

const Company = ({company}) => {
    return (
      <Card 
        h="120px" 
        border="1px solid"
        borderColor="gray.200"
        shadow="none"
        rounded="none"
        _hover={{
          borderColor: "gray.400",
        }}
        transition="all 0.2s"
      >
        <Center h="100%" p={6}>
          <Box
            position="relative"
            w="100%"
            h="100%"
            filter="grayscale(100%)"
            opacity={0.6}
            _hover={{
              filter: "grayscale(0%)",
              opacity: 1,
            }}
            transition="all 0.3s"
          >
            <Image
              src={company.image}
              alt={company.name + " Logo"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Center>
      </Card>
    )
}

export default Company;