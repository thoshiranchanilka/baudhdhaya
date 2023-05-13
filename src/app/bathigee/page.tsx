'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Bathigee from "../component/bg";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function bana() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Bathigee />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}