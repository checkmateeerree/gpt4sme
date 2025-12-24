import React from 'react'
import { Box, Center, Heading, Text, SimpleGrid, Container } from '@chakra-ui/react'
import CountUp from 'react-countup';

const Progress = () => {
  return (
    <Box bg="white" py={{ base: 16, md: 20 }}>
      <Container maxW="6xl" px={{ base: 6, md: 12 }}>
        <Center mb={12}>
          <Heading 
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            color="gray.900"
            letterSpacing="-0.02em"
          >
            Impact & Results
          </Heading>
        </Center>
        <SimpleGrid columns={[1, null, 2]} spacing={{ base: 12, md: 20 }}>
          <Box textAlign="center">
            <Text 
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} 
              fontWeight="700"
              color="gray.900"
              mb={4}
            >
              <CountUp enableScrollSpy={true} scrollSpyOnce start={0} end={15} delay={0} />
            </Text>
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              fontWeight="400"
              color="gray.600"
              letterSpacing="0.5px"
            >
              Enterprise Partners
            </Text>
          </Box>
          <Box textAlign="center">
            <Text 
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} 
              fontWeight="700"
              color="gray.900"
              mb={4}
            >
              $<CountUp enableScrollSpy={true} scrollSpyOnce start={0} end={25578} delay={0} />
            </Text>
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              fontWeight="400"
              color="gray.600"
              letterSpacing="0.5px"
            >
              Operational Savings Delivered
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Progress