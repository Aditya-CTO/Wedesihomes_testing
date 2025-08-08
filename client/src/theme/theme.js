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
        
        // 🌊 VIBRANT BLUE THEME COLORS
        bg: {
          primary: 'linear-gradient(135deg, #0B1426 0%, #1E3A8A 25%, #1E40AF 75%, #1D4ED8 100%)',
          secondary: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%)',
          card: 'rgba(30, 58, 138, 0.85)',
          glass: 'rgba(59, 130, 246, 0.1)',
          navy: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #2563EB 100%)',
          gradient: 'linear-gradient(135deg, #0B1426 0%, #1E3A8A 30%, #2563EB 70%, #3B82F6 100%)',
          accent: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
          surface: 'rgba(30, 58, 138, 0.6)',
          overlay: 'rgba(11, 20, 38, 0.95)',
        },
        
        text: {
          primary: '#FFFFFF',
          secondary: '#E0E7FF',
          muted: '#A5B4FC',
          blue: '#60A5FA',
          glow: '#7CB518',
          accent: '#93C5FD',
        },
        
        border: 'rgba(96, 165, 250, 0.2)',
        borderGlow: 'rgba(59, 130, 246, 0.4)',
        hover: 'rgba(59, 130, 246, 0.15)',
        
        glass: {
          bg: 'rgba(30, 58, 138, 0.25)',
          border: 'rgba(96, 165, 250, 0.3)',
          shadow: '0 8px 32px rgba(30, 58, 138, 0.4)',
          backdrop: 'blur(20px) saturate(180%)',
        },
        
        // 🌟 ADVANCED GRADIENT COMBINATIONS
        gradients: {
          primary: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #60A5FA 100%)',
          secondary: 'linear-gradient(45deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)',
          accent: 'linear-gradient(90deg, #7CB518 0%, #60A5FA 100%)',
          glow: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          aurora: 'linear-gradient(45deg, #1E3A8A 0%, #7CB518 25%, #60A5FA 50%, #3B82F6 75%, #1D4ED8 100%)',
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
        
        // ✨ ENHANCED BLUE AMBIENT EFFECTS
        ...(props.colorMode === 'dark' && {
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(124, 181, 24, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(96, 165, 250, 0.06) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 0%, rgba(30, 58, 138, 0.02) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: -1,
            animation: 'aurora 20s ease-in-out infinite alternate',
          }
        }),
      },
      
      '#root': {
        bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
        minHeight: '100vh',
      },

      // 🎯 GLOBAL BLUE HEADING FIXES FOR DARK MODE
      ...(props.colorMode === 'dark' && {
        'h1, h2, h3, h4, h5, h6, .chakra-heading': {
          '&[style*="color: rgb(0, 31, 84)"], &[style*="color: #001F54"], &[data-color="brand.navyBlue"]': {
            color: '#E0E7FF !important',
          },
        },
        
        '.chakra-heading': {
          color: '#E0E7FF !important',
        },
        
        '[style*="color: rgb(0, 31, 84)"], [style*="color:#001F54"], [style*="color: #001F54"]': {
          color: '#60A5FA !important',
        },
        
        '[style*="background: rgb(0, 31, 84)"], [style*="background-color: #001F54"]': {
          background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #3B82F6 100%) !important',
        },
      }),

      // ✨ ENHANCED SCROLLBAR WITH BLUE THEME
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: props.colorMode === 'dark' ? 'rgba(30, 58, 138, 0.3)' : '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #3B82F6, #7CB518)' 
          : 'linear-gradient(45deg, #7CB518, #001F54)',
        borderRadius: '12px',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        boxShadow: props.colorMode === 'dark' ? 'inset 0 0 6px rgba(59, 130, 246, 0.3)' : 'none',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #60A5FA, #7CB518)' 
          : 'linear-gradient(45deg, #6BA414, #001A47)',
        boxShadow: props.colorMode === 'dark' ? 'inset 0 0 8px rgba(96, 165, 250, 0.4)' : 'none',
      },

      // ✨ SELECTION STYLES WITH BLUE THEME
      '::selection': {
        background: props.colorMode === 'dark' 
          ? 'rgba(59, 130, 246, 0.3)' 
          : 'rgba(124, 181, 24, 0.2)',
        color: props.colorMode === 'dark' ? '#E0E7FF' : 'inherit',
      },

      // 🌊 KEYFRAME ANIMATIONS
      '@keyframes aurora': {
        '0%': {
          transform: 'rotate(0deg) translateX(0px)',
        },
        '50%': {
          transform: 'rotate(180deg) translateX(10px)',
        },
        '100%': {
          transform: 'rotate(360deg) translateX(0px)',
        },
      },

      '@keyframes blueGlow': {
        '0%, 100%': {
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
        },
        '50%': {
          boxShadow: '0 0 30px rgba(96, 165, 250, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        },
      },
    }),
  },
  
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
    Box: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'inherit',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }),
      variants: {
        page: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.primary' : 'white',
          minH: '100vh',
        }),
        
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.25)',
          backdropFilter: props.colorMode === 'dark' ? 'brand.dark.glass.backdrop' : 'blur(20px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: props.colorMode === 'dark' 
            ? 'brand.dark.glass.shadow' 
            : '0 8px 32px rgba(31, 38, 135, 0.37)',
          borderRadius: '20px',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-6px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 15px 45px rgba(30, 58, 138, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.3)'
              : '0 12px 40px rgba(31, 38, 135, 0.5)',
            borderColor: props.colorMode === 'dark' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(255, 255, 255, 0.3)',
          },
        }),

        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '24px',
          backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
          boxShadow: props.colorMode === 'dark' 
            ? '0 25px 50px rgba(30, 58, 138, 0.4), inset 0 1px 0 rgba(96, 165, 250, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-10px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 35px 70px rgba(30, 58, 138, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.3)'
              : '0 32px 64px -12px rgba(0, 0, 0, 0.25)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
          },
        }),

        gradientSection: (props) => ({
          background: props.colorMode === 'dark' 
            ? 'brand.dark.gradients.primary'
            : 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
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
              ? 'radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 70% 40%, rgba(124, 181, 24, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }),

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
              ? `radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 30%),
                 radial-gradient(circle at 75% 25%, rgba(124, 181, 24, 0.1) 0%, transparent 30%)`
              : 'radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 25%)',
            pointerEvents: 'none',
          },
        }),
      }
    },

    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        transition: 'all 0.3s ease-in-out',
      }),
      variants: {
        gradient: (props) => ({
          background: props.colorMode === 'dark' 
            ? 'brand.dark.gradients.accent'
            : 'linear-gradient(135deg, #7CB518 0%, #001F54 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
        }),
        glow: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          textShadow: props.colorMode === 'dark' 
            ? '0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(96, 165, 250, 0.2)'
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
        }),
      }
    },

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

    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: '16px',
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
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transition: 'left 0.6s',
          },
          _hover: {
            bg: 'linear-gradient(135deg, #6BA414 0%, #5A9312 100%)',
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 25px 50px rgba(124, 181, 24, 0.4), 0 0 0 1px rgba(124, 181, 24, 0.5)'
              : '0 20px 40px rgba(124, 181, 24, 0.3)',
            _before: {
              left: '100%',
            },
          },
        }),

        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.25)',
          backdropFilter: props.colorMode === 'dark' ? 'blur(25px) saturate(180%)' : 'blur(20px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.2)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.35)',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 15px 35px rgba(30, 58, 138, 0.4)'
              : '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        }),

        outline: (props) => ({
                    borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          borderWidth: '2px',
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(59, 130, 246, 0.1)' 
              : 'brand.lightGreen',
            transform: 'translateY(-2px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 25px rgba(59, 130, 246, 0.2)'
              : '0 8px 25px rgba(124, 181, 24, 0.15)',
          },
        }),
      }
    },

    Input: {
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.surface' : 'white',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.400',
            },
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark' 
                ? '0 0 0 1px rgba(59, 130, 246, 0.3)'
                : '0 0 0 1px rgba(124, 181, 24, 0.1)',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark'
                ? '0 0 0 1px rgba(59, 130, 246, 0.6)'
                : '0 0 0 1px rgba(124, 181, 24, 0.6)',
            },
          },
        }),
        
        glass: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: props.colorMode === 'dark' ? 'brand.dark.glass.backdrop' : 'blur(20px)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.2)',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark'
                ? '0 0 0 1px rgba(59, 130, 246, 0.5)'
                : '0 0 0 1px rgba(124, 181, 24, 0.5)',
            },
          },
        }),
      },
    },

    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(35px) saturate(180%)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
          borderRadius: '24px',
          boxShadow: props.colorMode === 'dark'
            ? '0 50px 100px rgba(30, 58, 138, 0.8), inset 0 1px 0 rgba(96, 165, 250, 0.1)'
            : '0 50px 100px rgba(0, 0, 0, 0.25)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        },
        overlay: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(11, 20, 38, 0.8)' 
            : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px) saturate(150%)',
        },
      }),
    },

    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(25px) saturate(180%)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '20px',
          boxShadow: props.colorMode === 'dark'
            ? '0 25px 50px rgba(30, 58, 138, 0.6), inset 0 1px 0 rgba(96, 165, 250, 0.05)'
            : '0 25px 50px rgba(0, 0, 0, 0.15)',
          py: 3,
        },
        item: {
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'brand.navyBlue',
          borderRadius: '12px',
          mx: 3,
          my: 1,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(59, 130, 246, 0.15)' 
              : 'rgba(124, 181, 24, 0.05)',
            color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
            transform: 'translateX(6px)',
          },
          _focus: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(59, 130, 246, 0.1)' 
              : 'rgba(124, 181, 24, 0.05)',
          },
        },
      }),
    },

    Badge: {
      variants: {
        solid: (props) => ({
          bg: 'linear-gradient(135deg, #7CB518 0%, #6BA414 100%)',
          color: 'white',
          borderRadius: '12px',
          px: 4,
          py: 2,
          fontWeight: 'bold',
          fontSize: 'sm',
          textTransform: 'none',
        }),
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(124, 181, 24, 0.1)',
          backdropFilter: props.colorMode === 'dark' ? 'blur(15px)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(124, 181, 24, 0.2)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.accent' : 'brand.parrotGreen',
          borderRadius: '16px',
          px: 4,
          py: 2,
          fontWeight: 'medium',
          fontSize: 'sm',
        }),
      }
    },

    Progress: {
      baseStyle: (props) => ({
        filledTrack: {
          bg: props.colorMode === 'dark'
            ? 'brand.dark.gradients.accent'
            : 'linear-gradient(90deg, #7CB518 0%, #6BA414 100%)',
          borderRadius: 'full',
        },
        track: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.surface' : 'gray.200',
          borderRadius: 'full',
        },
      }),
    },

    Divider: {
      baseStyle: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
        opacity: props.colorMode === 'dark' ? 0.8 : 1,
      }),
      variants: {
        gradient: (props) => ({
          background: props.colorMode === 'dark'
            ? 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(124, 181, 24, 0.2) 50%, transparent 100%)',
          height: '2px',
          border: 'none',
          borderRadius: 'full',
        }),
      }
    },
  },

  layerStyles: {
    glass: {
      bg: 'rgba(30, 58, 138, 0.25)',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(96, 165, 250, 0.3)',
      borderRadius: '20px',
    },
    glassCard: {
      bg: 'rgba(30, 58, 138, 0.15)',
      backdropFilter: 'blur(35px) saturate(180%)',
      border: '1px solid rgba(96, 165, 250, 0.2)',
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(30, 58, 138, 0.4)',
    },
  },

  textStyles: {
    gradient: {
      background: 'linear-gradient(135deg, #7CB518 0%, #60A5FA 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
    },
    glow: {
      textShadow: '0 0 25px rgba(59, 130, 246, 0.4)',
    },
  },
});

export default theme;
