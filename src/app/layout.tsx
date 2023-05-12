"use client";
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import theme from "./lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

import Head from "./component/head";

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
        
        {children}
        
      </ChakraProvider>
      </body>
    </html>
  )
}
