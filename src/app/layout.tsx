"use client";
import { useEffect, useState } from 'react'
import theme from "./lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import Head from "./component/head";
import Nav from "./component/nav";
import Footer from "./component/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <html lang="en">
      <Head />
      <body>
        <ChakraProvider theme={theme}>
            <>
              <Nav />
              {children}
              <Footer />
            </>
        </ChakraProvider>
      </body>
    </html>
  )
}
