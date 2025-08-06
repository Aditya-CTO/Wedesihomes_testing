import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      // Light mode colors (your existing colors)
      parrotGreen: '#7CB518',
      navyBlue: '#001F54',
      white: '#FFFFFF',
      lightGreen: '#E8F5E9',
      lightBlue: '#E3F2FD',
      
      // Dark mode variants - enhanced versions of your colors
      dark: {
        parrotGreen: '#9AE634', // Brighter green for dark mode
        navyBlue: '#4A90E2', // Lighter blue for dark mode
        lightGreen: '#1A4D1A', // Dark green tint
        lightBlue: '#1A365D', // Dark blue tint
        cardBg: '#2A2A2A', // Dark card background
        borderColor: '#404040', // Dark border
        hoverBg: '#363636', // Hover background
      }
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh',
      },
      '*': {
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
      }
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        transition: 'all 0.3s ease',
      },
      variants: {
        primary: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? '#B8FF4D' : '#6BA414',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark' 
              ? '0 8px 25px rgba(154, 230, 52, 0.4)'
              : '0 8px 25px rgba(124, 181, 24, 0.4)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        secondary: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.navyBlue' : 'brand.navyBlue',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? '#6BB6FF' : '#001A47',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 25px rgba(74, 144, 226, 0.4)'
              : '0 8px 25px rgba(0, 31, 84, 0.4)',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.lightGreen' : 'brand.lightGreen',
            transform: 'translateY(-1px)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          },
        }),
        ghost: (props) => ({
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hoverBg' : 'gray.100',
          },
        }),
      }
    },
    Box: {
      variants: {
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.borderColor' : 'gray.200',
          boxShadow: props.colorMode === 'dark' 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          _hover: {
            boxShadow: props.colorMode === 'dark'
              ? '0 25px 30px -5px rgba(0, 0, 0, 0.6), 0 15px 15px -5px rgba(0, 0, 0, 0.3)'
              : '0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)',
          },
        }),
      }
    },
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
        },
        overlay: {
          bg: props.colorMode === 'dark' ? 'blackAlpha.700' : 'blackAlpha.600',
        },
      }),
    },
    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.borderColor' : 'gray.200',
          boxShadow: props.colorMode === 'dark'
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        },
        item: {
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hoverBg' : 'gray.100',
          },
          _focus: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hoverBg' : 'gray.100',
          },
        },
      }),
    },
    Input: {
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderColor' : 'gray.200',
            bg: props.colorMode === 'dark' ? 'brand.dark.hoverBg' : 'white',
            color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
              boxShadow: `0 0 0 1px ${props.colorMode === 'dark' ? '#9AE634' : '#7CB518'}`,
            },
          },
        }),
      },
    },
    Textarea: {
      variants: {
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.borderColor' : 'gray.200',
          bg: props.colorMode === 'dark' ? 'brand.dark.hoverBg' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          _hover: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          },
          _focus: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
            boxShadow: `0 0 0 1px ${props.colorMode === 'dark' ? '#9AE634' : '#7CB518'}`,
          },
        }),
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
      }),
    },
    Text: {
      variants: {
        body: (props) => ({
          color: props.colorMode === 'dark' ? 'gray.300' : 'gray.600',
        }),
      }
    },
    Badge: {
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'black' : 'white',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.lightGreen' : 'brand.lightGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.parrotGreen' : 'brand.parrotGreen',
        }),
      }
    },
  },
});

export default theme;
