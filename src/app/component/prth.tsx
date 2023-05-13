import {
    Image,
    Box,
    Text,
    Flex,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  
  const card = [
    {
      title: 'කරණීය මෙත්ත සූත්‍රය.',
      img:
        '/thumb01.png',
      a: '/kms.mp3',
    },
    {
        title: 'මහා මංගල්‍යයක් සූත්‍රය.',
        img:
          '/thumb02.png',
        a: '/mms.mp3',
    },
    {
        title: 'රතන සූත්‍රය.',
        img:
          '/thumb03.png',
        a: '/rs.mp3',
    },
    {
        title: 'මෝර පිරිත.',
        img:
          '/thumb04.png',
        a: '/mp.mp3',
    },
    {
        title: 'බොජ්ජංග පිරිත.',
        img:
          '/thumb05.png',
        a: '/bp.mp3',
    },
    {
        title: 'අංගුලිමාල පිරිත.',
        img:
          '/thumb06.png',
        a: '/ap.mp3',
    },
    {
        title: 'ධජග්ග පිරිත.',
        img:
          '/thumb07.png',
        a: '/dp.mp3',
    },
    {
        title: 'වට්ටක පිරිත.',
        img:
          '/thumb08.png',
        a: '/wp.mp3',
    },
    {
        title: 'ජය පිරිත.',
        img:
          '/thumb09.png',
        a: '/jp.mp3',
    },
    {
        title: 'අටවිසි පිරිත.',
        img:
          '/thumb10.png',
        a: '/atp.mp3',
    },
    {
        title: 'සීවලී පිරිත.',
        img:
          '/thumb11.png',
        a: '/sp.mp3',
    },
    {
        title: 'අන්තරාය නිවාරන පිරිත.',
        img:
          '/thumb12.png',
        a: '/anp.mp3',
    },
    {
        title: 'සූරිය පිරත.',
        img:
          '/thumb13.png',
        a: '/srp.mp3',
    },
    {
        title: 'චන්ද පිරිත.',
        img:
          '/thumb14.png',
        a: '/cp.mp3',
    },
    {
        title: 'ඛන්ධ පිරිත.',
        img:
          '/thumb15.png',
        a: '/kp.mp3',
    },
  ];
  
  interface CardProps {
    title: string;
    img: string;
    a: string;
    index: number;
  }
  
  function Card(props: CardProps) {
    const { title, img, index, a } = props;
    return (
      <Flex
        boxShadow='lg'
        maxW='640px'
        direction='column-reverse'
        width='full'
        rounded='3xl'
        p={{ base: '5', md: '7', }}
        justifyContent='center'
        position='relative'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        >
        <Flex
          direction={'column'}
          textAlign={'center'}
          justifyContent={'center'}
          textColor={useColorModeValue("ash.800", "ash.200")}
          px={{ base: '21px', md: '0', }}>
          <Heading
            fontSize={'lg'}
            pb={2}>
            {title}
          </Heading>
          <Box 
        width='100%'
        alignItems={'center'} 
        shadow='xl' 
        as='audio'
        controls
        mx='auto'
        boxShadow='xl'
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        rounded='3xl'
        mt={{base: '6', md: '0',}}
        >
          <source src={a} type="audio/mpeg"/>
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
  
  export default function prth() {
    return (
      <Flex
        bg={useColorModeValue("pearl.50", "tuatara.950")}
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}
        px={{ base: '20px', md: '0', }}
        >
        
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
          mt='100px'
        >
        <Heading textAlign={'center'} fontSize={{base: '2xl', md: '4xl',}} color={useColorModeValue("ash.800", "ash.200")}>
        පිරිත් දේශනා.
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
        >
        <Text mt='0' fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        මෙහි එන සියලු පිරිත් හා සූත්‍ර දේශනා සදහා සියලු ගුණවැයුම් මුල් හිමිකරුවන් සතු වන බවත් කරුණාවෙන් දැනුවත් කර සිටිමි.<br />Copyright පිලිබද ගැටලුවක් ඇත්නම් ඒ සදහා <Link href='mailto:toshiranchanilka@gmail.com' color='flemingo.500'>අපව</Link> සම්බන්ද කරගන්න ලෙස කාරුණිකව දැනුවත් කර සිටිමි.
        </Text>
        </Box>
      </Flex>
    );
  }