import React, { useState } from 'react';
import {
  Box,
  Container,
  Input,
  Button,
  HStack,
  VStack,
  Text,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();

  // 👈 Dark mode support for search container
  const searchBg = useColorModeValue('white', 'brand.dark.bg.card');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const inputBg = useColorModeValue('white', 'brand.dark.bg.secondary');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');
  const borderColor = useColorModeValue('gray.200', 'brand.dark.border');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/explore-cities?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <MotionBox
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg={searchBg}
        boxShadow={useColorModeValue('xl', 'dark-lg')}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="full"
        mx="auto"
        maxW="container.md"
        mt="-10"
        position="relative"
        zIndex={10}
        p={{ base: 4, md: 6 }}
      >
        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>
            🔍 Search your dream accommodation
          </Text>
          <HStack
            spacing={4}
            width="full"
            direction={{ base: 'column', md: 'row' }}
          >
            <InputGroup flex={1}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color={placeholderColor} />
              </InputLeftElement>
              <Input
                placeholder="Enter city or university name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="lg"
                borderRadius="full"
                bg={inputBg}
                borderColor={borderColor}
                color={textColor}
                focusBorderColor="brand.parrotGreen"
                _hover={{ borderColor: 'brand.parrotGreen' }}
                _placeholder={{ color: placeholderColor }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </InputGroup>
            <Button
              variant="primary"
              size="lg"
              px={8}
              width={{ base: 'full', md: 'auto' }}
              onClick={handleSearch}
            >
              Search Now
            </Button>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default SearchBar;
