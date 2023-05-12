'use client'

import Hero from "./component/hero";
import Feature01 from "./component/feature01";
import Feature02 from "./component/feature02";
import Feature03 from "./component/feature03";
import UseFullStuff from "./component/usfullstuff";
import Locations from "./component/locations";
import Vision from "./component/vision";

import Nav from "./component/nav";
import Footer from "./component/footer";


export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <Hero/>
        <Feature01 />
        <Feature02 />
        <Feature03 />
        <UseFullStuff />
        <Locations />
        <Vision />
        <Footer />
      </main>
    </>
  )
}