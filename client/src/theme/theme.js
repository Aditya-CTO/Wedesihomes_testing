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
      
      // Clean dark mode colors
      dark: {
        parrotGreen: '#7CB518',
        navyBlue: '#4A90E2',
        bg: {
          primary: '#121212',     // Main background
          secondary: '#1E1E1E',   // Section backgrounds  
          card: '#2A2A2A',        // Card backgrounds
          navy: '#1A1A2E',        // Navy sections in dark mode
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5', 
          muted: '#A0A0A0',
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
      // Override common background colors in dark mode
      '.chakra-ui-dark': {
        // Force dark backgrounds for common containers
        '& > div, & section, & main': {
          backgroundColor: props.colorMode === 'dark' ? 'brand.dark.bg.primary !important' : undefined,
        }
      }
    }),
  },
  components: {
    // Container component for sections
    Container: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'transparent',
      }),
    },
    
    Box: {
      baseStyle: (props) => ({
        // Default box styling for dark mode
        ...(props.colorMode === 'dark' && {
          color: 'brand.dark.text.primary',
        }),
      }),
      variants: {
        section: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        }),
        lightSection: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.secondary' : 'gray.50',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        }),
        navySection: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.navy' : 'brand.navyBlue',
          color: 'white',
        }),
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          boxShadow: props.colorMode === 'dark' 
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
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
        primary: (props) => ({
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
      }
    },
    
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
      }),
    },
    
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
      }),
    },
    
    // Input components
    Input: {
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _focus: {
              borderColor: 'brand.parrotGreen',
              boxShadow: `0 0 0 1px #7CB518`,
            },
          },
        }),
      },
    },
    
    // Other components...
    Badge: {
      variants: {
        solid: () => ({
          bg: 'brand.parrotGreen',
          color: 'white',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'brand.lightGreen',
          color: 'brand.parrotGreen',
        }),
      }
    },
  },
});

export default theme;
