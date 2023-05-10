import { extendTheme } from "@chakra-ui/react";
//Font
import "@fontsource/yaldevi/400.css";
import "@fontsource/yaldevi/700.css";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: `'Yaldevi', sans-serif`,
    body: `'Yaldevi', sans-serif`,
  },
  colors: {
    flemingo: {
     '50': '#fef5ee',
    '100': '#fce8d8',
    '200': '#f9cdaf',
    '300': '#f4aa7d',
    '400': '#ef7d48',
    '500': '#eb5e28', //base color
    '600': '#dc421a',
    '700': '#b73117',
    '800': '#91281b',
    '900': '#752419',
    '950': '#3f0f0b',
    },
    merlin: {
      '50': '#f7f7f6',
      '100': '#e5e4e2',
      '200': '#cbc7c4',
      '300': '#aaa49e',
      '400': '#87817a',
      '500': '#6d665f',
      '600': '#56514b',
      '700': '#47433e',
      '800': '#403d39', //base color
      '900': '#33312e',
      '950': '#1b1a18',
    },
    tuatara: {
      '50': '#f7f7f6',
      '100': '#e5e3e2',
      '200': '#cac7c5',
      '300': '#a8a4a0',
      '400': '#85817c',
      '500': '#6a6762',
      '600': '#54514d',
      '700': '#454340',
      '800': '#393836',
      '900': '#32312f',
      '950': '#252422',//base color
    },
    ash: {
      '50': '#f7f6f5',
      '100': '#edebe7',
      '200': '#dbd6cd',
      '300': '#ccc5b9',//base color
      '400': '#ab9e8c',
      '500': '#9a8875',
      '600': '#8d7969',
      '700': '#766558',
      '800': '#61544b',
      '900': '#50453e',
      '950': '#2a2320',
    },
    pearl: {
      '50': '#fffcf2', //base color
      '100': '#fff6d5',
      '200': '#fee9aa',
      '300': '#fdd774',
      '400': '#fbbb3c',
      '500': '#f9a416',
      '600': '#ea870c',
      '700': '#c2680c',
      '800': '#9a5112',
      '900': '#7c4412',
      '950': '#432107',
    },
  },
});

export default theme;