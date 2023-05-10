import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function About() {
    return (
      <Flex background={useColorModeValue("pearl.50", "tuatara.950")}>
      <Container 
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} mt={2}>
            <Heading color={useColorModeValue("ash.800", "ash.200")} mb='3'>බුද්ධාගම යනු ?</Heading>
            <Text color={useColorModeValue("ash.700", "ash.300")} fontSize={'lg'} textAlign={'justify'}>
            බුද්ධාගම යනු බුද්ධ ධර්මය හෙවත් බුදු දහම පාදක කොට ගොඩනැගුනු ආගමකි. 
            ගෞතම බුදු රජාණන් වහන්සේ විසින් ඉගැන්වීම් මත පදනම් වූ  දහමකි. 
            එය ඉන්දියානු ආගමක් සහ දර්ශනකි.එය ආසියාවේ බොහෝ ප්‍රදේශ හරහා ව්‍යාප්ත වූ 
            ක්‍රිස්තු පූර්ව 6 වැනි සහ 4 වැනි සියවස් අතර කාලය තුළ ශ්‍රමණ දහමක් ලෙස පුරාණ 
            ඉන්දියාවේ දී ආරම්භ විය. එය ලොව සිව්වන විශාලතම ආගමයි. මිලියන 530කට අධික 
            අනුගාමිකයින් හෝ ගෝලීය ජනගහනයෙන් 7%කට වඩා වැඩි ප්‍රමාණයක්, බෞද්ධයන් ලෙස 
            හැඳින්වේ. බුදුදහම බොහෝ දුරට බුදුන්ගේ ඉගැන්වීම්  
            අර්ථකථනය කරන ලද දර්ශනය මත පදනම් වේ.
            </Text>
            <Button
              as={'a'}
              target={'_blank'}
              href={'#'}
              maxW={'140px'}
              mx={'auto'}
              px={4}
              fontSize={'md'}
              shadow={'lg'}
              rounded={'2xl'}
              bg='flemingo.500'
              color={'ash.100'}
        
              _hover={{
                  color: "ash.50",
                  bg: "flemingo.700",
                  boxShadow: "xl",
              }}
              >
              කියවන්න.
            </Button>
          </Stack>
        <Flex>
            <Image
              border='1px'
              borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
              rounded='3xl'
              shadow='lg'
              alt='feature image'
              src={
                '/f01.jpg'
              }
              objectFit='cover'
              _hover={{
                shadow: '2xl',
                transition: '1s ease',
              }}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      </Flex>
    );
  }