import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch, FaHeart, FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const steps = [
  {
    icon: FaSearch,
    emoji: '🔍',
    title: 'Search & Explore',
    description: 'Browse through verified student accommodations in your desired city',
  },
  {
    icon: FaHeart,
    emoji: '❤',
    title: 'Shortlist & Compare',
    description: 'Save your favorites and compare amenities, prices, and locations',
  },
  {
    icon: FaKey,
    emoji: '🔑',
    title: 'Book & Move In',
    description: 'Secure your booking online and get ready to move into your new home',
  },
];

const HowItWorks = () => {
  // 👈 Dark mode support - keeps gray.50 in light, dark background in dark
  const bgColor = useColorModeValue('gray.50', 'brand.dark.bg.primary');
  const cardBg = useColorModeValue('white', 'brand.dark.bg.card');
  const headingColor = useColorModeValue('brand.navyBlue', 'white');
  const textColor = useColorModeValue('gray.600', 'brand.dark.text.secondary');
  const titleColor = useColorModeValue('brand.navyBlue', 'white');
  const stepBg = useColorModeValue('brand.lightGreen', 'rgba(124, 181, 24, 0.2)');

  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={headingColor}>
              How It Works
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="2xl">
              Finding your perfect student home is as easy as 1-2-3! 🎯
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            {steps.map((step, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  boxShadow={useColorModeValue('lg', 'dark-lg')}
                  border="1px solid"
                  borderColor={useColorModeValue('transparent', 'brand.dark.border')}
                  spacing={4}
                  h="full"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: useColorModeValue('xl', '2xl'),
                  }}
                >
                  <Box
                    bg={stepBg}
                    p={4}
                    borderRadius="full"
                    fontSize="3xl"
                  >
                    {step.emoji}
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold" color={titleColor}>
                    Step {index + 1}
                  </Text>
                  <Text fontSize="xl" fontWeight="semibold" color={titleColor}>
                    {step.title}
                  </Text>
                  <Text color={textColor} textAlign="center">
                    {step.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
