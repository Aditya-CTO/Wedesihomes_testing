import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      parrotGreen: '#7CB518',
      navyBlue: '#001F54',
      white: '#FFFFFF',
      lightGreen: '#E8F5E9',
      lightBlue: '#E3F2FD',

      dark: {
        parrotGreen: '#7CB518',
        navyBlue: '#60A5FA',           // Lighter blue for readability
        bg: {
          primary: '#0F0F0F',          // Consistent dark background
          secondary: '#1A1A1A',        // Section backgrounds  
          card: '#2A2A2A',             // Card backgrounds
          navy: '#1A1A2E',             // Replace blue sections
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          muted: '#A0A0A0',
          blue: '#60A5FA',             // Readable blue
        },
        border: '#404040',
        hover: '#2A2A2A',
      }
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0F0F0F !important' : 'white',
        color: props.colorMode === 'dark' ? '#FFFFFF' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh',
      },
      '#root': {
        bg: props.colorMode === 'dark' ? '#0F0F0F !important' : 'white',
        minHeight: '100vh',
      },
      ...(props.colorMode === 'dark' && {
        '[style*="background: linear-gradient"][style*="blue"]': {
          background: 'linear-gradient(135deg, #1A1A2E 0%, #0F0F0F 100%) !important',
        },
        '[style*="background-color: #001F54"], [style*="background: #001F54"]': {
          backgroundColor: '#1A1A2E !important',
        },
        '[style*="color: #001F54"], [style*="color: rgb(0, 31, 84)"]': {
          color: '#60A5FA !important',
        },
        // ✅ NEWLY ADDED PART
        'h1, h2, h3, h4, h5, h6': {
          '&[style*="color: rgb(0, 31, 84)"], &[style*="color:#001F54"]': {
            color: '#60A5FA !important',
          },
        },
        '[style*="color: rgb(0, 31, 84)"], [style*="color:#001F54"]': {
          color: '#60A5FA !important',
        },
        '.chakra-heading': {
          '&[style*="color: rgb(0, 31, 84)"]': {
            color: 'white !important',
          },
        },
      }),
    }),
  },
  components: {
    Box: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'inherit',
      }),
      variants: {
        page: (props) => ({
          bg: props.colorMode === 'dark' ? '#0F0F0F' : 'white',
          minH: '100vh',
        }),
        section: (props) => ({
          bg: props.colorMode === 'dark' ? '#0F0F0F' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
        }),
        blueSection: (props) => ({
          bg: props.colorMode === 'dark' ? '#1A1A2E' : 'brand.navyBlue',
          color: 'white',
        }),
        card: (props) => ({
          bg: props.colorMode === 'dark' ? '#2A2A2A' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? '#404040' : 'gray.200',
        }),
      }
    },

    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? '#E5E5E5' : 'gray.600',
      }),
      variants: {
        blue: (props) => ({
          color: props.colorMode === 'dark' ? '#60A5FA' : 'brand.navyBlue',
        }),
      }
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
      }),
      variants: {
        blue: (props) => ({
          color: props.colorMode === 'dark' ? '#60A5FA' : 'brand.navyBlue',
        }),
      }
    },

    Button: {
      variants: {
        primary: {
          bg: 'brand.parrotGreen',
          color: 'white',
          _hover: { bg: '#6BA414', transform: 'translateY(-2px)' },
        },
        outline: (props) => ({
          borderColor: 'brand.parrotGreen',
          color: 'brand.parrotGreen',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.1)' : 'brand.lightGreen',
          },
        }),
        country: (props) => ({
          color: props.colorMode === 'dark' ? '#A0A0A0' : 'gray.600',
          bg: 'transparent',
          _hover: {
            color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
            bg: props.colorMode === 'dark' ? 'rgba(255,255,255,0.1)' : 'gray.100',
          },
        }),
        countryActive: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          color: 'white',
        }),
      }
    },
  },
});

export default theme;
