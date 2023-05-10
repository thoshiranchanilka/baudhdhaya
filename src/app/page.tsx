'use client'
import Hero from "./component/hero";
import Feature01 from "./component/feature01";
import Feature02 from "./component/feature02";
import Feature03 from "./component/feature03";
import UseFullStuff from "./component/usfullstuff";
import ImgGen from "./component/imggen";
import Locations from "./component/locations";
import Vision from "./component/vision";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <Feature01 />
        <Feature02 />
        <Feature03 />
        <UseFullStuff />
        
        <Locations />
        <Vision />
      </main>
    </>
  )
}