import React, { useState } from 'react'
import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Container,
  useToast
} from '@chakra-ui/react'
import Head from 'next/head'

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const registerNewsLetter = async () => {
    if(!validateEmail(email)){
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribeUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      });
      const data = await response.json();
      if (data.success){
        toast({
          title: 'Successfully Subscribed',
          description: 'Thank you for subscribing to our newsletter.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setEmail('');
        setTimeout(() => {
          window.location = '/';
        }, 2000);
      } else {
        toast({
          title: 'Subscription Failed',
          description: 'There was an error. Please try again later or contact us at gpt4sme@gmail.com',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Subscription Failed',
        description: 'There was an error. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Newsletter Subscription | GPT4SME</title>
        <meta name="description" content="Subscribe to GPT4SME newsletter for insights on enterprise AI solutions and strategic implementation." />
      </Head>
      <Box bg="white" py={{ base: 16, md: 24 }} minH="70vh">
        <Container maxW="2xl" px={{ base: 6, md: 12 }}>
          <Stack spacing={10} align="center" textAlign="center">
            <Box>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="700"
                color="gray.900"
                letterSpacing="-0.02em"
                mb={4}
              >
                Stay Informed
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.600"
                lineHeight="1.7"
                maxW="600px"
              >
                Subscribe to receive strategic insights, industry updates, and exclusive content on enterprise AI implementation.
              </Text>
            </Box>

            <Box
              w="100%"
              maxW="600px"
              border="1px solid"
              borderColor="gray.200"
              p={{ base: 8, md: 12 }}
            >
              <Stack spacing={6}>
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color="gray.500"
                    mb={2}
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                  >
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="lg"
                    rounded="none"
                    borderColor="gray.300"
                    _focus={{
                      borderColor: "gray.900",
                      boxShadow: "none",
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        registerNewsLetter();
                      }
                    }}
                  />
                </Box>
                <Button
                  bg="gray.900"
                  color="white"
                  size="lg"
                  rounded="none"
                  fontWeight="500"
                  letterSpacing="0.5px"
                  textTransform="uppercase"
                  fontSize="sm"
                  w="100%"
                  _hover={{ bg: "gray.800" }}
                  transition="all 0.2s"
                  onClick={registerNewsLetter}
                  isLoading={isLoading}
                  loadingText="Subscribing..."
                >
                  Subscribe
                </Button>
                <Text fontSize="xs" color="gray.500" textAlign="center">
                  We respect your privacy. Unsubscribe at any time.
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}