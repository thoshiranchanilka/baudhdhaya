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

export default function feature02() {
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
              '/f02.png'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
      <Stack spacing={4} mt={2}>
          <Heading fontSize={{base: '2xl', md: '4xl',}} textAlign={{base: 'center', md: 'left',}} color={useColorModeValue("ash.800", "ash.200")} mb='3'>අට පට්ටම</Heading>
          <Text fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'justify'}>
          ශ්‍රී ලංකාවේ ඕනෑම වෙසක් දිනයක් අට පට්ටම් වෙසක් කූඩුවක් නොමැතිව සම්පූර්න නොවේ. 
          අට පට්ටම උතුම් වෙසක් උත්සවය සංකේතවත් කරයි. අශ්ටක හැඩයෙන් ඇති උන බට භාවිතා 
          කරමින් සාදා සරල කොල වලින් ආවරනය කරන මෙම අට පට්ටම තුල බුදුන් දෙසු ධර්මය ගබඩා කර ඇත. 
          එනම් වෙසක් කූඩුවෙ ප්‍රධාන පැති සතර බුදුදහමේ එන ආර්‍ය සත්‍ය 04 සංකේතවත් කරන අතර ත්‍රිකෝන හැඩති 
          පැති අටෙන් ආර්‍ය අශ්ටාංගික මාර්ගය සංකේතවත් කරයි.<br/><br/><br/><br/>
          ත්‍රිමාණ වෙසක් කූඩුව නැරඹීමට පිවිසෙන්න.
          </Text>
          <Button
            as={'a'}
            target={'_blank'}
            href={'/lantern'}
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