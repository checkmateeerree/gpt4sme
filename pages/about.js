import { Heading, Flex, Text, VStack, Center, Box, Wrap} from "@chakra-ui/react";

export default function About() {
  return (
    <Center>
    <Flex justify="center" pb="50">
        <VStack spacing="20px" marginX="100px">
          <Box py="75px">
            <Heading textAlign="center">Introducing the Future</Heading>
            <Center maxWidth="50vw">
              <Text textAlign="center" pt="25px">At GPT4SME, we firmly believe that AI is not just the future but the present. As the business landscape continues to evolve rapidly, we recognize the immense potential AI holds for companies across all industries. Our aim is to democratize AI and make it accessible to organizations of all sizes, helping you innovate, streamline your business functions, and make efficient, data-driven decisions.
              </Text>
            </Center>
          </Box>
          <Box backgroundColor="blackAlpha.800" width="100vw" py="75px" px="25px">
            <Heading textAlign="center" size="lg" color="white" pb="30px">Who Are We?</Heading>
            
            <Wrap spacing="20px" justify="center" mb="-20px">
              <Box>
                <Text fontWeight="bold" color="white" fontSize="18">Eddie Mendel - Co-Founder/Program Director</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" color="white" fontSize="18">Alan Hu - Co-Founder/Technology Director</Text>
              </Box>
            </Wrap>

            <Text textAlign="center" color="white" pt="25px">Founded by Edward Mendel and Alan Hu, GPTS4ME is the result of our collective vision to harness the power of new AI to boost business success. We have assembled a talented team of like-minded individuals, all driven by the same passion for AI and its endless possibilities.
            </Text>
          </Box>
          <Box py="75px">
            <Heading textAlign="center" size="lg">What Do We Offer?</Heading>
            <Text textAlign="center" maxWidth="50vw" pt="25px">
            At GPT4SME, we specialize in providing tailor-made AI solutions to meet your specific needs. We believe in educating our clients about the services they require and seamlessly integrating them into their everyday business operations.

            We are excited about the prospect of collaborating with your esteemed company to unlock the full potential of AI for your business. Our services are designed to empower you to stay ahead in this ever-changing market and derive maximum value from AI technology.

            </Text>
          </Box>
        </VStack>
    </Flex>
    </Center>

  );
}
