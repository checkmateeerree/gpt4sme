import {
  Box,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      bg="white"
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}
      >
        <Text 
          fontSize="sm" 
          color="gray.600"
          fontWeight="400"
        >
          © 2024 GPT4SME. All rights reserved.
        </Text>
        <Text 
          fontSize="sm" 
          color="gray.500"
          fontWeight="400"
        >
          Enterprise AI Solutions
        </Text>
      </Container>
    </Box>
  );
}