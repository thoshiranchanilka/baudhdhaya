import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Image,
    VisuallyHidden,
    createIcon,
    Flex,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (_props: any) => {
    return (
      <Image src={useColorModeValue('/logob.png', '/logow.png')} alt='logo' width='100px'/>
    );
  };
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  export const NextJsIcon = createIcon({
    displayName: "NextJsIcon",
    viewBox: "0 0 24 24",
    path: (
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033c-3.407.306-6.6 2.145-8.622 4.972a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695c.779.25 1.6.422 2.534.525c.363.04 1.935.04 2.299 0c1.611-.178 2.977-.577 4.323-1.264c.207-.106.247-.134.219-.158c-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592l-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51c-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106l.006-4.703l.007-4.705l.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051c.478 0 .558.018.682.154a466.83 466.83 0 0 1 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879l.096-.063a12.317 12.317 0 0 0 2.466-2.163a11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748c0-.893-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218l-.744-1.14l-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    ),
  });
  
  export const ChakraUiIcon = createIcon({
    displayName: "ChakraUiIcon",
    viewBox: "0 0 24 24",
    path: (
      <path
        fill="currentColor"
        d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12s12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 0 0 .164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 0 0-.151-.296H6.627a.187.187 0 0 1-.131-.32l8.18-8.123a.182.182 0 0 1 .125-.056z"
      />
    ),
  });
  
  export default function footer() {
    return (
      <Box
        bg={useColorModeValue("pearl.50", "tuatara.950")}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={'50px'}>
            <Link href={'#'}>තොරණ</Link>
            <Link href={'#'}>වෙසක් කූඩුව</Link>
            <Link href={'#'}>දහම් කරුණු</Link>
            <Link href={'#'}>පිරිත්</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue("tuatara.100", "tuatara.600")}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={'center'}
            align={'center'}>
            <Text textAlign={'center'} color={useColorModeValue("ash.700", "ash.300")} fontSize="xs">
            © {new Date().getFullYear()} බෞද්ධයා. සියලුම හිමිකම් ඇවිරිණි
          </Text>
          <Text textAlign={'center'} color={useColorModeValue("ash.700", "ash.300")} fontSize="xs">
            සැලසුම හා කේතකරණය -{" "}
            <Link href="https://thoshiranslinktree.netlify.app/" isExternal color="flemingo.500">
            තොශිරාන් චනිල්ක.
            </Link>
          </Text>
          <Text textAlign={'center'} color={useColorModeValue("ash.700", "ash.300")} fontSize="xs">
              භාවිත තාක්ෂණයන් - &nbsp;{" "}
              <Link href="https://nextjs.org/" isExternal>
                <NextJsIcon />
              </Link>
              &nbsp;&#8226;&nbsp;
              <Link href="https://chakra-ui.com" isExternal>
                <ChakraUiIcon />
              </Link>
            </Text>
          </Container>
        </Box>
      </Box>
    );
  }