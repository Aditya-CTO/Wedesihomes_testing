import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      // Light mode colors (your existing)
      parrotGreen: '#7CB518',
      navyBlue: '#001F54',
      white: '#FFFFFF',
      lightGreen: '#E8F5E9',
      lightBlue: '#E3F2FD',
      
      // Fixed dark mode colors
      dark: {
        parrotGreen: '#7CB518',        // Keep same green
        navyBlue: '#60A5FA',           // Lighter blue for better contrast
        bg: {
          primary: '#121212',          // Main dark background
          secondary: '#1E1E1E',        // Section backgrounds  
          card: '#2A2A2A',             // Card backgrounds
          navy: '#1A1A2E',             // Navy sections
          search: '#2D2D2D',           // Search container
        },
        text: {
          primary: '#FFFFFF',          // White text
          secondary: '#E5E5E5',        // Light gray text 
          muted: '#A0A0A0',            // Muted text
          blue: '#60A5FA',             // Readable blue in dark mode
        },
        border: '#404040',
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
        bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh',
      },
      // Override Chakra's default colors
      '.chakra-ui-dark': {
        // Fix blue text colors in dark mode
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary !important' : undefined,
      },
      // Override specific color values for dark mode
      ...(props.colorMode === 'dark' && {
        // Override common blue colors that are hard to read
        'h1, h2, h3, h4, h5, h6': {
          color: 'brand.dark.text.primary !important',
        },
        // Fix blue text specifically
        '[style*="color: rgb(0, 31, 84)"], [style*="color:#001F54"]': {
          color: 'brand.dark.text.blue !important',
        },
      }),
    }),
  },
  semanticTokens: {
    colors: {
      // Override semantic tokens for better dark mode
      'chakra-body-text': {
        _light: 'brand.navyBlue',
        _dark: 'brand.dark.text.primary',
      },
      'chakra-body-bg': {
        _light: 'white',
        _dark: 'brand.dark.bg.primary',
      },
      'chakra-border-color': {
        _light: 'gray.200',
        _dark: 'brand.dark.border',
      },
    },
  },
  components: {
    // Global text components
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
      }),
      variants: {
        body: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
        }),
        muted: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.500',
        }),
        accent: () => ({
          color: 'brand.parrotGreen',
        }),
        // Special variant for blue text that needs to be readable
        blueText: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
        }),
      }
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
      }),
      variants: {
        // Readable blue headings
        blue: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
        }),
      }
    },

    Box: {
      baseStyle: (props) => ({
        // Ensure proper text color inheritance
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'inherit',
      }),
      variants: {
        section: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        }),
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          border: '1px solid',
        }),
        searchContainer: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.search' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        }),
        navySection: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.navy' : 'brand.navyBlue',
          color: 'white',
        }),
      }
    },

    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        transition: 'all 0.3s ease',
      },
      variants: {
        primary: () => ({
          bg: 'brand.parrotGreen',
          color: 'white',
          _hover: {
            bg: '#6BA414',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        outline: (props) => ({
          borderColor: 'brand.parrotGreen',
          color: 'brand.parrotGreen',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'brand.lightGreen',
            transform: 'translateY(-1px)',
          },
        }),
        // Blue button variant for better contrast
        blueOutline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(96, 165, 250, 0.1)' : 'brand.lightBlue',
          },
        }),
      }
    },

    Input: {
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.400',
            },
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
            },
            _focus: {
              borderColor: 'brand.parrotGreen',
              boxShadow: `0 0 0 1px #7CB518`,
            },
          },
        }),
        // Special variant for search inputs
        search: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? '#1A1A1A' : '#2A2A2A',
            borderColor: 'transparent',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'white',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.400',
            },
          },
        }),
      },
    },

    // Fix other components
    Container: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'inherit',
      }),
    },

    VStack: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'inherit',
      }),
    },

    HStack: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'inherit',
      }),
    },

    Badge: {
      variants: {
        solid: () => ({
          bg: 'brand.parrotGreen',
          color: 'white',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.2)' : 'brand.lightGreen',
          color: 'brand.parrotGreen',
        }),
      }
    },

    // Override default Chakra colors
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        },
        overlay: {
          bg: 'blackAlpha.600',
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
        },
        item: {
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.1)' : 'gray.100',
            color: 'brand.parrotGreen',
          },
        },
      }),
    },
  },
});

export default theme;
