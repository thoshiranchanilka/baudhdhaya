import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  HStack,
  useColorModeValue,
  useColorMode,
  Button,
} from '@chakra-ui/react';

const Logo = (_props: any) => {
  return (
    <Image src={useColorModeValue('/logob.png', '/logow.png')} alt='logo' width='80px'/>
  );
};

export default function nav() {
const { colorMode, toggleColorMode } = useColorMode();
   return (
    <>
    <Box position='fixed' w='100%' zIndex='overlay'>
      <Box 
        maxW='5xl'
        backdropFilter='auto'
        backdropBlur='20px'
        brightness='20%'
        border='0px'
        borderColor={useColorModeValue("tuatara.50", "tuatara.700")}
        mt='2'
        py='2'
        px='10'
        mx='auto'
        rounded='3xl'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box maxW='100px' as='a' href='/'><Logo /></Box>
          <HStack>
          <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'block'}}>
            <Button variant='ghost' rounded='2xl' fontWeight='medium' as='a' href='/thorana' color={useColorModeValue("ash.700", "ash.300")}>තොරණ</Button>
            <Button variant='ghost' rounded='2xl' fontWeight='medium' as='a' href='/lantern' color={useColorModeValue("ash.700", "ash.300")}>වෙසක් කූඩුව</Button>
            <Button variant='ghost' rounded='2xl' fontWeight='medium' as='a' href='/buddhagama' color={useColorModeValue("ash.700", "ash.300")}>දහම් කරුණු</Button>
          </HStack>
          <Button onClick={toggleColorMode} variant='ghost' rounded='2xl' color={useColorModeValue("ash.700", "ash.300")} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
    </>
  );
}