"use client";
import theme from "./lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import SplashScreen from "./component/splashscreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Nav from "./component/nav";
import Footer from "./component/footer";

export const metadata = {
  title: 'buddaya',
  description: 'description',
}

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
      <body>
        <ChakraProvider theme={theme}>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              <Nav />
              {children}
              <Footer />
            </>
          )}
        </ChakraProvider>
      </body>
    </html>
  )
}
