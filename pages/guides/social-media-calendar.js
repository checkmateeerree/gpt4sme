import { Heading, Center, VStack } from "@chakra-ui/react";
import YouTube from 'react-youtube';

export default function SocialMediaCalendar() {
    return (
        <Center>
            <VStack spacing="60px" marginY="50px" marginX="20px">
                <Center>
                    <Heading> How to Create a Social Media Calendar with AI</Heading>
                    
                </Center>
                
                    <YouTube videoId="5q115FGMo9M" opts={{
                        height: "500px",
                        width: "1000px"
                    }}
                    />
               
                
            </VStack>
        </Center>
        
       
    )
}