import {
    Heading,
    Container,
    useColorModeValue,
    Flex,
    Box,
  } from '@chakra-ui/react';
  
  export default function thorana() {
    return (
      <>
      <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='6xl'
        pt={{base: '4', md: '12'}}
        pb={{base: '4', md: '12'}}
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
        වෙසක් තොරණ.
        </Heading>
        <Box 
          my={{base: '4', md: '12'}}
          height={{base: '170px',md: '540px',}}
          rounded='3xl'>
            <Box  shadow='xl' border='1px' borderColor={useColorModeValue("tuatara.100", "tuatara.600")}>
            <video className='videoTag' autoPlay loop muted controls>
            <source src={'/thoranac.mp4'} type='video/mp4' />
            </video>
            </Box>
        </Box>
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
      <Heading display={{base: '', md: 'none',}} textAlign={'center'} fontSize={{base: 'md', md: '2xl',}} fontWeight="medium" color={useColorModeValue("ash.800", "ash.200")}>
      ඩිජිටල් තොරණෙ සුපැහැදිලි දසුන් ලබාගැනීමට<br />ඩෙස්ක්ටොප් පරිගණකයකින් හෝ ලැප්ටොප් පරිගනකයකින් වෙබ් අඩවියට පිවිසෙන්න.
      </Heading>
      <Box 
        width={{ base: '50%', md: '100%',}}
        alignItems={'center'} 
        shadow='xl' 
        as='audio'
        loop
        controls
        autoPlay
        mx='auto'
        boxShadow='xl'
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        rounded='full'
        mt={{base: '6', md: '0',}}
        preload='none'
        >
          <source src="/thorana.mp3" type="audio/mpeg"/>
      </Box>
      </Container>
      </Flex>
      </>
    );
  }
  