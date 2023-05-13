'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Bana from "../component/bn";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function bana() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Bana />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}