import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
  Button,
  Badge,
  useColorModeValue,
  Divider,
  Icon,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaEye, FaDownload, FaClock } from 'react-icons/fa';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ALL HOOKS AT TOP LEVEL - BEFORE ANY CONDITIONAL LOGIC
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'brand.dark.borderColor');
  const priceColor = useColorModeValue('brand.parrotGreen', 'brand.dark.parrotGreen');

  // Mock bookings data
  const mockBookings = [
    {
      id: 1,
      property: {
        name: 'Sunny Student Studios',
        location: 'London, UK',
        image: '/assets/sunny-studios.jpg',
      },
      checkIn: '2024-02-15',
      checkOut: '2024-06-15',
      status: 'confirmed',
      amount: '£3400',
      bookingDate: '2024-01-10',
      roomType: 'Single Room',
    },
    {
      id: 2,
      property: {
        name: 'Campus View Apartments',
        location: 'Dublin, Ireland',
        image: '/assets/campus-view.png',
      },
      checkIn: '2024-09-01',
      checkOut: '2024-12-15',
      status: 'pending',
      amount: '€2250',
      bookingDate: '2024-01-08',
      roomType: 'Shared Room',
    },
  ];

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'green';
      case 'pending':
        return 'yellow';
      case 'cancelled':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending Approval';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return (
      <Box minH="60vh" bg={bgColor}>
        <Container maxW="container.xl" py={12}>
          <Center>
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.parrotGreen" thickness="4px" />
              <Text color={textColor}>Loading your bookings...</Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color={textColor}>
              My Bookings 📅
            </Heading>
            <Text fontSize="lg" color={subtextColor}>
              Track and manage your accommodation bookings
            </Text>
          </VStack>

          {/* Bookings List */}
          {bookings.length > 0 ? (
            <VStack spacing={6} w="full">
              {bookings.map((booking) => (
                <Box
                  key={booking.id}
                  bg={cardBg}
                  p={6}
                  borderRadius="xl"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor={borderColor}
                  w="full"
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
                  transition="all 0.3s ease-in-out"
                >
                  <HStack spacing={6} align="start">
                    {/* Property Image */}
                    <Image
                      src={booking.property.image}
                      alt={booking.property.name}
                      boxSize="120px"
                      objectFit="cover"
                      borderRadius="md"
                      display={{ base: 'none', md: 'block' }}
                    />

                    {/* Booking Details */}
                    <VStack align="start" spacing={4} flex={1}>
                      <HStack justify="space-between" w="full">
                        <VStack align="start" spacing={1}>
                          <Heading size="md" color={textColor}>
                            {booking.property.name}
                          </Heading>
                          <HStack color={subtextColor}>
                            <Icon as={FaMapMarkerAlt} />
                            <Text fontSize="sm">{booking.property.location}</Text>
                          </HStack>
                        </VStack>
                        
                        <Badge
                          colorScheme={getStatusColor(booking.status)}
                          variant="solid"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {getStatusText(booking.status)}
                        </Badge>
                      </HStack>

                      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
                        <VStack align="start" spacing={1}>
                          <Text fontSize="xs" color={subtextColor} fontWeight="medium">
                            CHECK-IN
                          </Text>
                          <Text fontSize="sm" fontWeight="bold" color={textColor}>
                            {new Date(booking.checkIn).toLocaleDateString()}
                          </Text>
                        </VStack>

                        <VStack align="start" spacing={1}>
                          <Text fontSize="xs" color={subtextColor} fontWeight="medium">
                            CHECK-OUT
                          </Text>
                          <Text fontSize="sm" fontWeight="bold" color={textColor}>
                            {new Date(booking.checkOut).toLocaleDateString()}
                          </Text>
                        </VStack>

                        <VStack align="start" spacing={1}>
                          <Text fontSize="xs" color={subtextColor} fontWeight="medium">
                            ROOM TYPE
                          </Text>
                          <Text fontSize="sm" fontWeight="bold" color={textColor}>
                            {booking.roomType}
                          </Text>
                        </VStack>

                        <VStack align="start" spacing={1}>
                          <Text fontSize="xs" color={subtextColor} fontWeight="medium">
                            TOTAL AMOUNT
                          </Text>
                          <Text fontSize="sm" fontWeight="bold" color={priceColor}>
                            {booking.amount}
                          </Text>
                        </VStack>
                      </SimpleGrid>

                      <Divider />

                      <HStack justify="space-between" w="full">
                        <HStack color={subtextColor}>
                          <Icon as={FaClock} />
                          <Text fontSize="sm">
                            Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                          </Text>
                        </HStack>

                        <HStack spacing={3}>
                          <Button
                            size="sm"
                            variant="outline"
                            leftIcon={<FaEye />}
                          >
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            leftIcon={<FaDownload />}
                          >
                            Download Receipt
                          </Button>
                        </HStack>
                      </HStack>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          ) : (
            <Center py={20}>
              <VStack spacing={4}>
                <Icon as={FaCalendarAlt} boxSize="50px" color={subtextColor} />
                <Heading size="md" color={textColor}>
                  No Bookings Yet
                </Heading>
                <Text color={subtextColor} textAlign="center">
                  You haven't made any bookings yet. Start exploring properties to make your first booking!
                </Text>
                <Button variant="primary" size="lg">
                  Explore Properties
                </Button>
              </VStack>
            </Center>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Bookings;
