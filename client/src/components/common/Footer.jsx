import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Image,
  IconButton,
  HStack,
  VStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  // 👈 Dark mode support - keeps navy in light, dark in dark mode
  const footerBg = useColorModeValue('brand.navyBlue', 'brand.dark.bg.navy');
  const textColor = useColorModeValue('white', 'white'); // Keep white in both modes
  const mutedTextColor = useColorModeValue('gray.300', 'gray.400');
  const dividerColor = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200');

  return (
    <Box bg={footerBg} color={textColor} py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Company Info */}
          <VStack align="start" spacing={4}>
            <Image 
              src="/assets/icon (3).png" 
              alt="WEDESIHOMES" 
              h="40px" 
              filter="brightness(0) invert(1)" 
            />
            <Text fontSize="sm" color={mutedTextColor}>
              Making student accommodation search simple, safe, and affordable worldwide.
            </Text>
            <HStack spacing={3}>
              <IconButton
                icon={<FaFacebook />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="Facebook"
                _hover={{ color: 'brand.parrotGreen' }}
              />
              <IconButton
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="Twitter"
                _hover={{ color: 'brand.parrotGreen' }}
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/wedesihomes/"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaInstagram />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="Instagram"
                _hover={{ color: 'brand.parrotGreen' }}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/wedesi-homes-1aa23a371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaLinkedin />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="LinkedIn"
                _hover={{ color: 'brand.parrotGreen' }}
              />
              <IconButton
                icon={<FaYoutube />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="YouTube"
                _hover={{ color: 'brand.parrotGreen' }}
              />
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              Quick Links
            </Text>
            <Link as={RouterLink} to="/explore-cities" fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Explore Cities
            </Link>
            <Link as={RouterLink} to="/how-it-works" fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              How It Works
            </Link>
            <Link as={RouterLink} to="/for-property-owners" fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              List Property
            </Link>
            <Link as={RouterLink} to="/blog" fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Blog
            </Link>
          </VStack>

          {/* Popular Cities */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              Popular Cities
            </Text>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              London
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Auckland
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Sydney
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Dublin
            </Link>
          </VStack>

          {/* Support */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
              Support
            </Text>
            <Link as={RouterLink} to="/contact" fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Contact Us
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              FAQs
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Privacy Policy
            </Link>
            <Link fontSize="sm" color={mutedTextColor} _hover={{ color: 'brand.parrotGreen' }}>
              Terms of Service
            </Link>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor={dividerColor} />

        <Text textAlign="center" fontSize="sm" color={mutedTextColor}>
          © 2025 WEDESI HOMES. All rights reserved. Made with ❤ for students worldwide.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
