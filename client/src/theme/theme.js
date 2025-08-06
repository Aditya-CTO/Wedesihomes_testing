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
      
      // 🎯 CLEAN DARK MODE - Matching your brand
      dark: {
        // Keep your brand colors, just adjust brightness
        parrotGreen: '#7CB518',    // Keep the same green
        navyBlue: '#4A90E2',      // Lighter blue for dark mode
        
        // Clean dark backgrounds
        bg: {
          primary: '#1A1A1A',      // Clean dark background
          secondary: '#2D2D2D',    // Slightly lighter for sections
          navy: '#001F54',         // Your original navy for accent sections
          card: '#2A2A2A',         // Card background
        },
        
        // Simple borders and accents
        border: '#404040',
        borderLight: '#505050',
        hover: '#353535',
        active: '#404040',
        
        // Clean text colors
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          muted: '#A0A0A0',
        }
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
      '*': {
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
      },
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
          bg: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'white' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? '#6BA414' : '#6BA414',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        secondary: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.navyBlue' : 'brand.navyBlue',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? '#5BA0F2' : '#001A47',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'brand.lightGreen',
            transform: 'translateY(-1px)',
          },
        }),
        ghost: (props) => ({
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.100',
          },
        }),
      }
    },
    
    Box: {
      variants: {
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          boxShadow: props.colorMode === 'dark' 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          _hover: {
            boxShadow: props.colorMode === 'dark'
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
              : '0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)',
          },
        }),
        section: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.secondary' : 'white',
        }),
        navySection: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.navy' : 'brand.navyBlue',
        }),
      }
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
      }),
      variants: {
        navy: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.navyBlue' : 'brand.navyBlue',
        }),
        accent: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
        }),
      }
    },

    Text: {
      variants: {
        body: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
        }),
        muted: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.500',
        }),
        accent: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
        }),
      }
    },

    Badge: {
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          color: 'white',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'brand.lightGreen',
          color: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
        }),
      }
    },

    Input: {
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.borderLight' : 'brand.parrotGreen',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
              boxShadow: `0 0 0 1px ${props.colorMode === 'dark' ? '#7CB518' : '#7CB518'}`,
            },
          },
        }),
        filled: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.secondary' : 'gray.100',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _hover: {
              bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.200',
            },
          },
        }),
      },
    },

    Textarea: {
      variants: {
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          _hover: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderLight' : 'brand.parrotGreen',
          },
          _focus: {
            borderColor: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
            boxShadow: `0 0 0 1px ${props.colorMode === 'dark' ? '#7CB518' : '#7CB518'}`,
          },
        }),
      },
    },

    Select: {
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.borderLight' : 'brand.parrotGreen',
            },
          },
        }),
      },
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
        },
        overlay: {
          bg: props.colorMode === 'dark' ? 'blackAlpha.800' : 'blackAlpha.600',
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          boxShadow: props.colorMode === 'dark'
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        },
        item: {
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.100',
            color: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
          },
          _focus: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.100',
          },
        },
      }),
    },

    Progress: {
      baseStyle: (props) => ({
        filledTrack: {
          bg: props.colorMode === 'dark' ? 'brand.parrotGreen' : 'brand.parrotGreen',
        },
        track: {
          bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.200',
        },
      }),
    },

    Divider: {
      baseStyle: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
      }),
    },

    // Special variants for your sections
    Container: {
      variants: {
        hero: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'transparent',
        }),
        stats: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.navy' : 'brand.navyBlue',
        }),
        featured: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.secondary' : 'gray.50',
        }),
      }
    },
  },
});

export default theme;
