import {
    Image,
    Box,
    Text,
    Flex,
    Heading,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const card = [
    {
      title: 'පිරිත්.',
      des:
        'සියලුම පිරිත් ඇසීම සදහා පිවිසෙන්න.',
      img:
        '/card01.png',
      a: '#',
    },
    {
      title: 'බණ.',
      des:
        'යූ ටියුබ් හි පල වූ බණ නැරඹීමට පිවිසෙන්න.',
      img:
        '/card02.png',
      a: '#',
    },
    {
      title: 'බැති ගී.',
      des:
        'අන්තර්ජාලයෙ හි පල වූ බැති ගී ශ්‍රවනය කිරීමට පිවිසෙන්න.',
      img:
        '/card03.png',
      a: '#',
    },
  ];
  
  interface CardProps {
    title: string;
    des: string;
    img: string;
    a: string;
    index: number;
  }
  
  function Card(props: CardProps) {
    const { title, des, img, index, a } = props;
    return (
      <Flex
        as='a'
        href={a}
        boxShadow='lg'
        maxW='640px'
        direction='column-reverse'
        width='full'
        rounded='3xl'
        p={7}
        justifyContent='center'
        position='relative'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        filter='auto' brightness='100%'

        _hover={{
          brightness: "90%",
          boxShadow: "2xl",
          transition: "0.3s ease",
        }}
        >
        <Flex
          direction={'column'}
          textAlign={'center'}
          justifyContent={'center'}
          textColor={useColorModeValue("ash.800", "ash.200")}>
          <Heading
            fontSize={'lg'}
            pb={2}>
            {title}
          </Heading>
          <Box maxW={'200px'} mx={'auto'}>
          <Text 
            textAlign={'justify'}
            fontSize={'sm'} 
            fontWeight={'md'} 
            textColor={useColorModeValue("ash.700", "ash.300")}>
            {des}
          </Text>
          </Box>
        </Flex>
        <Image
          alt={title}
          src={img}
          height={'200px'}
          width={'200px'}
          alignSelf={'center'}
          mb={5}
          rounded={'xl'}
          shadow={'lg'}
          _hover={{
                  shadow: '2xl',
                  transition: '1s ease',
                }}
        />
      </Flex>
    );
  }
  
  export default function usefullstuff() {
    return (
      <Flex
        bg={useColorModeValue("pearl.50", "tuatara.950")}
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
        <Box
          maxW='6xl'
          width='100%'
          pt='4'
          pb='4'
          px='20'
          mx='auto'
          bg={useColorModeValue("pearl.100", "tuatara.800")}
          border='1px'
          borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
          boxShadow='xl'
          rounded='3xl'
          mt='6'
        >
        <Heading textAlign={'center'} fontSize={'4xl'} color={useColorModeValue("gray.800", "whiteAlpha.900")}>
          ප්‍රයෝජනවත් දේවල්.
        </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={'10'}
          mt={6}
          mx={'auto'}>
          {card.map((cardInfo, index) => (
            <div key={index}>
            <Card {...cardInfo} index={index} />
            </div>
          ))}
        </SimpleGrid>
        <Box
          maxW='6xl'
          width='100%'
          height='80px'
          pt='4'
          pb='4'
          px='20'
          mx='auto'
          background={useColorModeValue("pearl.100", "tuatara.800")}
          border='1px'
          borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
          boxShadow='xl'
          rounded='3xl'
          mt='6'
        ></Box>
      </Flex>
    );
  }