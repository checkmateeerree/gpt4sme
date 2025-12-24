import React from 'react'
import { Stack, Box, Heading, Center, SimpleGrid, Container } from '@chakra-ui/react';
import Company from './Company.js';
import CompanyList from "../../../utils/LandingPageCompanyList.js";
import PropTypes from "prop-types";

export default function Testimonials(props){
 
  return (
    <Box bg="gray.50" py={{ base: 16, md: 20 }}>
      <Container maxW="7xl" px={{ base: 6, md: 12 }}>
        <Stack spacing={12}>
          <Center>
            <Heading 
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="700"
              color="gray.900"
              letterSpacing="-0.02em"
              textAlign="center"
            >
              Trusted by Industry Leaders
            </Heading>
          </Center>
          <SimpleGrid spacing={{ base: 8, md: 12 }} columns={[2, null, 4]}>
            {props.companies.map((company) => {
              return (
                <Company company={company} key={company.name}/>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
    
  )
}

Testimonials.propTypes = {
  companies: PropTypes.array,
};

Testimonials.defaultProps = {
  companies: CompanyList
};