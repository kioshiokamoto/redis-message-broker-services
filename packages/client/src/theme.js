import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "./styles/buttonStyle"
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  xs: "320px",
  sm: "560px",
  md: "768px",
  lg: "960px",
  xl: "1200px"
})
export const newTheme = extendTheme({
  breakpoints,
  colors: {
    primary: "#FDEDC4",
    secondary: "#832361",
    terciary: "#BA3089",
    white: "#FFFF",
    black: "#525252"
  },
  components: {
    Button,
  }
})
