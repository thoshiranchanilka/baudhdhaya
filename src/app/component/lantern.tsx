import {
    Heading,
    Container,
    useColorModeValue,
    Flex,
    Box,
    Kbd,
    Center,
  } from '@chakra-ui/react';
  
  
  export default function lantern() {
    return (
      <>
      <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='6xl'
        pt='12'
        pb='12'
        px={{base: '5', md: '20',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='100px'
      >
        <Heading textAlign={'center'} fontSize={{base: '2xl', md: '4xl',}} color={useColorModeValue("ash.800", "ash.200")}>
        වෙසක් කූඩුව &#40; අට පට්ටම &#41;.
        </Heading>
        <Center> 
          <Box mt='12'>
            <video className='videoTag' autoPlay loop muted >
            <source src={'/lantern.webm'} type='video/mp4' />
            </video>
          </Box>
        </Center>
        </Container>
        </Flex>
        <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
        <Container
        maxW='6xl'
        pt='6'
        pb='6'
        px={{base: '5', md: '20',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='6'
      ><Heading textAlign={'center'} fontSize={{base: 'md', md: '2xl',}} fontWeight="medium" color={useColorModeValue("ash.800", "ash.200")}>
      වෙසක් කූඩුවේ ආලෝකය නිවීමට හා දැල්වීමට යතුරුපුවරුවේ <Kbd> 0 </Kbd>&nbsp;ඔබන්න.
      </Heading></Container>
      </Flex>
      </>
    );
  }
  