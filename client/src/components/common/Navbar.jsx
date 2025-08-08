import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
  Container,
  Link as ChakraLink,
  Avatar,
  Text,
  useColorMode,
  useColorModeValue,
  MenuDivider,
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon, 
  ChevronDownIcon, 
  MoonIcon, 
  SunIcon,
  SettingsIcon,
  CalendarIcon
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../auth/AuthModal';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Explore Cities', path: '/explore-cities' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'For Property Owners', path: '/for-property-owners' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const { user, logout, loading } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  
  // ✅ MOVE ALL HOOKS TO TOP - BEFORE ANY CONDITIONAL RETURNS
  //const navBg = useColorModeValue(
    //'rgba(255, 255, 255, 0.95)', 
    //'rgba(26, 26, 46, 0.95)'
  //);

  //'brand.navyBlue'
  const navBg = useColorModeValue('white', 'brand.dark.bg.navy');
  
  const borderColor = useColorModeValue('gray.100', 'brand.dark.borderColor');
  const linkHoverBg = useColorModeValue('brand.lightGreen', 'brand.dark.lightGreen');
  const linkHoverColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const menuBg = useColorModeValue('white', 'brand.dark.cardBg');
  const menuBorderColor = useColorModeValue('gray.200', 'brand.dark.borderColor');
  const hoverBg = useColorModeValue('gray.100', 'brand.dark.hoverBg');
  const toggleColor = useColorModeValue('gray.600', 'yellow.400');
  const toggleHoverColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const profileBorderColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const menuItemHoverBg = useColorModeValue('gray.50', 'brand.dark.hoverBg');
  const menuItemHoverColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const logoutHoverBg = useColorModeValue('red.50', 'red.900');
  const mobileHoverColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');
  const mobileBorderColor = useColorModeValue('gray.100', 'gray.700');

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

  // ✅ NOW CONDITIONAL RETURN IS SAFE - ALL HOOKS CALLED ABOVE
  if (loading) {
    return (
      <Box 
        bg={navBg}
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={borderColor}
        px={4} 
        position="sticky" 
        top={0} 
        zIndex={100}
        h="64px"
      />
    );
  }

  return (
    <>
      <Box 
        bg={navBg}
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={borderColor}
        px={4} 
        position="sticky" 
        top={0} 
        zIndex={100}
        transition="all 0.3s ease-in-out"
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              _hover={{ bg: hoverBg }}
            />

            <HStack spacing={8} alignItems="center">
              <Link to="/">
                <Image 
                  src="/logo.png" 
                  alt="WEDESIHOMES" 
                  h="40px"
                  filter={colorMode === 'dark' ? 'brightness(1.2) contrast(1.1)' : 'none'}
                  transition="filter 0.3s ease-in-out"
                />
              </Link>

              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    px={3}
                    py={2}
                    rounded="lg"
                    fontSize="sm"
                    fontWeight="medium"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      textDecoration: 'none',
                      bg: linkHoverBg,
                      color: linkHoverColor,
                      transform: 'translateY(-1px)',
                    }}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </HStack>
            </HStack>

            <Flex alignItems="center">
              <HStack spacing={4}>
                {/* Dark Mode Toggle */}
                <IconButton
                  aria-label="Toggle dark mode"
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                  variant="ghost"
                  size="md"
                  fontSize="18px"
                  transition="all 0.3s ease-in-out"
                  color={toggleColor}
                  _hover={{
                    transform: 'rotate(180deg) scale(1.1)',
                    bg: hoverBg,
                    color: toggleHoverColor,
                  }}
                />

                {user ? (
                  // User is logged in
                  <Menu>
                    <MenuButton 
                      as={Button} 
                      rightIcon={<ChevronDownIcon />} 
                      variant="ghost"
                      _hover={{ bg: hoverBg }}
                    >
                      <HStack>
                        <Avatar 
                          size="sm" 
                          name={user.name || user.email}
                          src={user.avatar}
                          border="2px solid"
                          borderColor={profileBorderColor}
                        />
                        <Text 
                          display={{ base: 'none', md: 'block' }}
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          {user.name || 'Profile'}
                        </Text>
                      </HStack>
                    </MenuButton>
                    <MenuList
                      border="1px solid"
                      borderColor={menuBorderColor}
                      boxShadow="xl"
                      bg={menuBg}
                    >
                      <Box px={3} py={2}>
                        <Text fontSize="sm" fontWeight="bold">
                          {user.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {user.email}
                        </Text>
                      </Box>
                      <MenuDivider />
                      
                      <MenuItem 
                        as={Link} 
                        to="/profile"
                        icon={<Avatar size="xs" />}
                        _hover={{ 
                          bg: menuItemHoverBg,
                          color: menuItemHoverColor
                        }}
                      >
                        My Profile
                      </MenuItem>
                      
                      <MenuItem 
                        as={Link} 
                        to="/bookings"
                        icon={<CalendarIcon />}
                        _hover={{ 
                          bg: menuItemHoverBg,
                          color: menuItemHoverColor
                        }}
                      >
                        My Bookings
                      </MenuItem>
                      
                      <MenuItem 
                        as={Link} 
                        to="/settings"
                        icon={<SettingsIcon />}
                        _hover={{ 
                          bg: menuItemHoverBg,
                          color: menuItemHoverColor
                        }}
                      >
                        Settings
                      </MenuItem>
                      
                      <MenuDivider />
                      
                      <MenuItem 
                        onClick={handleLogout} 
                        color="red.500"
                        _hover={{ 
                          bg: logoutHoverBg,
                          color: 'red.400'
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  // User is not logged in
                  <HStack spacing={3}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAuthClick('login')}
                      _hover={{
                        bg: hoverBg,
                        transform: 'translateY(-1px)',
                        color: mobileHoverColor,
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('signup')}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: colorMode === 'dark' 
                          ? '0 8px 25px rgba(154, 230, 52, 0.4)'
                          : '0 8px 25px rgba(124, 181, 24, 0.4)',
                      }}
                    >
                      Sign Up ✨
                    </Button>
                  </HStack>
                )}
              </HStack>
            </Flex>
          </Flex>

          {/* Mobile Menu */}
          {isOpen ? (
            <Box 
              pb={4} 
              display={{ md: 'none' }}
              borderTop="1px"
              borderColor={borderColor}
              mt={4}
              pt={4}
            >
              <Stack as="nav" spacing={4}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    onClick={onClose}
                    px={3}
                    py={2}
                    rounded="md"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      bg: linkHoverBg,
                      color: linkHoverColor,
                      transform: 'translateX(4px)',
                    }}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
                
                {/* Mobile Auth Section */}
                {user ? (
                  <Stack spacing={3} pt={4} borderTop="1px" borderColor={mobileBorderColor}>
                    <HStack>
                      <Avatar 
                        size="sm" 
                        name={user.name} 
                        src={user.avatar}
                        border="2px solid"
                        borderColor={profileBorderColor}
                      />
                      <Text fontWeight="bold">{user.name}</Text>
                    </HStack>
                    <ChakraLink 
                      as={Link} 
                      to="/profile" 
                      onClick={onClose}
                      _hover={{ color: mobileHoverColor }}
                    >
                      My Profile
                    </ChakraLink>
                    <ChakraLink 
                      as={Link} 
                      to="/bookings" 
                      onClick={onClose}
                      _hover={{ color: mobileHoverColor }}
                    >
                      My Bookings
                    </ChakraLink>
                    <ChakraLink 
                      as={Link} 
                      to="/settings" 
                      onClick={onClose}
                      _hover={{ color: mobileHoverColor }}
                    >
                      Settings
                    </ChakraLink>
                    <Button 
                      variant="ghost" 
                      onClick={handleLogout} 
                      color="red.500"
                      size="sm"
                      justifyContent="flex-start"
                      _hover={{ bg: logoutHoverBg }}
                    >
                      Logout
                    </Button>
                  </Stack>
                ) : (
                  <Stack spacing={3} pt={4} borderTop="1px" borderColor={mobileBorderColor}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAuthClick('login')}
                      justifyContent="flex-start"
                      _hover={{
                        bg: hoverBg,
                        color: mobileHoverColor,
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('signup')}
                      justifyContent="flex-start"
                    >
                      Sign Up ✨
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
};

export default Navbar;
