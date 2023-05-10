import {
    Box,
    Flex,
    Heading,
    IconButton,
    Link,
    Stack,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsWhatsapp, BsFacebook, } from 'react-icons/bs';
  import { MdEmail, MdAddCall } from 'react-icons/md';
  
  export default function Contact() {
    return (
      <Flex
        bg={useColorModeValue('gray.100', 'gray.800')}
        align="center"
        justify="center"
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{ base: '3xl', md: '5xl' }}>
                සම්බන්ධ කරගන්න.
              </Heading>
  
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: 'row', md: 'column' }}>
                  
                  <Link href="mailto:vishanautoelectrical@gmail.com">
                    <IconButton
                      aria-label="Email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'orange.400',
                        color: 'white',
                        boxShadow: '0px 1px 25px -5px rgb(255 165 0 / 48%), 0 10px 10px -5px rgb(255 165 0 / 43%)',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="callto:+94779545998">
                    <IconButton
                      aria-label="Call"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdAddCall />}
                      _hover={{
                        bg: 'orange.400',
                        color: 'white',
                        boxShadow: '0px 1px 25px -5px rgb(255 165 0 / 48%), 0 10px 10px -5px rgb(255 165 0 / 43%)',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://m.facebook.com/people/Vishan-A-Karunarathna/100051223579410/">
                    <IconButton
                      aria-label="Facebook"
                      variant="ghost"
                      size="lg"
                      icon={<BsFacebook size="28px" />}
                      _hover={{
                        bg: 'orange.400',
                        color: 'white',
                        boxShadow: '0px 1px 25px -5px rgb(255 165 0 / 48%), 0 10px 10px -5px rgb(255 165 0 / 43%)',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://wa.me/+94764021521">
                    <IconButton
                      aria-label="Whatsapp"
                      variant="ghost"
                      size="lg"
                      icon={<BsWhatsapp size="28px" />}
                      _hover={{
                        bg: 'orange.400',
                        color: 'white',
                        boxShadow: '0px 1px 25px -5px rgb(255 165 0 / 48%), 0 10px 10px -5px rgb(255 165 0 / 43%)',
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
  
                <Box
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="3xl"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="xl">
                    <Heading
                        mb={5}
                        textAlign={'center'}
                        fontWeight={500}
                        fontSize={{
                          base: '2xl',
                          md: '3xl',
                        }}>
                        පිවිසෙන්න.
                    </Heading>
                  <Box
                    as={'iframe'}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2353.1171401567453!2d81.6841030813725!3d7.3026083410364375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae519db92f447dd%3A0x9d357eaf77eee1de!2s7%20Dharmapala%20Mawatha%2C%20Vijithapura!5e0!3m2!1sen!2slk!4v1678484816949!5m2!1sen!2slk" 
                    borderWidth="2px"
                    height="350" 
                    shadow={'base'}
                    rounded={'3xl'}
                    loading="lazy"
                    filter={useColorModeValue( '' ,'grayscale(100%) invert(100%) contrast(80%)' )}/>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    );
  }