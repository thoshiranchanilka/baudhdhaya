import {
  Container,
  Flex,
  Heading,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

export default function locations() {
  return (
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")}>
    <Container 
      textAlign={'center'}
      maxW='6xl' 
      py={12}
      pt='12'
      pb='12'
      px='20'
      mx='auto'
      background={useColorModeValue("pearl.100", "tuatara.800")}
      border='1px'
      borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
      boxShadow='xl'
      rounded='3xl'
      mt='6'
      >
      
      <Heading color={useColorModeValue("ash.800", "ash.200")} mb='12'>ඔබ අවට ඇති විහාරස්ථාන.</Heading>
          <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31685.671457688637!2d79.83764100558737!3d6.925354520243153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbuddhist%20temples%20near%20me!5e0!3m2!1sen!2slk!4v1683750636564!5m2!1sen!2slk" 
          width="800px"
          height="600px"
          border="1px" 
          loading="lazy" 
          mx='auto'
          rounded="3xl"
          filter={useColorModeValue( '' ,'grayscale(90%) invert(90%) contrast(100%) brightness(120%)' )}
          borderColor={useColorModeValue("tuatara.100", "tuatara.700")}
          boxShadow='xl'
          />
    </Container>
    </Flex>
  );
}