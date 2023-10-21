import React from 'react'
import {
    Box,
    Card,
} from "@chakra-ui/react";
import Image from "next/image";

const Company = ({company}) => {
    return (
      <Card height="100px" border="none" shadow="none">
          <Box border="none" padding="20px">
              <Image
                src={company.image}
                alt={company.name + " Logo"}
                layout="fill"
                objectFit="contain"
              />
          </Box>
          
          
             
      </Card>
     
    )
}

export default Company;