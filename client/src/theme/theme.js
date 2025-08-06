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
          card: 'rgba(42, 42, 42, 0.95)',
          glass: 'rgba(255, 255, 255, 0.05)',
          navy: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F1419 100%)',
          gradient: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #2A2A2A 100%)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          muted: '#A0A0A0',
          blue: '#60A5FA',
          glow: '#7CB518',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        borderGlow: 'rgba(124, 181, 24, 0.3)',
        hover: 'rgba(255, 255, 255, 0.05)',
        glass: {
          bg: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.12)',
          shadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
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
        color: props.colorMode === 'dark' ? '#FFFFFF' : 'brand.navyBlue',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh',
        position: 'relative',
        
        // ✨ DARK MODE AMBIENT EFFECTS
        ...(props.colorMode === 'dark' && {
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(124, 181, 24, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.03) 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: -1,
          }
        }),
      },
      
      '#root': {
        bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
        minHeight: '100vh',
      },

      // 🎯 GLOBAL BLUE HEADING FIXES FOR DARK MODE
      ...(props.colorMode === 'dark' && {
        // Fix ALL headings with navy blue color
        'h1, h2, h3, h4, h5, h6, .chakra-heading': {
          '&[style*="color: rgb(0, 31, 84)"], &[style*="color: #001F54"], &[data-color="brand.navyBlue"]': {
            color: '#60A5FA !important',
          },
        },
        
        // Fix specific Chakra heading components
        '.chakra-heading': {
          color: 'white !important',
        },
        
        // Fix any remaining blue text
        '[style*="color: rgb(0, 31, 84)"], [style*="color:#001F54"], [style*="color: #001F54"]': {
          color: '#60A5FA !important',
        },
        
        // Fix blue backgrounds to dark navy
        '[style*="background: rgb(0, 31, 84)"], [style*="background-color: #001F54"]': {
          background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F1419 100%) !important',
        },
      }),

      // ✨ CUSTOM SCROLLBAR
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: props.colorMode === 'dark' ? '#1A1A1A' : '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #7CB518, #60A5FA)' 
          : 'linear-gradient(45deg, #7CB518, #001F54)',
        borderRadius: '10px',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #6BA414, #4A90E2)' 
          : 'linear-gradient(45deg, #6BA414, #001A47)',
      },

      // ✨ SELECTION STYLES
      '::selection': {
        background: props.colorMode === 'dark' 
          ? 'rgba(124, 181, 24, 0.3)' 
          : 'rgba(124, 181, 24, 0.2)',
        color: props.colorMode === 'dark' ? 'white' : 'inherit',
      },
    }),
  },
  
  // 🎨 SEMANTIC TOKENS FOR BETTER COLOR MANAGEMENT
  semanticTokens: {
    colors: {
      'bg-primary': {
        default: 'white',
        _dark: 'brand.dark.bg.primary',
      },
      'bg-secondary': {
        default: 'gray.50',
        _dark: 'brand.dark.bg.secondary',
      },
      'text-primary': {
        default: 'brand.navyBlue',
        _dark: 'brand.dark.text.primary',
      },
      'text-secondary': {
        default: 'gray.600',
        _dark: 'brand.dark.text.secondary',
      },
    },
  },

  components: {
    // ✨ ENHANCED BOX COMPONENT
    Box: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'inherit',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }),
      variants: {
        page: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
          minH: '100vh',
        }),
        
        // 🌟 GLASS MORPHISM CARD
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: props.colorMode === 'dark' 
            ? 'brand.dark.glass.shadow' 
            : '0 8px 32px rgba(31, 38, 135, 0.37)',
          borderRadius: '16px',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 181, 24, 0.2)'
              : '0 12px 40px rgba(31, 38, 135, 0.5)',
          },
        }),

        // 🎯 PREMIUM CARD
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '20px',
          backdropFilter: props.colorMode === 'dark' ? 'blur(10px)' : 'none',
          boxShadow: props.colorMode === 'dark' 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-8px) scale(1.01)',
            boxShadow: props.colorMode === 'dark'
              ? '0 32px 64px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(124, 181, 24, 0.1)'
              : '0 32px 64px -12px rgba(0, 0, 0, 0.25)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
          },
        }),

        // 🌊 GRADIENT SECTION
        gradientSection: (props) => ({
          background: props.colorMode === 'dark' 
            ? 'brand.dark.bg.gradient'
            : 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: props.colorMode === 'dark'
              ? 'radial-gradient(circle at 30% 60%, rgba(124, 181, 24, 0.05) 0%, transparent 50%)'
              : 'radial-gradient(circle at 70% 40%, rgba(124, 181, 24, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }),

        // 🌌 NAVY SECTION WITH STARS EFFECT
        navySection: (props) => ({
          background: props.colorMode === 'dark' ? 'brand.dark.bg.navy' : 'brand.navyBlue',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: props.colorMode === 'dark'
              ? 'radial-gradient(circle at 25% 75%, rgba(124, 181, 24, 0.1) 0%, transparent 25%), radial-gradient(circle at 75% 25%, rgba(96, 165, 250, 0.1) 0%, transparent 25%)'
              : 'radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 25%)',
            pointerEvents: 'none',
          },
        }),
      }
    },

    // ✨ ENHANCED HEADING COMPONENT
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
      }),
      variants: {
        gradient: (props) => ({
          background: props.colorMode === 'dark' 
            ? 'linear-gradient(135deg, #7CB518 0%, #60A5FA 100%)'
            : 'linear-gradient(135deg, #7CB518 0%, #001F54 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
        }),
        glow: (props) => ({
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          textShadow: props.colorMode === 'dark' 
            ? '0 0 20px rgba(124, 181, 24, 0.3)'
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
        }),
      }
    },

    // ✨ ENHANCED TEXT COMPONENT
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
        transition: 'color 0.3s ease-in-out',
      }),
      variants: {
        accent: {
          color: 'brand.parrotGreen',
          fontWeight: 'medium',
        },
        muted: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.500',
        }),
      }
    },

    // ✨ PREMIUM BUTTON DESIGNS
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '12px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
      },
      variants: {
        primary: (props) => ({
          bg: 'linear-gradient(135deg, #7CB518 0%, #6BA414 100%)',
          color: 'white',
          border: 'none',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.6s',
          },
          _hover: {
            bg: 'linear-gradient(135deg, #6BA414 0%, #5A9312 100%)',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 20px 40px rgba(124, 181, 24, 0.4), 0 0 0 1px rgba(124, 181, 24, 0.5)'
              : '0 20px 40px rgba(124, 181, 24, 0.3)',
            _before: {
              left: '100%',
            },
          },
          _active: {
            transform: 'translateY(-1px) scale(1.01)',
          },
        }),

        // 🌟 GLASS BUTTON
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.2)',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.35)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        }),

        outline: (props) => ({
          borderColor: 'brand.parrotGreen',
          color: 'brand.parrotGreen',
          borderWidth: '2px',
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.1)' : 'brand.lightGreen',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 25px rgba(124, 181, 24, 0.2)'
              : '0 8px 25px rgba(124, 181, 24, 0.15)',
          },
        }),
      }
    },

    // ✨ ENHANCED INPUT COMPONENTS
    Input: {
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'rgba(42, 42, 42, 0.8)' : 'white',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
                        backdropFilter: props.colorMode === 'dark' ? 'blur(10px)' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.400',
            },
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark' 
                ? '0 0 0 1px rgba(124, 181, 24, 0.2)'
                : '0 0 0 1px rgba(124, 181, 24, 0.1)',
            },
            _focus: {
              borderColor: 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark'
                ? '0 0 0 1px rgba(124, 181, 24, 0.5), 0 0 20px rgba(124, 181, 24, 0.1)'
                : '0 0 0 1px rgba(124, 181, 24, 0.6)',
            },
          },
        }),
        
        // 🌟 GLASS INPUT
        glass: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
            color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
            _focus: {
              borderColor: 'brand.parrotGreen',
              boxShadow: '0 0 0 1px rgba(124, 181, 24, 0.5)',
            },
          },
        }),
      },
    },

    // ✨ ENHANCED MODAL COMPONENT
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(30px)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
          borderRadius: '20px',
          boxShadow: props.colorMode === 'dark'
            ? '0 50px 100px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 50px 100px rgba(0, 0, 0, 0.25)',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
        },
        overlay: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(0, 0, 0, 0.8)' 
            : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
        },
      }),
    },

    // ✨ ENHANCED MENU COMPONENT
    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(20px)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '16px',
          boxShadow: props.colorMode === 'dark'
            ? '0 25px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
            : '0 25px 50px rgba(0, 0, 0, 0.15)',
          py: 2,
        },
        item: {
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          borderRadius: '8px',
          mx: 2,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.1)' : 'rgba(124, 181, 24, 0.05)',
            color: 'brand.parrotGreen',
            transform: 'translateX(4px)',
          },
          _focus: {
            bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.1)' : 'rgba(124, 181, 24, 0.05)',
          },
        },
      }),
    },

    // ✨ ENHANCED BADGE COMPONENT
    Badge: {
      variants: {
        solid: (props) => ({
          bg: 'linear-gradient(135deg, #7CB518 0%, #6BA414 100%)',
          color: 'white',
          borderRadius: '8px',
          px: 3,
          py: 1,
          fontWeight: 'bold',
          fontSize: 'xs',
          textTransform: 'none',
        }),
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.2)' : 'rgba(124, 181, 24, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.3)' : 'rgba(124, 181, 24, 0.2)',
          color: 'brand.parrotGreen',
          borderRadius: '12px',
          px: 3,
          py: 1,
          fontWeight: 'medium',
          fontSize: 'xs',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(124, 181, 24, 0.15)' : 'brand.lightGreen',
          color: 'brand.parrotGreen',
          borderRadius: '8px',
          px: 3,
          py: 1,
          fontWeight: 'medium',
        }),
      }
    },

    // ✨ ENHANCED PROGRESS COMPONENT
    Progress: {
      baseStyle: (props) => ({
        filledTrack: {
          bg: 'linear-gradient(90deg, #7CB518 0%, #6BA414 100%)',
          borderRadius: 'full',
        },
        track: {
          bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'gray.200',
          borderRadius: 'full',
        },
      }),
    },

    // ✨ ENHANCED DIVIDER COMPONENT
    Divider: {
      baseStyle: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
        opacity: props.colorMode === 'dark' ? 0.6 : 1,
      }),
      variants: {
        gradient: (props) => ({
          background: props.colorMode === 'dark'
            ? 'linear-gradient(90deg, transparent 0%, rgba(124, 181, 24, 0.3) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(124, 181, 24, 0.2) 50%, transparent 100%)',
          height: '1px',
          border: 'none',
        }),
      }
    },

    // ✨ ENHANCED CONTAINER COMPONENT
    Container: {
      baseStyle: {
        transition: 'all 0.3s ease-in-out',
      },
      variants: {
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)',
          borderRadius: '24px',
          p: 8,
        }),
      }
    },

    // ✨ ENHANCED STAT COMPONENT
    Stat: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          borderRadius: '20px',
          p: 6,
          textAlign: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          _hover: {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 181, 24, 0.2)'
              : '0 25px 50px rgba(0, 0, 0, 0.15)',
          },
        },
        number: {
          color: 'brand.parrotGreen',
          fontSize: '4xl',
          fontWeight: 'bold',
        },
        label: {
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          fontSize: 'lg',
          fontWeight: 'medium',
        },
      }),
    },

    // ✨ ENHANCED ALERT COMPONENT
    Alert: {
      variants: {
        glass: (props) => ({
          container: {
            bg: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
          },
        }),
      }
    },
  },

  // ✨ LAYER STYLES FOR QUICK APPLICATION
  layerStyles: {
    glass: {
      bg: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '16px',
    },
    glassCard: {
      bg: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(30px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
    },
  },

  // ✨ TEXT STYLES FOR CONSISTENCY
  textStyles: {
    gradient: {
      background: 'linear-gradient(135deg, #7CB518 0%, #60A5FA 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
    },
    glow: {
      textShadow: '0 0 20px rgba(124, 181, 24, 0.4)',
    },
  },
});

export default theme;
