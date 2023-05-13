'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Dlantern from "../component/3dl";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function vesaklantern() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Dlantern />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}