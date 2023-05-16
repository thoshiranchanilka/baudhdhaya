import {
    Heading,
    Container,
    useColorModeValue,
    Flex,
    Box,
    Text,
    Link,
  } from '@chakra-ui/react';
  
  export default function bg() {
    return (
      <>
      <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='6xl'
        pt={{base: '4', md: '8'}}
        pb={{base: '4', md: '8'}}
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
        බොදු බැති ගී.
        </Heading>
        <Text mt='8' fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        YouTube හි පලවුන බැති ගී.
        </Text>
        </Container>
    </Flex>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='5xl'
        pt={{base: '4', md: '8'}}
        pb={{base: '4', md: '8'}}
        px={{base: '4', md: '8',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='6'
      >
        <Box 
        mt='6'
        px='auto'
        as='iframe'
        width="100%" 
        height={{base: "170px", md: "540px"}} 
        src="https://www.youtube.com/embed/vQQuY6Ih-gY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        rounded='3xl'
        shadow='xl'
        />
        <Box 
        mt='12'
        px='auto'
        as='iframe'
        width="100%" 
        height={{base: "170px", md: "540px"}} 
        src="https://www.youtube.com/embed/6hbVC1hwveg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        rounded='3xl'
        shadow='xl'
        />
        <Box 
        mt='12'
        px='auto'
        as='iframe'
        width="100%" 
        height={{base: "170px", md: "540px"}} 
        src="https://www.youtube.com/embed/MCweT_czo0w"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        rounded='3xl'
        shadow='xl'
        />
        <Box 
        mt='12'
        px='auto'
        as='iframe'
        width="100%" 
        height={{base: "170px", md: "540px"}} 
        src="https://www.youtube.com/embed/KyHN4bjxN9U"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        rounded='3xl'
        shadow='xl'
        />
        <Box 
        mt='12'
        px='auto'
        as='iframe'
        width="100%" 
        height={{base: "170px", md: "540px"}} 
        src="https://www.youtube.com/embed/vaIPCsCQ6R4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        rounded='3xl'
        shadow='xl'
        />
        </Container>
    </Flex>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='6xl'
        pt={{base: '4', md: '8'}}
        pb={{base: '4', md: '8'}}
        px={{base: '5', md: '20',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='12'
      >
        <Heading textAlign={'center'} fontSize={{base: '2xl', md: '4xl',}} color={useColorModeValue("ash.800", "ash.200")}>
        බැති ගී PlayList.
        </Heading>
        <Text mt='8' fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        Spotify හි ඇති බැතිගී playlist.
        </Text>
        </Container>
    </Flex>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='5xl'
        pt={{base: '4', md: '8'}}
        pb={{base: '4', md: '8'}}
        px={{base: '4', md: '8',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='6'
      >
        <Box 
        width="100%" 
        height="352"
        px='auto'
        as='iframe'
        src="https://open.spotify.com/embed/playlist/2HCPMse9nEQWSgTjDERNkv?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        rounded='3xl'
        shadow='xl'
        />
        </Container>
    </Flex>
    <Flex background={useColorModeValue("pearl.50", "tuatara.950")} px={{ base: '20px', md: '0', }}>
      <Container
        maxW='6xl'
        pt={{base: '4', md: '8'}}
        pb={{base: '4', md: '8'}}
        px={{base: '5', md: '20',}}
        mx='auto'
        background={useColorModeValue("pearl.100", "tuatara.800")}
        border='1px'
        borderColor={useColorModeValue("tuatara.100", "tuatara.600")}
        boxShadow='xl'
        rounded='3xl'
        mt='12'
      >
        <Text mt='0' fontSize={{base: 'sm', md: 'lg',}} color={useColorModeValue("ash.700", "ash.300")} textAlign={'center'}>
        මෙම සියලු බැති ගීත මාගෙ නිර්මාණයන් නොවන අතර copyright පිලිබද ගැටලුවක් ඇත්නම් <Link href='mailto:toshiranchanilka@gmail.com' color='flemingo.500'>අපව</Link> සම්බන්ද කරගන්න.<br />සියලුම ගුණ වැයුම් මුල් හිමිකරුවන් සතු වේ.
        </Text>
        </Container>
    </Flex>
      </>
    );
  }
  