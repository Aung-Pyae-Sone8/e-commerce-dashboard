"use client";

import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { Box } from "@/components/ui/box";
// import { login, singup } from "@/api/auth";
import { handleLogin, handleSignup } from "./action";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchPrams = useSearchParams();
  const errorMessage = searchPrams.get('errorMessage');
  // const [showPassword, setShowPassword] = useState(false);

//   const onLogin = async () => {
//     try {
//       const res = await login(email, password);
//       console.log("login res:::", res);
//     } catch (error) {
//       alert("Failed to login");
//     }
//   };

//   const onSignup = async () => {
//     try {
//       const res = await singup(email, password);
//       console.log("register res:::", res);
//     } catch (error) {
//       alert("Failed to signup");
//     }
//   };

  return (
    <Box className="flex-1 min-h-screen justify-center items-center">
      <FormControl
        isInvalid={!!errorMessage}
        className="p-4 border rounded-lg max-w-[500px] w-full border-outline-300 bg-white m-2"
      >
        <VStack space="xl">
          <Heading className="text-back leading-3 pt-3">Login</Heading>
          <VStack space="xs">
            <Text className="text-typography-500 leading-1">Email</Text>
            <Input>
              <InputField
                className="text-black"
                value={email}
                onChangeText={setEmail}
                type="text"
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500 leading-1">Password</Text>
            <Input className="text-center">
              <InputField
                className="text-black"
                value={password}
                onChangeText={setPassword}
                type="password"
                // type={showPassword ? 'text' : 'password'}
              />
              {/* <InputSlot className="pr-3" onPress={handleState}> */}
              {/* EyeIcon, EyeOffIcon are both imported from 'lucid-react-native' */}
              {/* <InputIcon 
                                as={showPassword ? EyeIcon : EyeOffIcon}
                                className="text-darkBlue-500"
                            />
                        </InputSlot> */}
            </Input>
          </VStack>
          {errorMessage && <Text className="text-red-500">{errorMessage} </Text>}
          <HStack space="sm">
            <Button className="flex-1" variant="outline" onPress={() => handleSignup(email, password)}>
              <ButtonText className="text-black">Sign up</ButtonText>
            </Button>
            <Button className="flex-1 bg-black" onPress={() => handleLogin(email, password)}>
              <ButtonText className="text-white">Sign in</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </FormControl>
    </Box>
  );
};

export default LoginPage;
