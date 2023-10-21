import React from 'react'
import { Stack, Box, Heading, Center, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Company from './Company.js';
import CompanyList from "../../../utils/LandingPageCompanyList.js";
import PropTypes from "prop-types";

export default function Testimonials(props){
 
  return (
    <Box margin="0 auto" padding="50px">
      <Stack spacing="50px">
        <Center>
          <Heading fontSize="30px">These and Other Organizations Trust Us </Heading>
        </Center>
        <SimpleGrid spacing='40px' columns={[2, null, 3]}>
          {props.companies.map((company) => {
            return (
              <Company company={company} key={company.name}/>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Box>
    
  )
}

Testimonials.propTypes = {
  companies: PropTypes.array,
};

Testimonials.defaultProps = {
  companies: CompanyList
};