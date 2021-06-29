// eslint-disable-next-line import/no-extraneous-dependencies
import { whiten, darken } from "@chakra-ui/theme-tools"
export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      color: "#fff",
      _hover: {
        bg: darken("primary", 10)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    secondary: {
      bg: "secondary",
      color: "#fff",
      _hover: {
        bg: whiten("primary", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    terciary: {
      bg: "terciary",
      color: "#fff",
      _hover: {
        bg: darken("terciary", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    light: {
      bg: "#FFF",
      color: "primary",
      _hover: {
        bg: darken("#FFF", 10)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    third: {
      bg: "#FFF",
      color: "primary",
      border: "1px solid #304659",
      _hover: {
        bg: "primary",
        color: "#fff"
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    google: {
      bg: "#ffff",
      color: "#304659",
      border: "1px solid",
      borderColor: "#8298AB",
      _hover: {
        bg: darken("#ffff", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    },
    facebook: {
      bg: "#1877F2",
      color: "#ffff",
      _hover: {
        bg: darken("#1877F2", 20)
      },
      _active: {
        transform: "scale(0.9)"
      },
      _focus: {
        boxShadow: "none"
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {}
}
