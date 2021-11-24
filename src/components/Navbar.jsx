import { Icon } from "@chakra-ui/icon";
import { Box, Flex, Text, HStack, Spacer } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react";
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [mediaQuery] = useMediaQuery("(max-width: 768px)");

  const nameList = [
    {
      id: 1,
      name: "FIND PETS",
      path: "/find"
    },
    {
      id: 2,
      name: "ABOUT",
      path : "/about"
    },
    {
      id: 3,
      name: "CONTACT",
      path: "/contact"
    }
  ];

  const linkList = nameList.map(link => (
    <Link key={link.id} to={link.path}>
      {link.name}
    </Link>
  ));

  useEffect(() => {
    if(mediaQuery !== isMobile){
      setMobile(mediaQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediaQuery]); 
  
  const MobileNav = () => {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BiMenu />}
          variant="solid"
          size="lg"
          borderRadius="full"
          sx={{
            "background-color": "#133B5C",
            "color": "#000000",
            "&:hover":{
              "color": "#ffffff",
              "transition" :"0.2s all ease-in"
            }
          }}
        />
        <MenuList fontSize="20px" fontWeight="700">
          {linkList.map((item , index) => {
            return (
              <MenuItem key={index}>
                {item}
              </MenuItem>
              )
          })}
        </MenuList>
      </Menu>
    )
  };

  const DesktopNav = () => {
    return (
      <HStack spacing={20} textAlign="center" fontSize="20px" fontWeight="700" color="white">
        {linkList.map((item, index) => {
          return (
            <Box key={index} >
              {item}
            </Box>
            )
        })}
      </HStack>
    )
  };

  return (
    <Flex width="100%" justify="center" py={4} sx={{"background-color":"#133B5C"}}>
      <Flex w="5xl" px={4}>
        <Link to="/">
          <HStack spacing={4}>
            <Icon as={Logo} width="50" height="50"/>
            <Text fontSize="2rem" color="white" sx={{"font-family": "'Pacifico', cursive;"}}>Pet Planet</Text>
          </HStack>
        </Link>
        
        <Spacer />

        {isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </Flex>
  )
};

export default Navbar;