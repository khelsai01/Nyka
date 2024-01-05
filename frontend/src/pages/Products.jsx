import { Box, Container, Flex, HStack, Image, Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/ProdouctReducer/action'
const Products = () => {

    const{product,isLoading,isError}= useSelector((store)=>{
        return{
            isLoading:store.productReducer.isLoading,
            isError:store.productReducer.isError,
            product:store.productReducer.product

        }
        // console.log(store)
    },shallowEqual)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct)
    },[])
  
    // console.log(isLoading)
    return (
        <Container>
            <Flex w="1129px" h="52px" top="56.1px" left="271px" justifyContent="space-between">

                <Input type="text" placeholder="Search" w="655px" h="52px" border="1px Mixed solid rgba(0, 0, 0, 0.2)" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px"
                />
<HStack w="124px" h="52px" gap="20px">
    <Image src="https://gravatar.com/avatar/54a329eb844b3ca33dfe5fe81bcb4b97?s=400&d=robohash&r=x" w="52px" h="52px" borderRadius="10px"
 />

 
</HStack>
            </Flex>
            <br />
            <Box w="1216px" h="830px" top="354px" left="263px" borderRadius="5px" border="1px solid red" bg="rgba(255, 255, 255, 1)" boxShadow="0px 8px 32px 0px rgba(51, 38, 174, 0.08)"
>
        
            </Box>
        </Container>
    )
}

export default Products