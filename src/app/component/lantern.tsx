import {
    Heading,
    Container,
    useColorModeValue,
    Flex,
    Box,
    Kbd,
    Center,
    Button,
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
            <video className='videoTag' autoPlay loop muted controls>
            <source src={'/lanternc.mp4'} type='video/mp4' />
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
      >
        <Heading textAlign={'center'} fontSize={{base: 'md', md: '2xl',}} fontWeight="medium" color={useColorModeValue("ash.800", "ash.200")}>
        ත්‍රිමාණ අටපට්ටම ඔබට අවැසි ලෙස හරවා බැලීමට මෙතනින් පිවිසෙන්න.
      </Heading>
      <Center>
      <Button
              as={'a'}
              target={'_blank'}
              href={'/3dlantern'}
              maxW={'140px'}
              mx={'auto'}
              px={4}
              fontSize={'md'}
              shadow={'lg'}
              rounded={'2xl'}
              bg='flemingo.500'
              color={'ash.100'}
              mt="4"
        
              _hover={{
                  color: "ash.50",
                  bg: "flemingo.700",
                  boxShadow: "xl",
                  transition: '0.5s ease',
              }}
              >
              පිවිසෙන්න.
            </Button>
          </Center>
      </Container>
      </Flex>
      </>
    );
  }
  