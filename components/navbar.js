import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Heading, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";


const MenuIt = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 8, md: 0 }}
      mr={{ base: 0, md: isLast ? 0 : 12 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="1000"
      mb={8}
      p={8}
      shadow="base"
      bg={["white", "white", "white", "white"]}
      color={["black", "black", "primary.700", "primary.700"]}
    >
      <Flex align="center">
        <Heading size="md">
          <Link href="/">GPT4SME</Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", lg: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuIt to="/">Home</MenuIt>
          {//<MenuIt to="/about">About</MenuIt>
}
          <MenuIt to="/contact">Contact Us</MenuIt>
          <MenuIt to="/services">AI Tools</MenuIt>
          <Flex mb={{ base: 8, sm: 8, md: 0 }}
            mr={{ base: 0, md: 12 }}>
            <Menu>
              <MenuButton>
                Our Guides <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <Link href="/guides/data-analysis">
                  <MenuItem>Data Analysis With GPT-4</MenuItem>
                </Link>
                <Link href="/guides/social-media-calendar">
                  <MenuItem>Creating a Social Media Calendar with AI</MenuItem>
                </Link>
               
              </MenuList>
            </Menu>
          </Flex>
          <MenuIt to="/newsletter">
            <Button
                size="sm"
                rounded="md"
                colorScheme="blue"
                variant="outline"
              >
                 Join Our Newsletter
              </Button>
           
          </MenuIt>
          
        </Flex>
      </Box>
    </Flex>
  );
}
