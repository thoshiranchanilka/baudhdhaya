'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Thorana from "../component/dt";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function thorana() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Thorana />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}