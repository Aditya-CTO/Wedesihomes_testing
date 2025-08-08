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
        navyBlue: '#001F54', // ✅ RESTORED ORIGINAL NAVBAR COLOR
        
        // 🌊 DARKER BLUE THEME COLORS
        bg: {
          primary: 'linear-gradient(135deg, #050B1A 0%, #0F1B3C 25%, #1A2B5C 75%, #1F3A8A 100%)',
          secondary: 'linear-gradient(135deg, #0F1B3C 0%, #1E3A8A 50%, #2563EB 100%)',
          card: 'rgba(15, 27, 60, 0.9)',
          glass: 'rgba(31, 58, 138, 0.08)',
          navy: 'linear-gradient(135deg, #0F1B3C 0%, #1A2B5C 50%, #1E3A8A 100%)',
          gradient: 'linear-gradient(135deg, #050B1A 0%, #0F1B3C 30%, #1A2B5C 70%, #1E3A8A 100%)',
          accent: 'linear-gradient(135deg, #1A2B5C 0%, #1E3A8A 100%)',
          surface: 'rgba(15, 27, 60, 0.7)',
          overlay: 'rgba(5, 11, 26, 0.95)',
        },
        
        text: {
          primary: '#FFFFFF',
          secondary: '#D1D5DB',
          muted: '#9CA3AF',
          blue: '#60A5FA',
          glow: '#7CB518',
          accent: '#93C5FD',
        },
        
        border: 'rgba(75, 85, 99, 0.3)',
        borderGlow: 'rgba(31, 58, 138, 0.5)',
        hover: 'rgba(31, 58, 138, 0.15)',
        
        glass: {
          bg: 'rgba(15, 27, 60, 0.3)',
          border: 'rgba(75, 85, 99, 0.4)',
          shadow: '0 8px 32px rgba(15, 27, 60, 0.6)',
          backdrop: 'blur(20px) saturate(180%)',
        },
        
        // 🌟 DARKER GRADIENT COMBINATIONS
        gradients: {
          primary: 'linear-gradient(135deg, #0F1B3C 0%, #1E3A8A 50%, #2563EB 100%)',
          secondary: 'linear-gradient(45deg, #1A2B5C 0%, #1E3A8A 50%, #2563EB 100%)',
          accent: 'linear-gradient(90deg, #7CB518 0%, #60A5FA 100%)',
          glow: 'radial-gradient(circle at center, rgba(31, 58, 138, 0.2) 0%, transparent 70%)',
          aurora: 'linear-gradient(45deg, #0F1B3C 0%, #7CB518 25%, #60A5FA 50%, #1E3A8A 75%, #1A2B5C 100%)',
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
        
        // ✨ DARKER BLUE AMBIENT EFFECTS
        ...(props.colorMode === 'dark' && {
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(31, 58, 138, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(124, 181, 24, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(75, 85, 99, 0.05) 0%, transparent 50%)
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
            background: 'linear-gradient(45deg, transparent 0%, rgba(15, 27, 60, 0.02) 50%, transparent 100%)',
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

      // 🎯 FIXED NAVBAR/FOOTER COLOR OVERRIDES
      ...(props.colorMode === 'dark' && {
        // Keep navbar/footer original colors
        'nav, footer, [data-navbar], [data-footer], .navbar, .footer': {
          background: '#001F54 !important', // Original navy blue
          color: 'white !important',
        },
        
        'h1, h2, h3, h4, h5, h6, .chakra-heading': {
          '&[style*="color: rgb(0, 31, 84)"], &[style*="color: #001F54"], &[data-color="brand.navyBlue"]': {
            color: '#D1D5DB !important',
          },
        },
        
        '.chakra-heading': {
          color: '#D1D5DB !important',
        },
        
        '[style*="color: rgb(0, 31, 84)"], [style*="color:#001F54"], [style*="color: #001F54"]': {
          color: '#60A5FA !important',
        },
        
        '[style*="background: rgb(0, 31, 84)"], [style*="background-color: #001F54"]': {
          background: 'linear-gradient(135deg, #0F1B3C 0%, #1E3A8A 50%, #2563EB 100%) !important',
        },
      }),

      // ✨ ENHANCED SCROLLBAR WITH DARKER BLUE THEME
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: props.colorMode === 'dark' ? 'rgba(15, 27, 60, 0.4)' : '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #1E3A8A, #7CB518)' 
          : 'linear-gradient(45deg, #7CB518, #001F54)',
        borderRadius: '12px',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        boxShadow: props.colorMode === 'dark' ? 'inset 0 0 6px rgba(31, 58, 138, 0.4)' : 'none',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'dark' 
          ? 'linear-gradient(45deg, #2563EB, #7CB518)' 
          : 'linear-gradient(45deg, #6BA414, #001A47)',
        boxShadow: props.colorMode === 'dark' ? 'inset 0 0 8px rgba(37, 99, 235, 0.5)' : 'none',
      },

      // ✨ SELECTION STYLES WITH DARKER BLUE THEME
      '::selection': {
        background: props.colorMode === 'dark' 
          ? 'rgba(31, 58, 138, 0.4)' 
          : 'rgba(124, 181, 24, 0.2)',
        color: props.colorMode === 'dark' ? '#D1D5DB' : 'inherit',
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
          boxShadow: '0 0 20px rgba(31, 58, 138, 0.4)',
        },
        '50%': {
          boxShadow: '0 0 30px rgba(37, 99, 235, 0.6), 0 0 40px rgba(31, 58, 138, 0.4)',
        },
      },

      // ✨ ENHANCED WAVE ANIMATION FOR BOTH THEMES
      '@keyframes wave': {
        '0%': {
          transform: 'translateX(-100%) skewX(-15deg)',
        },
        '100%': {
          transform: 'translateX(100%) skewX(-15deg)',
        },
      },

      '@keyframes float': {
        '0%, 100%': {
          transform: 'translateY(0px)',
        },
        '50%': {
          transform: 'translateY(-8px)',
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
        
        // 🌟 ENHANCED GLASS FOR BOTH THEMES
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.3)',
          boxShadow: props.colorMode === 'dark' 
            ? 'brand.dark.glass.shadow' 
            : '0 8px 32px rgba(31, 38, 135, 0.37)',
          borderRadius: '20px',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: props.colorMode === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(75, 85, 99, 0.1), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.6s',
            pointerEvents: 'none',
          },
          _hover: {
            transform: 'translateY(-6px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 15px 45px rgba(15, 27, 60, 0.8), 0 0 0 1px rgba(31, 58, 138, 0.4)'
              : '0 12px 40px rgba(31, 38, 135, 0.5), 0 0 0 1px rgba(124, 181, 24, 0.2)',
            borderColor: props.colorMode === 'dark' ? 'rgba(75, 85, 99, 0.6)' : 'rgba(124, 181, 24, 0.3)',
            _before: {
              left: '100%',
            },
          },
        }),

        // 🎯 ENHANCED CARD FOR BOTH THEMES
        card: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '24px',
          backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
          boxShadow: props.colorMode === 'dark' 
            ? '0 25px 50px rgba(15, 27, 60, 0.6), inset 0 1px 0 rgba(75, 85, 99, 0.1)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
              ? 'brand.dark.gradients.glow'
              : 'radial-gradient(circle at center, rgba(124, 181, 24, 0.05) 0%, transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          _hover: {
            transform: 'translateY(-10px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 35px 70px rgba(15, 27, 60, 0.8), 0 0 0 1px rgba(31, 58, 138, 0.4)'
              : '0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(124, 181, 24, 0.3)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
            _before: {
              opacity: 0.8,
            },
          },
        }),

        // 🌊 ENHANCED GRADIENT SECTION FOR BOTH THEMES
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
              ? 'radial-gradient(circle at 30% 60%, rgba(31, 58, 138, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 70% 40%, rgba(124, 181, 24, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
          _after: {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: props.colorMode === 'dark'
              ? 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(31, 58, 138, 0.05) 120deg, transparent 240deg)'
              : 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(124, 181, 24, 0.03) 120deg, transparent 240deg)',
            animation: 'aurora 25s linear infinite',
            pointerEvents: 'none',
          },
        }),

        // 🌌 ENHANCED NAVY SECTION
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
              ? `radial-gradient(circle at 25% 75%, rgba(31, 58, 138, 0.15) 0%, transparent 30%),
                 radial-gradient(circle at 75% 25%, rgba(124, 181, 24, 0.1) 0%, transparent 30%)`
                            : 'radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 25%)',
            pointerEvents: 'none',
          },
        }),
      }
    },

    // ✨ ENHANCED HEADING FOR BOTH THEMES
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
            ? '0 0 25px rgba(31, 58, 138, 0.5), 0 0 50px rgba(75, 85, 99, 0.3)'
            : '0 2px 8px rgba(124, 181, 24, 0.2)',
          transition: 'text-shadow 0.3s ease-in-out',
          _hover: {
            textShadow: props.colorMode === 'dark'
              ? '0 0 35px rgba(37, 99, 235, 0.7), 0 0 70px rgba(31, 58, 138, 0.4)'
              : '0 4px 12px rgba(124, 181, 24, 0.3)',
          },
        }),
      }
    },

    // ✨ ENHANCED TEXT FOR BOTH THEMES
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
        highlight: (props) => ({
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
          fontWeight: 'medium',
        }),
      }
    },

    // ✨ ENHANCED BUTTONS FOR BOTH THEMES
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
          boxShadow: props.colorMode === 'dark' 
            ? '0 4px 15px rgba(124, 181, 24, 0.3)'
            : '0 4px 15px rgba(124, 181, 24, 0.2)',
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
              : '0 20px 40px rgba(124, 181, 24, 0.3), 0 0 0 1px rgba(124, 181, 24, 0.3)',
            _before: {
              left: '100%',
            },
          },
          _active: {
            transform: 'translateY(-1px) scale(1.01)',
          },
        }),

        // 🌟 ENHANCED GLASS BUTTON FOR BOTH THEMES
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(25px) saturate(180%)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.3)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          boxShadow: props.colorMode === 'dark' 
            ? '0 8px 25px rgba(15, 27, 60, 0.4)'
            : '0 8px 25px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: props.colorMode === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(75, 85, 99, 0.2), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
            transition: 'left 0.6s',
          },
          _hover: {
            bg: props.colorMode === 'dark' ? 'rgba(31, 58, 138, 0.3)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: props.colorMode === 'dark' ? 'rgba(75, 85, 99, 0.6)' : 'rgba(124, 181, 24, 0.3)',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 15px 35px rgba(15, 27, 60, 0.6), 0 0 0 1px rgba(31, 58, 138, 0.4)'
              : '0 15px 35px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(124, 181, 24, 0.3)',
            _before: {
              left: '100%',
            },
          },
        }),

        // 🔵 ENHANCED OUTLINE FOR BOTH THEMES
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          borderWidth: '2px',
          bg: 'transparent',
          position: 'relative',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: props.colorMode === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(124, 181, 24, 0.1), transparent)',
            transition: 'left 0.6s',
          },
          _hover: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(31, 58, 138, 0.15)' 
              : 'brand.lightGreen',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
            transform: 'translateY(-2px) scale(1.01)',
            boxShadow: props.colorMode === 'dark'
              ? '0 8px 25px rgba(31, 58, 138, 0.3)'
              : '0 8px 25px rgba(124, 181, 24, 0.15)',
            _before: {
              left: '100%',
            },
          },
        }),

        // 🆕 FLOATING BUTTON VARIANT
        floating: (props) => ({
          bg: props.colorMode === 'dark' 
            ? 'linear-gradient(135deg, #0F1B3C 0%, #1E3A8A 100%)'
            : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
          color: props.colorMode === 'dark' ? 'white' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          boxShadow: props.colorMode === 'dark'
            ? '0 10px 25px rgba(15, 27, 60, 0.4)'
            : '0 10px 25px rgba(0, 0, 0, 0.1)',
          animation: 'float 6s ease-in-out infinite',
          _hover: {
            transform: 'translateY(-6px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 20px 40px rgba(15, 27, 60, 0.6)'
              : '0 20px 40px rgba(0, 0, 0, 0.15)',
            animation: 'none',
          },
        }),
      }
    },

    // ✨ ENHANCED INPUT FOR BOTH THEMES
    Input: {
      variants: {
        outline: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.bg.surface' : 'white',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: props.colorMode === 'dark'
              ? '0 4px 15px rgba(15, 27, 60, 0.2)'
              : '0 2px 8px rgba(0, 0, 0, 0.05)',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.400',
            },
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark' 
                ? '0 0 0 1px rgba(31, 58, 138, 0.4), 0 6px 20px rgba(15, 27, 60, 0.3)'
                : '0 0 0 1px rgba(124, 181, 24, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)',
            },
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark'
                ? '0 0 0 1px rgba(96, 165, 250, 0.6), 0 8px 25px rgba(15, 27, 60, 0.4)'
                : '0 0 0 1px rgba(124, 181, 24, 0.6), 0 6px 20px rgba(124, 181, 24, 0.1)',
            },
          },
        }),
        
        glass: (props) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.3)',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            boxShadow: props.colorMode === 'dark'
              ? 'brand.dark.glass.shadow'
              : '0 8px 32px rgba(31, 38, 135, 0.37)',
            _focus: {
              borderColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              boxShadow: props.colorMode === 'dark'
                ? '0 0 0 1px rgba(96, 165, 250, 0.5), 0 12px 35px rgba(15, 27, 60, 0.5)'
                : '0 0 0 1px rgba(124, 181, 24, 0.5), 0 12px 35px rgba(31, 38, 135, 0.5)',
            },
          },
        }),
      },
    },

    // ✨ ENHANCED MODAL FOR BOTH THEMES
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(35px) saturate(180%)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'transparent',
          borderRadius: '24px',
          boxShadow: props.colorMode === 'dark'
            ? '0 50px 100px rgba(15, 27, 60, 0.8), inset 0 1px 0 rgba(75, 85, 99, 0.1)'
            : '0 50px 100px rgba(0, 0, 0, 0.25)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
        },
        overlay: {
          bg: props.colorMode === 'dark' 
            ? 'rgba(5, 11, 26, 0.8)' 
            : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px) saturate(150%)',
        },
      }),
    },

    // ✨ ENHANCED MENU FOR BOTH THEMES
    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          backdropFilter: props.colorMode === 'dark' ? 'blur(25px) saturate(180%)' : 'blur(10px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '20px',
          boxShadow: props.colorMode === 'dark'
            ? '0 25px 50px rgba(15, 27, 60, 0.6), inset 0 1px 0 rgba(75, 85, 99, 0.05)'
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
              ? 'rgba(31, 58, 138, 0.2)' 
              : 'rgba(124, 181, 24, 0.05)',
            color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
            transform: 'translateX(6px)',
            boxShadow: props.colorMode === 'dark' 
              ? 'inset 4px 0 0 rgba(96, 165, 250, 0.5)'
              : 'inset 4px 0 0 rgba(124, 181, 24, 0.5)',
          },
          _focus: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(31, 58, 138, 0.15)' 
              : 'rgba(124, 181, 24, 0.05)',
          },
        },
      }),
    },

    // ✨ ENHANCED BADGE FOR BOTH THEMES
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
          boxShadow: props.colorMode === 'dark'
            ? '0 4px 15px rgba(124, 181, 24, 0.3)'
            : '0 2px 8px rgba(124, 181, 24, 0.2)',
        }),
        glass: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(124, 181, 24, 0.1)',
          backdropFilter: 'blur(15px)',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(124, 181, 24, 0.2)',
          color: props.colorMode === 'dark' ? 'brand.dark.text.accent' : 'brand.parrotGreen',
          borderRadius: '16px',
          px: 4,
          py: 2,
          fontWeight: 'medium',
          fontSize: 'sm',
        }),
        subtle: (props) => ({
          bg: props.colorMode === 'dark' ? 'rgba(31, 58, 138, 0.2)' : 'brand.lightGreen',
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          borderRadius: '12px',
          px: 4,
          py: 2,
          fontWeight: 'medium',
          fontSize: 'sm',
        }),
      }
    },

    // ✨ ENHANCED PROGRESS FOR BOTH THEMES
    Progress: {
      baseStyle: (props) => ({
        filledTrack: {
          bg: props.colorMode === 'dark'
            ? 'brand.dark.gradients.accent'
            : 'linear-gradient(90deg, #7CB518 0%, #6BA414 100%)',
          borderRadius: 'full',
          boxShadow: props.colorMode === 'dark' 
            ? '0 0 15px rgba(96, 165, 250, 0.3)'
            : '0 0 8px rgba(124, 181, 24, 0.2)',
        },
        track: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.surface' : 'gray.200',
          borderRadius: 'full',
        },
      }),
    },

    // ✨ ENHANCED DIVIDER FOR BOTH THEMES
    Divider: {
      baseStyle: (props) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
        opacity: props.colorMode === 'dark' ? 0.8 : 1,
      }),
      variants: {
        gradient: (props) => ({
          background: props.colorMode === 'dark'
            ? 'linear-gradient(90deg, transparent 0%, rgba(31, 58, 138, 0.4) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(124, 181, 24, 0.2) 50%, transparent 100%)',
          height: '2px',
          border: 'none',
          borderRadius: 'full',
        }),
        glow: (props) => ({
          background: props.colorMode === 'dark'
            ? 'brand.dark.gradients.primary'
            : 'linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)',
          height: '2px',
          border: 'none',
                    borderRadius: 'full',
          boxShadow: props.colorMode === 'dark'
            ? '0 0 10px rgba(31, 58, 138, 0.5)'
            : '0 0 8px rgba(59, 130, 246, 0.3)',
        }),
      }
    },

    // ✨ ENHANCED CARD COMPONENT
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
          color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
          borderRadius: '20px',
          backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
          boxShadow: props.colorMode === 'dark' 
            ? '0 20px 40px rgba(15, 27, 60, 0.4), inset 0 1px 0 rgba(75, 85, 99, 0.1)'
            : '0 4px 6px rgba(0, 0, 0, 0.07)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: props.colorMode === 'dark'
              ? '0 25px 50px rgba(15, 27, 60, 0.6), 0 0 0 1px rgba(31, 58, 138, 0.3)'
              : '0 10px 25px rgba(0, 0, 0, 0.15)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
          },
        },
      }),
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
          backdropFilter: props.colorMode === 'dark' ? 'blur(15px) saturate(180%)' : 'none',
          boxShadow: props.colorMode === 'dark'
            ? '0 15px 30px rgba(15, 27, 60, 0.3)'
            : '0 4px 6px rgba(0, 0, 0, 0.07)',
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
              ? 'brand.dark.gradients.glow'
              : 'radial-gradient(circle at center, rgba(124, 181, 24, 0.05) 0%, transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          _hover: {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: props.colorMode === 'dark'
              ? '0 25px 50px rgba(15, 27, 60, 0.5), 0 0 0 1px rgba(31, 58, 138, 0.3)'
              : '0 20px 40px rgba(0, 0, 0, 0.1)',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.borderGlow' : 'brand.parrotGreen',
            _before: {
              opacity: 0.6,
            },
          },
        },
        number: {
          color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
          fontSize: '4xl',
          fontWeight: 'bold',
          textShadow: props.colorMode === 'dark' ? '0 0 20px rgba(96, 165, 250, 0.3)' : 'none',
        },
        label: {
          color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'gray.600',
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
            bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
            boxShadow: props.colorMode === 'dark'
              ? 'brand.dark.glass.shadow'
              : '0 8px 32px rgba(31, 38, 135, 0.37)',
          },
        }),
        subtle: (props) => ({
          container: {
            bg: props.colorMode === 'dark' 
              ? 'rgba(31, 58, 138, 0.15)'
              : 'rgba(124, 181, 24, 0.1)',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' 
              ? 'rgba(31, 58, 138, 0.3)'
              : 'rgba(124, 181, 24, 0.2)',
            borderRadius: '12px',
            color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.navyBlue',
          },
        }),
      }
    },

    // ✨ ENHANCED TAB COMPONENT
    Tabs: {
      variants: {
        line: (props) => ({
          tab: {
            color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.500',
            borderBottomWidth: '2px',
            borderBottomColor: 'transparent',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _selected: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              borderBottomColor: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
            },
            _hover: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'brand.navyBlue',
            },
          },
        }),
        enclosed: (props) => ({
          tab: {
            bg: 'transparent',
            color: props.colorMode === 'dark' ? 'brand.dark.text.muted' : 'gray.500',
            border: '1px solid transparent',
            borderRadius: '12px 12px 0 0',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _selected: {
              bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
              color: props.colorMode === 'dark' ? 'brand.dark.text.blue' : 'brand.parrotGreen',
              borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
              borderBottomColor: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
            },
            _hover: {
              color: props.colorMode === 'dark' ? 'brand.dark.text.secondary' : 'brand.navyBlue',
            },
          },
        }),
      }
    },
  },

  // ✨ ENHANCED LAYER STYLES FOR BOTH THEMES
  layerStyles: {
    glass: (props) => ({
      bg: props.colorMode === 'dark' ? 'brand.dark.glass.bg' : 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark' ? 'brand.dark.glass.border' : 'rgba(255, 255, 255, 0.3)',
      borderRadius: '20px',
    }),
    glassCard: (props) => ({
      bg: props.colorMode === 'dark' ? 'brand.dark.bg.surface' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(35px) saturate(180%)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'rgba(255, 255, 255, 0.2)',
      borderRadius: '24px',
      boxShadow: props.colorMode === 'dark'
        ? 'brand.dark.glass.shadow'
        : '0 8px 32px rgba(0, 0, 0, 0.1)',
    }),
    premium: (props) => ({
      bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
      borderRadius: '20px',
      boxShadow: props.colorMode === 'dark'
        ? '0 20px 40px rgba(15, 27, 60, 0.4), inset 0 1px 0 rgba(75, 85, 99, 0.1)'
        : '0 10px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
    }),
    floating: (props) => ({
      bg: props.colorMode === 'dark' ? 'brand.dark.bg.card' : 'white',
      borderRadius: '16px',
      boxShadow: props.colorMode === 'dark'
        ? '0 15px 35px rgba(15, 27, 60, 0.4)'
        : '0 10px 25px rgba(0, 0, 0, 0.1)',
      border: '1px solid',
      borderColor: props.colorMode === 'dark' ? 'brand.dark.border' : 'gray.200',
      animation: 'float 6s ease-in-out infinite',
    }),
  },

  // ✨ ENHANCED TEXT STYLES FOR BOTH THEMES
  textStyles: {
    gradient: (props) => ({
      background: props.colorMode === 'dark' 
        ? 'brand.dark.gradients.accent'
        : 'linear-gradient(135deg, #7CB518 0%, #001F54 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
    }),
    blueGradient: (props) => ({
      background: props.colorMode === 'dark'
        ? 'brand.dark.gradients.primary'
        : 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
    }),
    glow: (props) => ({
      textShadow: props.colorMode === 'dark'
        ? '0 0 25px rgba(31, 58, 138, 0.6), 0 0 50px rgba(75, 85, 99, 0.4)'
        : '0 0 15px rgba(124, 181, 24, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)',
    }),
    premium: (props) => ({
      color: props.colorMode === 'dark' ? 'brand.dark.text.primary' : 'brand.navyBlue',
      fontWeight: '600',
      letterSpacing: '0.025em',
      textShadow: props.colorMode === 'dark'
        ? '0 1px 2px rgba(0, 0, 0, 0.5)'
        : '0 1px 2px rgba(0, 0, 0, 0.1)',
    }),
  },
});

export default theme;
          
