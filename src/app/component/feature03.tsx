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

const Pic = (_props: any) => {
  return (
    <Image 
      src={useColorModeValue('/f03w.png', '/f03b.png')} 
      alt='feature03' 
      border='1px'
      borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
      rounded='3xl'
      shadow='lg'
      objectFit='cover'
      _hover={{
          shadow: '2xl',
          transition: '1s ease',
       }}/>
  );
};

export default function feature03() {
  return (
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
    <Container 
      maxW='6xl' 
      py={12}
      pt='12'
      pb='12'
      px={{base: '10', md: '20',}}
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
          <Heading fontSize={{base: '2xl', md: '4xl',}} textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.800", "ash.200")} mb='3'>සත් සතිය</Heading>
          <Text fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'justify'}>
          සිදුහත් බෝසතානෝ වෙසක් මස පුර පසලොස්වක පොහොය දින සම්මා සම්බුද්ධත්වයට පත් වූ සේක. 
          බුද්ධත්වයෙන් පසු සති හතක්ම බුදුරජාණන් වහන්සේ ජයශී මහ බෝධි සෙවණ හා එ ඇසුරෙහි සමවත් 
          සුවයෙන් කාලය ගතකල සේක. එම සත් සතිය පිලිවෙලින්, බෝරුක මුල වැඩ සිටීම, අනිමිසලෝචන පූජාව, 
          රුවන් සක්මන, රැවන් ගෙය වැඩසිටීම, අජපල් නුග රුක මුල වැඩ සිටීම, මුචලින්ද නාග දරණය තුලින් සෙවන 
          ලැබීම, රාජායතන නම් කිරිපළු රුක මුල වැඩ සිටීමයි.<br/><br/>
          සත් සතිය තොරණ නැරඹීමට මෙතනින් පිවිසෙන්න.
          </Text>
          <Button
            as={'a'}
            target={'_blank'}
            href={'/thorana'}
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
            පිවිසෙන්න.
          </Button>
        </Stack>
      <Flex>
          <Pic />
        </Flex>
      </SimpleGrid>
    </Container>
    </Flex>
  );
}