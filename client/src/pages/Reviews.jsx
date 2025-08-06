import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Avatar,
  Badge,
  Icon,
  Button,
  Spinner,
  Center,
  useColorModeValue,
  Flex,
  Progress,
} from '@chakra-ui/react';
import { FaStar, FaQuoteLeft, FaThumbsUp, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});

  // Dynamic colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=7CB518&color=fff',
      rating: 5,
      date: '2024-01-15',
      property: 'Sunny Student Studios, London',
      review: 'Amazing experience! The accommodation was exactly as described. Clean, modern facilities and excellent location near the university. The staff was incredibly helpful throughout my stay.',
      verified: true,
      helpful: 24,
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      avatar: 'https://ui-avatars.com/api/?name=Mohammed+Ali&background=001F54&color=fff',
      rating: 4,
      date: '2024-01-10',
      property: 'Campus View Apartments, Dublin',
      review: 'Great value for money. The room was spacious and well-furnished. Only minor issue was the WiFi speed, but overall a good experience. Would definitely recommend to other students.',
      verified: true,
      helpful: 18,
    },
    {
      id: 3,
      name: 'Emily Chen',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=7CB518&color=fff',
      rating: 5,
      date: '2024-01-08',
      property: 'Metro Student Living, Sydney',
      review: 'Exceptional service from WEDESIHOMES! They helped me find the perfect accommodation in Sydney. The booking process was smooth and the property exceeded my expectations.',
      verified: true,
      helpful: 31,
    },
    {
      id: 4,
      name: 'James Wilson',
      avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=001F54&color=fff',
      rating: 4,
      date: '2024-01-05',
      property: 'University Heights, Manchester',
      review: 'Good accommodation with all necessary amenities. The location is perfect for students. The common areas are well-maintained and there are great study spaces.',
      verified: false,
      helpful: 12,
    },
    {
      id: 5,
      name: 'Priya Sharma',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=7CB518&color=fff',
      rating: 5,
      date: '2024-01-03',
      property: 'Downtown Student Hub, Toronto',
      review: 'Outstanding experience! WEDESIHOMES made my international move so much easier. The property was beautiful and the location was perfect for getting to university.',
      verified: true,
      helpful: 27,
    },
    {
      id: 6,
      name: 'Alex Rodriguez',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Rodriguez&background=001F54&color=fff',
      rating: 4,
      date: '2023-12-28',
      property: 'City Central Residence, Edinburgh',
      review: 'Solid choice for student accommodation. Clean facilities, good security, and helpful staff. The only downside was limited parking, but public transport is excellent.',
      verified: true,
      helpful: 15,
    },
  ];

  const mockStats = {
    totalReviews: 1247,
    averageRating: 4.6,
    ratingDistribution: {
      5: 68,
      4: 22,
      3: 7,
      2: 2,
      1: 1,
    },
  };

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setReviews(mockReviews);
      setStats(mockStats);
      setLoading(false);
    }, 1500);
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Icon
        key={index}
        as={FaStar}
        color={index < rating ? 'yellow.400' : 'gray.300'}
        boxSize="16px"
      />
    ));
  };

  if (loading) {
    return (
      <Box minH="60vh" bg={bgColor}>
        <Container maxW="container.xl" py={12}>
          <Center>
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.parrotGreen" thickness="4px" />
              <Text color={textColor}>Loading reviews...</Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={textColor}>
              Student Reviews 📝
            </Heading>
            <Text fontSize="xl" color={subtextColor} maxW="3xl">
              Real experiences from students worldwide. See what our community has to say about their accommodation journey.
            </Text>
          </VStack>

          {/* Stats Section */}
          <Box bg={cardBg} p={8} borderRadius="2xl" boxShadow="lg" w="full" maxW="4xl">
            <VStack spacing={6}>
              <VStack spacing={2}>
                <Text fontSize="4xl" fontWeight="bold" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')}>
                  {stats.averageRating}
                </Text>
                <HStack>
                  {renderStars(Math.round(stats.averageRating))}
                </HStack>
                <Text color={subtextColor}>
                  Based on {stats.totalReviews.toLocaleString()} reviews
                </Text>
              </VStack>

              <VStack spacing={3} w="full">
                {[5, 4, 3, 2, 1].map(star => (
                  <HStack key={star} w="full" spacing={4}>
                    <Text fontSize="sm" minW="60px" color={textColor}>
                      {star} stars
                    </Text>
                    <Progress
                      value={stats.ratingDistribution[star]}
                      size="md"
                      colorScheme="green"
                      flex={1}
                      borderRadius="full"
                    />
                    <Text fontSize="sm" minW="40px" color={subtextColor}>
                      {stats.ratingDistribution[star]}%
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>

          {/* Reviews Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {reviews.map((review, index) => (
              <MotionBox
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                  _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
                  transition="all 0.3s ease-in-out"
                  border="1px solid"
                  borderColor={useColorModeValue('transparent', 'brand.dark.borderColor')}
                  h="full"
                >
                  <VStack spacing={4} align="stretch" h="full">
                    {/* Header */}
                    <HStack justify="space-between">
                      <HStack>
                        <Avatar size="sm" src={review.avatar} name={review.name} />
                        <VStack align="start" spacing={0}>
                          <HStack>
                            <Text fontWeight="bold" fontSize="sm" color={textColor}>
                              {review.name}
                            </Text>
                            {review.verified && (
                              <Badge colorScheme="green" variant="subtle" size="sm">
                                Verified
                              </Badge>
                            )}
                          </HStack>
                          <Text fontSize="xs" color={subtextColor}>
                            {new Date(review.date).toLocaleDateString()}
                          </Text>
                        </VStack>
                      </HStack>
                      <HStack>
                        {renderStars(review.rating)}
                      </HStack>
                    </HStack>

                    {/* Property */}
                    <Text fontSize="sm" color={useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen')} fontWeight="medium">
                      {review.property}
                    </Text>

                    {/* Review Content */}
                    <Box flex={1}>
                      <Icon as={FaQuoteLeft} color="gray.400" mb={2} />
                      <Text fontSize="sm" color={textColor} lineHeight="tall">
                        {review.review}
                      </Text>
                    </Box>

                    {/* Footer */}
                    <HStack justify="space-between" pt={2}
