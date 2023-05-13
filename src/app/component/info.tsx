import {
    Heading,
    Container,
    useColorModeValue,
    Flex,
    Text,
    Image,
    Link,
  } from '@chakra-ui/react';
  
  
  export default function info() {
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
        තොරතුරු.
        </Heading>
        <Text mt="6" fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        මෙම වෙබ් අඩවිය ශ්‍රද්ධා ඩිජිටල් වෙසක් කලාපය - නිර්මාණ අංශය තරගය සදහා නිර්මාණය කරන ලද වෙබ් අඩවියකි.
        <br /><br />
        මෙම නිර්මාණය ශ්‍රිලාංකික බෞද්ධ ජනතාව සදහා ප්‍රයෝජනවත් නිර්මාණයක් වේ යැයි සිතමි. 
        <br /><br /><br />
        </Text>
        <Text mt="6" fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
            තොරණ නිර්මාණය කරන ලද්දෙ <Link href='https://www.adobe.com/products/catalog.html#category=creativity-design' color='flemingo.500'>aftereffects</Link> මෘදුකාංගය භාවිතයෙනි.
        </Text>
        <Flex>
          <Image
            mt='6'
            border='1px'
            borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
            rounded='3xl'
            shadow='lg'
            alt='feature image'
            src={
              '/ss01.png'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
        <Text mt="6" fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
            ත්‍රිමාණ වෙසක් කූඩුව නිර්මාණය කරන ලද්දෙ <Link href='https://spline.design/' color='flemingo.500'>Spline</Link> යෙදුම භාවිතයෙනි.
        </Text>
        <Flex>
          <Image
            mt='6'
            border='1px'
            borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
            rounded='3xl'
            shadow='lg'
            alt='feature image'
            src={
              '/ss02.png'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
        <Text mt="6" fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
            කේතකරනය කරන ලද්දෙ <Link href='https://code.visualstudio.com/' color='flemingo.500'>visual studio Code</Link> මෘදුකාංගය භාවිතයෙනි.
        </Text>
        <Flex>
          <Image
            mt='6'
            border='1px'
            borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
            rounded='3xl'
            shadow='lg'
            alt='feature image'
            src={
              '/ss03.png'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
        <Flex>
          <Image
            mt='6'
            border='1px'
            borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
            rounded='3xl'
            shadow='lg'
            alt='feature image'
            src={
              '/ss04.png'
            }
            objectFit='cover'
            _hover={{
              shadow: '2xl',
              transition: '1s ease',
            }}
          />
        </Flex>
        <Text mt="6" fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        මෙම වෙබ් අඩවිය නිර්මාණය කිරීමට <Link href='https://nextjs.org/' color='flemingo.500'>Next Js</Link> තාක්ශනය හා <Link href='https://chakra-ui.com/' color='flemingo.500'>Chakra UI</Link> මෙන්ම TypeScript භාවිතා කර ඇත.<br />
        මෙම වෙබ් අඩවිය සදහා සම්පූර්ණ කේතය සදහා මෙම <Link href='https://github.com/thoshiranchanilka/baudhdhaya' color='flemingo.500'>සබැදිය</Link> ඔස්සෙ පිවිසෙන්න.<br /><br /><br />
        නිර්මාණය සදහා යොදාගත් මූලාශ්‍ර.<br />
        freepik.com | wikipedia.org | youtube.com | y2mate.com | unsplash.com | flaticon.com | fontsourse.com | pexels.com
        </Text>
        </Container>
        </Flex>
      </>
    );
  }
  