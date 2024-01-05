import React from 'react'
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react"
const SideNavbar = () => {

    return (
        <Container w="230px" h="1184px" bg="#FFFFFF">

            <Flex flexDirection={"column"} alignItems={"start"} m="auto">
                <Heading width={"203px"} height={"36px"} top={"63px"} left={"18px"} fontFamily={"poppins"} fontWeight={"500"} fontSize={"24px"} lineHeight={"36px"} color={"#013CC6"}>
                    Nyka Dashboard
                    </Heading>
       

                <Flex flexDirection={"column"} alignItems={"start"} m="auto" width="Hug (131px)" height="Fixed (993px)" top="156px" left="41px" padding="0px, 0px, 30px, 0px" gap="525px"
                >
                    <VStack w="131px" h="154px" borderRadius="50%" gap="41px" >

                    <Box w="131px" h="24px">

                        <Text w="92px" h="24px" left="39px" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px" color="#0B63F8"
                        >Dasboard</Text>
                    </Box>
                    <Box w="116px" h="24px" opacity="60%">

                        <Text w="76px" h="24px" left="40px" top="65px" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px" color="#000000">Analytics</Text>
                    </Box>
                    <Box w="116px" h="24px" opacity="60%">

                        <Text w="56px" h="24px" left="40px" top="130px" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px" color="#131313">Logout</Text>
                    </Box>
                    </VStack>
                </Flex>


            </Flex>
        </Container>
    )
}

export default SideNavbar