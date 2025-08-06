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
        navyBlue: '#60A5FA',
        bg: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A',
          card: '#2A2A2A',
          navy: '#1A1A2E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          muted: '#A0A0A0',
          blue: '#60A5FA',
        },
        border: '#404040',
        hover: '#2A2A2A',
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
        bg: props.colorMode === 'dark' ? '#0F0F0F !important' : 'white',
        color: props.colorMode === 'dark' ? '#FFFFFF' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh',
      },
      '#root': {
        bg: props.colorMode === 'dark' ? '#0F0F0F !important' : 'white',
        minHeight: '100vh',
      },
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
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
      }),
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
      }
    },
  },
});

export default theme;
