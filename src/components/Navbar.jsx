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
          sx={{
            "border-radius": "15px",
            "background": "linear-gradient(145deg, #b0d9e0, #d2ffff)",
            "box-shadow":  "20px 20px 60px #99bcc2, -20px -20px 60px #efffff"
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
      <HStack spacing={20} textAlign="center" fontSize="20px" fontWeight="700">
        {linkList.map((item, index) => {
          return (
            <Box key={index}>
              {item}
            </Box>
            )
        })}
      </HStack>
    )
  };

  return (
    <Flex width="100%" justify="center" bgColor="cyan.100" py={4} borderBottom="1px">
      <Flex w="5xl" px={4}>
        <HStack spacing={4}>
          <Icon as={Logo} width="50" height="50"/>
          <Text fontSize="2rem" sx={{"font-family": "'Pacifico', cursive;"}}>Pet Planet</Text>
        </HStack>
        
        <Spacer />

        {isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </Flex>
  )
};

export default Navbar;