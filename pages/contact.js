import { useState } from "react";
import axios from 'axios'

import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Heading,
  Box,
  Center,
  Container
} from "@chakra-ui/layout";
import {
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  FormHelperText,
  IconButton,
  useToast
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon} from "@chakra-ui/icons";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Fade } from "@chakra-ui/react";

export default function ContactUs() {
  const toast = useToast()

  const createToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true
    })
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !name || !message){
      createToast("Contact Form Failed", "Please fill out all of the required fields", "error")
    }
    else if (!emailValidation.test(String(email).toLowerCase())) {
      createToast("Contact Form Failed", "The email entered is invalid", "error")
    }
    try {
      //const res = await axios.post("/api/sendemail", {name, email, message})
      createToast("Message Sent!", "Your message has successfully sended", "success")
    }
    catch (error) {
      console.log(error);
      createToast("Contact Form Failed", "Something went wrong, try again later.", "error")
      return
    }

  }

  return (
    <Box py={{ base: 12, md: 20 }} bg="white">
      <Container maxW="6xl" px={{ base: 6, md: 12 }}>
        <Stack spacing={12}>
          <Box textAlign="center" maxW="2xl" mx="auto">
            <Heading 
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="700"
              color="gray.900"
              letterSpacing="-0.02em"
              mb={4}
            >
              Get In Touch
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              lineHeight="1.7"
            >
              Connect with our team to discuss how we can help transform your business with AI.
            </Text>
          </Box>

          <Flex 
            justify="center" 
            direction={{ base: "column", lg: "row" }}
            gap={12}
          >
            <Box 
              flex="1" 
              maxW={{ base: "100%", lg: "600px" }}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              p={{ base: 8, md: 12 }}
            >
              <Fade in>
                <Stack spacing={6}>
                  <Heading size="lg" fontWeight="600" color="gray.900">
                    Send a Message
                  </Heading>
                  <FormControl id="name">
                    <Input 
                      type="name" 
                      placeholder="Full Name" 
                      onChange={handleNameChange} 
                      required
                      rounded="none"
                      borderColor="gray.300"
                      _focus={{ borderColor: "gray.900", boxShadow: "none" }}
                    />
                  </FormControl>
                  <FormControl id="email">
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      onChange={handleEmailChange} 
                      required
                      rounded="none"
                      borderColor="gray.300"
                      _focus={{ borderColor: "gray.900", boxShadow: "none" }}
                    />
                    <FormHelperText fontSize="xs" color="gray.500">
                      We&apos;ll never share your email.
                    </FormHelperText>
                  </FormControl>
                  <FormControl id="message">
                    <Textarea 
                      placeholder="Your Message" 
                      onChange={handleMessageChange} 
                      required
                      rows={6}
                      rounded="none"
                      borderColor="gray.300"
                      _focus={{ borderColor: "gray.900", boxShadow: "none" }}
                    />
                  </FormControl>
                  <Button 
                    bg="gray.900"
                    color="white"
                    onClick={handleSubmit}
                    size="lg"
                    rounded="none"
                    fontWeight="500"
                    letterSpacing="0.5px"
                    textTransform="uppercase"
                    fontSize="sm"
                    _hover={{ bg: "gray.800" }}
                    transition="all 0.2s"
                    w="100%"
                  >
                    Send Message
                  </Button>
                </Stack>
              </Fade>
            </Box>
            
            <Stack
              display={{ base: "none", lg: "flex" }}
              spacing={8}
              flex="1"
              maxW="400px"
              justify="center"
            >
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.500" mb={2} letterSpacing="0.5px" textTransform="uppercase">
                  Location
                </Text>
                <Text fontSize="lg" color="gray.900" fontWeight="400">
                  New Jersey, United States
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.500" mb={2} letterSpacing="0.5px" textTransform="uppercase">
                  Phone
                </Text>
                <Text fontSize="lg" color="gray.900" fontWeight="400">
                  646-709-0638
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" color="gray.500" mb={2} letterSpacing="0.5px" textTransform="uppercase">
                  Email
                </Text>
                <Text fontSize="lg" color="gray.900" fontWeight="400">
                  gpt4sme@gmail.com
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
