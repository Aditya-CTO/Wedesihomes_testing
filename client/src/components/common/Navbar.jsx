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
  Switch,
  FormLabel,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
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
  const { user, logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={100}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack spacing={8} alignItems="center">
              <Link to="/">
                <Image src="/logo.png" alt="WEDESIHOMES" h="40px" />
              </Link>

              <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    px={2}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: 'none',
                      bg: 'brand.lightGreen',
                      color: 'brand.parrotGreen',
                    }}
                    fontWeight="medium"
                  >
                    {link.name}
                  </ChakraLink>
                ))}
              </HStack>
            </HStack>

            <Flex alignItems="center">
              <HStack spacing={4}>
                {/* Dark Mode Toggle */}
                <HStack>
                  <SunIcon />
                  <Switch
                    isChecked={colorMode === 'dark'}
                    onChange={toggleColorMode}
                    colorScheme="green"
                  />
                  <MoonIcon />
                </HStack>

                {user ? (
                  // User is logged in - show profile menu
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                      <HStack>
                        <Avatar size="sm" name={user.name || user.email} />
                        <Text display={{ base: 'none', md: 'block' }}>
                          {user.name || 'Profile'}
                        </Text>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem as={Link} to="/profile">
                        My Profile
                      </MenuItem>
                      <MenuItem as={Link} to="/bookings">
                        My Bookings
                      </MenuItem>
                      <MenuItem as={Link} to="/settings">
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleLogout} color="red.500">
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  // User is not logged in - show login/signup buttons
                  <>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('login')}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('signup')}
                    >
                      Sign Up ✨
                    </Button>
                  </>
                )}
              </HStack>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {Links.map((link) => (
                  <ChakraLink
                    key={link.name}
                    as={Link}
                    to={link.path}
                    onClick={onClose}
                  >
                    {link.name}
                  </ChakraLink>
                ))}
                
                {/* Mobile Auth Section */}
                {user ? (
                  <Stack spacing={2} pt={4} borderTop="1px" borderColor="gray.200">
                    <Text fontWeight="bold">Welcome, {user.name || user.email}!</Text>
                    <ChakraLink as={Link} to="/profile" onClick={onClose}>
                      My Profile
                    </ChakraLink>
                    <ChakraLink as={Link} to="/bookings" onClick={onClose}>
                      My Bookings
                    </ChakraLink>
                    <ChakraLink as={Link} to="/settings" onClick={onClose}>
                      Settings
                    </ChakraLink>
                    <Button variant="ghost" onClick={handleLogout} color="red.500">
                      Logout
                    </Button>
                  </Stack>
                ) : (
                  <Stack spacing={2} pt={4} borderTop="1px" borderColor="gray.200">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('login')}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAuthClick('signup')}
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
