import React, {useState} from 'react'
import { Box, Center, Heading, Text, SimpleGrid} from '@chakra-ui/react'
import CountUp from 'react-countup';

const Progress = () => {
  return (
    <Box margin="0 auto" justifyContent="center" width="100">
        <Center>
          <Heading fontSize="30px">Our Progress</Heading>
        </Center>
        <Center>
            <SimpleGrid columns={[1, null, 2]} spacing="100px" margin="50px">
                <Box fontSize="75px" fontWeight="bold" margin="auto">
                   <Center>
                   <CountUp  enableScrollSpy={true} scrollSpyOnce start={0} end={11} delay={0} fontSize="50px">
                    </CountUp>
                   </Center>
                    
                    <Center><Text fontSize="24px" fontWeight="light">Organizations Worked With</Text></Center>
                </Box>
                <Box fontSize="75px" >
                    <Center>
                    $<CountUp enableScrollSpy={true} scrollSpyOnce start={0} end={19785} delay={0} fontSize="50px" margin="auto">
                    </CountUp>
                    </Center>
                    <Center><Text fontSize="24px" fontWeight="light">Costs Saved</Text></Center>
                </Box>
            </SimpleGrid>
        </Center>
        
       
        
    </Box>
  )
}

export default Progress