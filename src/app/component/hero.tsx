import {
  Heading,
  Image,
  Container,
  Stack,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';

export default function hero() {
  return (
    <>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
    <Container
      maxW='6xl'
      pt='12'
      pb='12'
      px={{base: '10', md: '20',}}
      mx='auto'
      background={useColorModeValue("pearl.100", "tuatara.800")}
      border='1px'
      borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
      boxShadow='xl'
      rounded='3xl'
      mt='100px'
    >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mx='auto'>
          <Flex>
            <Image
              alt={'Hero image'}
              src={'/hero.png'}
              objectFit={'cover'} />
          </Flex>
          <Stack spacing={{ base: '1', md: '4',}} my={'auto'} marginLeft={{base: '0px', md: '20px',}}>
            <Heading textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.700", "ash.300")} fontSize={{base: 'lg', md: '3xl',}} fontWeight='medium'>දම් සිසිලෙන් සිත් සැනසෙන</Heading>
            <Heading textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.800", "ash.200")} fontSize={{base: '40px', md: '80px',}} fontWeight='bold'>පිංබර වෙසක්</Heading>
            <Heading textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.700", "ash.300")} fontSize={{base: 'xl', md: '4xl',}} fontWeight='medium'>මංගල්‍යයක් වේවා!</Heading>
          </Stack>
        </SimpleGrid>
      </Container>
      </Flex>
      </>
  );
}
