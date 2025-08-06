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
      
      // 🔥 STUNNING DARK MODE COLORS
      dark: {
        // Primary colors - vibrant and energetic
        parrotGreen: '#00FF88', // Electric green
        navyBlue: '#00D4FF',    // Cyber blue
        
        // Background gradients - multiple layers
        bg: {
          primary: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 25%, #16213E 50%, #0F1419 75%, #000000 100%)',
          secondary: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 25%, #0F1419 50%, #533483 75%, #7209B7 100%)',
          accent: 'linear-gradient(135deg, #16213E 0%, #533483 25%, #7209B7 50%, #A663CC 75%, #4FC3F7 100%)',
          hero: 'linear-gradient(135deg, #000428 0%, #004e92 25%, #7209B7 50%, #A663CC 75%, #4FC3F7 100%)',
        },
        
        // Card backgrounds - glass morphism effect
        cardBg: 'rgba(26, 26, 46, 0.95)',
        glassCard: 'rgba(22, 33, 62, 0.85)',
        premiumCard: 'rgba(83, 52, 131, 0.75)',
        
        // Border and accent colors
        border: 'rgba(0, 212, 255, 0.2)',
        borderGlow: 'rgba(0, 255, 136, 0.3)',
        accentBorder: 'rgba(166, 99, 204, 0.4)',
        
        // Text colors
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E6ED',
          accent: '#00FF88',
          muted: '#9CA3AF',
          glow: '#4FC3F7',
        },
        
        // Interactive colors
        hover: 'rgba(0, 255, 136, 0.1)',
        active: 'rgba(0, 212, 255, 0.15)',
        focus: 'rgba(166, 99, 204, 0.2)',
        
        // Status colors
        success: '#00FF88',
        warning: '#FFD700',
        error: '#FF6B6B',
        info: '#4FC3F7',
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
          ? 'brand.dark.bg.primary'
          : 'white',
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh',
        position: 'relative',
        '&::before': props.colorMode === 'dark' ? {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(79, 195, 247, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: -1,
        } : {},
      },
      '*': {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        scrollBehavior: 'smooth',
      },
      // Custom scrollbar for dark mode
      '::-webkit-scrollbar': props.colorMode === 'dark' ? {
        width: '8px',
      } : {},
      '::-webkit-scrollbar-track': props.colorMode === 'dark' ? {
        background: 'rgba(26, 26, 46, 0.5)',
      } : {},
      '::-webkit-scrollbar-thumb': props.colorMode === 'dark' ? {
        background: 'linear-gradient(45deg, #00FF88, #4FC3F7)',
        borderRadius: '10px',
      } : {},
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
      },
      variants: {
        primary: (props) => ({
          bg: props.colorMode === 'dark' 
            ? 'linear-gradient(135deg, #00FF88 0%, #4FC3F7 100%)'
            : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          fontWeight: 'bold',
          _before: props.colorMode === 'dark' ? {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.6s',
          } : {},
          _hover: {
            bg: props.colorMode === 'dark' 
              ? 'linear-gradient(135deg, #00E075 0%, #3BB8E8 100%)'
              : '#6BA414',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 20px 40px rgba(0, 255, 136, 0.3), 0 0 0 1px rgba(0, 255, 136, 0.5)'
              : '0 20px 40px rgba(124, 181, 24, 0.4)',
            _before: props.colorMode === 'dark' ? {
              left: '100%',
            } : {},
          },
          _active: {
            transform: 'translateY(-1px) scale(1.01)',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
          borderWidth: '2px',
          _hover: {
            bg: props.colorMode === 'dark' 
              ? 'brand.dark.hover'
              : 'brand.lightGreen',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 10px 20px rgba(0, 255, 136, 0.2)'
              : '0 10px 20px rgba(124, 181, 24, 0.2)',
          },
        }),
        ghost: (props) => ({
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.100',
            color: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
          },
        }),
      }
    },
    
    Box: {
      variants: {
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          backdropFilter: props.colorMode === 'dark' ? 'blur(20px)' : 'none',
          boxShadow: props.colorMode === 'dark' 
            ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 255, 136, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 35px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 255, 136, 0.3), 0 0 30px rgba(79, 195, 247, 0.1)'
              : '0 25px 30px -5px rgba(0, 0, 0, 0.15)',
          },
        }),
        glassCard: (props) => props.colorMode === 'dark' ? {
          bg: 'brand.dark.glassCard',
          backdropFilter: 'blur(30px)',
          border: '1px solid',
          borderColor: 'brand.dark.borderGlow',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          _hover: {
            bg: 'brand.dark.premiumCard',
            borderColor: 'brand.dark.accentBorder',
            boxShadow: '0 35px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(166, 99, 204, 0.2)',
          },
        } : {
          bg: 'white',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        },
      }
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        textShadow: props.colorMode === 'dark' ? '0 0 30px rgba(79, 195, 247, 0.3)' : 'none',
      }),
    },

    Text: {
      variants: {
        body: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
        }),
        accent: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
          fontWeight: 'medium',
          textShadow: props.colorMode === 'dark' ? '0 0 20px rgba(0, 255, 136, 0.3)' : 'none',
        }),
      }
    },

    Badge: {
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' 
            ? 'linear-gradient(135deg, #00FF88, #4FC3F7)'
            : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'black' : 'white',
          fontWeight: 'bold',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'brand.lightGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
        }),
      }
    },

    Input: {
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            backdropFilter: props.colorMode === 'dark' ? 'blur(10px)' : 'none',
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark' 
                ? '0 0 0 1px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.2)'
                : `0 0 0 1px #7CB518`,
            },
          },
        }),
      },
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(30px)' : 'none',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
          boxShadow: props.colorMode === 'dark'
            ? '0 50px 100px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 255, 136, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(0, 0, 0, 0.8)' 
            : 'blackAlpha.600',
          backdropFilter: 'blur(10px)',
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.cardBg' : 'white',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          backdropFilter: props.colorMode === 'dark' ? 'blur(20px)' : 'none',
          boxShadow: props.colorMode === 'dark'
            ? '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 255, 136, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        },
        item: {
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.100',
            color: props.colorMode === 'dark' ? 'brand.dark.accent' : 'brand.parrotGreen',
          },
          _focus: {
            bg: props.colorMode === 'dark' ? 'brand.dark.active' : 'gray.100',
          },
        },
      }),
    },

    Progress: {
      baseStyle: (props) => ({
        filledTrack: {
          bg: props.colorMode === 'dark'
            ? 'linear-gradient(90deg, #00FF88, #4FC3F7)'
            : 'brand.parrotGreen',
        },
        track: {
          bg: props.colorMode === 'dark' ? 'brand.dark.hover' : 'gray.200',
        },
      }),
    },

    Divider: {
      baseStyle: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
        opacity: props.colorMode === 'dark' ? 0.3 : 1,
      }),
    },
  },
});

export default theme;
