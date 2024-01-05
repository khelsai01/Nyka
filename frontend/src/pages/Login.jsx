import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const toast = useToast();
    const dispatch = useDispatch();

    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
    const handleSubmit = ()=>{
        
        // console.log('submit')
        if(email && password){
          if (!isEmailValid(email)) {
              toast({
                  title: "Invalid Email",
                  description: "Please enter a valid email address.",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                  position: "top",
              });
              return;
          }
          let user={email,password}
          dispatch(login(user)).then((res)=>{
            console.log(res.data)
          })
        }
       
    }
  return (
    <Flex
  
      width={"90%"}
      margin={"auto"}
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      alignItems={"center"}
    >
      <Box
      
        width={{
          base: "40%",
          sm: "40%",
          md: "40%",
          lg: "40%",
          xl: "40%",
          "2xl": "50%",
        }}
      >
        <Image src="https://www.artbikashkendra.com/admin/assets/images/login.gif"/>
      </Box>
      <Box
        width={{
          base: "60%",
          sm: "60%",
          md: "60%",
          lg: "60%",
          xl: "60%",
          "2xl": "40%",
        }}
        padding={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} 
      >
        <Heading fontFamily={"sans-serif"} size='lg' >Sign In</Heading>
        <FormControl  isRequired>
          <FormLabel marginTop={"10px"} >Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
         
            </InputLeftElement>
            <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
      
            </InputLeftElement>
            <Input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            onClick={handleSubmit}
            type='submit'
            mb={2}
            fontFamily={"sans-serif"}
          >
            Sign In
          </Button>
          <Text fontFamily={"sans-serif"} size={"md"}>Do not have an account ? <Link style={{color:"teal",fontWeight:"600"}} to={'/'}>Sign Up</Link></Text>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Login;