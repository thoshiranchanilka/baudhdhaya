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

export default function vision() {
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
      <Flex>
          <Image
            border='1px'
            borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
            rounded='3xl'
            shadow='lg'
            alt='feature image'
            src={
              '/vision.jpg'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
      <Stack spacing={4} mt={2}>
          <Heading fontSize={{base: '2xl', md: '4xl',}} textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.800", "ash.200")} mb='3'>අරමුණ</Heading>
          <Text color={useColorModeValue("ash.700", "ash.300")} fontSize={{base: 'sm', md: 'lg',}} textAlign={'justify'}>
          ශ්‍රී ලංකාවේ තාක්ශනය සමග වේගයෙන් දියුණු වන තරුණ තරුණියන්ගෙ දැනුම මෙන්ම 
          ආධ්‍යාත්මික සුවය වැඩිදියුණු කිරිම හා එමගින් සමාජයෙ ඇතිවන ප්‍රභල ගැටලු මැඩ 
          පවත්වාගැනිමට හැකි පමණින් දායක වීම මෙම වෙබ් අඩවියෙ අරමුණයි.<br/><br/><br/><br/>
          තවත් තොරතුරු සදහා පිවිසෙන්න.
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
            පිවිසෙන්න.
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
    </Flex>
  );
}