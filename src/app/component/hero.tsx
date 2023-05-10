import Head from 'next/head';
import {
  Box,
  Heading,
  Image,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
  Flex,
  Center,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")}>
    <Container
      maxW='6xl'
      pt='12'
      pb='12'
      px='20'
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
          <Stack spacing={4} my={'auto'} marginLeft='20px'>
            <Heading color={useColorModeValue("ash.700", "ash.300")} fontSize='3xl' fontWeight='medium'>දම් සිසිලෙන් සිත් සැනසෙන</Heading>
            <Heading color={useColorModeValue("ash.800", "ash.200")} fontSize='80px' fontWeight='bold'>පිංබර වෙසක්</Heading>
            <Heading color={useColorModeValue("ash.700", "ash.300")} fontSize='4xl' fontWeight='medium'>මංගල්‍යයක් වේවා!</Heading>
          </Stack>
        </SimpleGrid>
      </Container>
      </Flex>
      </>
  );
}
