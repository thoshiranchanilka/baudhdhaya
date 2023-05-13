'use client'
import theme from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Info from "../component/info";
import Nav from "../component/nav";
import Footer from "../component/footer";

export default function information() {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
            <Nav />
            <Info />
            <Footer />
        </ChakraProvider>
      </main>
    </>
  )
}