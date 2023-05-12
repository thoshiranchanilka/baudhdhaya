'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Lantern from "../component/lantern";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function vesaklantern() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Lantern />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}