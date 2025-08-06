import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Spinner,
  Center,
  Button,
  Select,
  Badge,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaFilter, FaSort, FaMapMarkerAlt } from 'react-icons/fa';
import PropertyCard from '../components/properties/PropertyCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [filterBy, setFilterBy] = useState('all');

  const city = searchParams.get('city');
  const propertyType = searchParams.get('type');
  const guests = searchParams.get('guests');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');

  // Dynamic colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'brand.dark.cardBg');
  const textColor = useColorModeValue('brand.navyBlue', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');

  // Mock properties data - replace with actual API call
  const mockProperties = [
    {
      id: 1,
      name: 'Sunny Student Studios',
      city: 'London',
      country: 'UK',
      price: '£850/month',
      image: '/assets/sunny-studios.jpg',
      rating: 4.8,
      amenities: ['WiFi', 'Gym', 'Study Room'],
      propertyType: 'Student Accommodation',
    },
    {
      id: 2,
      name: 'Campus View Apartments',
      city: 'Dublin',
      country: 'Ireland',
      price: '€750/month',
      image: '/assets/campus-view.png',
      rating: 4.9,
      amenities: ['Pool', 'WiFi', 'Security'],
      propertyType: 'Shared Apartment',
    },
    {
      id: 3,
      name: 'Metro Student Living',
      city: 'Sydney',
      country: 'Australia',
      price: 'A$1200/month',
      image: '/assets/metro-living.png',
      rating: 4.7,
      amenities: ['Gym', 'Lounge', 'Kitchen'],
      propertyType: 'Studio',
    },
    {
      id: 4,
      name: 'University Heights',
      city: 'Manchester',
      country: 'UK',
      price: '£650/month',
      image: '/assets/university-heights.jpg',
      rating: 4.6,
      amenities: ['WiFi', 'Laundry', 'Common Room'],
      propertyType: 'Private Room',
    },
    {
      id: 5,
      name: 'Downtown Student Hub',
      city: 'Toronto',
      country: 'Canada',
      price: 'C$900/month',
      image: '/assets/downtown-hub.jpg',
      rating: 4.5,
      amenities: ['WiFi', 'Study Area', 'Gym'],
      propertyType: 'Entire Place',
    },
  ];

  useEffect(() => {
    fetchProperties();
  }, [city, propertyType, sortBy, filterBy]);

  const fetchProperties = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Filter properties based on search criteria
    let filtered = mockProperties;
    
    if (city) {
      filtered = filtered.filter(property => 
        property.city.toLowerCase().includes(city.toLowerCase())
      );
    }
    
    if (propertyType && propertyType !== 'all') {
      filtered = filtered.filter(property => 
        property.propertyType === propertyType
      );
    }

    // Sort properties
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setProperties(filtered);
    setLoading(false);
  };

  if (loading) {
    return (
      <Box minH="60vh" bg={bgColor}>
        <Container maxW="container.xl" py={12}>
          <Center>
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.parrotGreen" thickness="4px" />
              <Text color={textColor}>Searching for properties...</Text>
            </VStack>
          </Center>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Search Summary */}
          <Box bg={cardBg} p={6} borderRadius="xl" boxShadow="md">
            <VStack align="start" spacing={4}>
              <Heading size="lg" color={textColor}>
                Search Results
              </Heading>
              
              <HStack spacing={4} flexWrap="wrap">
                {city && (
                  <Badge colorScheme="green" variant="subtle" p={2} borderRadius="md">
                    <HStack spacing={1}>
                      <Icon as={FaMapMarkerAlt} />
                      <Text>{city}</Text>
                    </HStack>
                  </Badge>
                )}
                {propertyType && (
                  <Badge colorScheme="blue" variant="subtle" p={2} borderRadius="md">
                    {propertyType}
                  </Badge>
                )}
                {guests && (
                  <Badge colorScheme="purple" variant="subtle" p={2} borderRadius="md">
                    {guests} {guests === '1' ? 'Guest' : 'Guests'}
                  </Badge>
                )}
                {checkIn && (
                  <Badge colorScheme="orange" variant="subtle" p={2} borderRadius="md">
                    From: {new Date(checkIn).toLocaleDateString()}
                  </Badge>
                )}
              </HStack>

              <Text color={subtextColor}>
                Found {properties.length} properties matching your criteria
              </Text>
            </VStack>
          </Box>

          {/* Filters and Sorting */}
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <HStack spacing={4}>
              <HStack>
                <Icon as={FaFilter} color={textColor} />
                <Text fontSize="sm" color={textColor}>Filter:</Text>
                <Select
                  size="sm"
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  maxW="200px"
                  bg={cardBg}
                >
                  <option value="all">All Properties</option>
                  <option value="available">Available Now</option>
                  <option value="featured">Featured Only</option>
                  <option value="verified">Verified Only</option>
                </Select>
              </HStack>

              <HStack>
                <Icon as={FaSort} color={textColor} />
                <Text fontSize="sm" color={textColor}>Sort by:</Text>
                <Select
                  size="sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  maxW="200px"
                  bg={cardBg}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </Select>
              </HStack>
            </HStack>

            <Button variant="outline" size="sm" leftIcon={<FaFilter />}>
              More Filters
            </Button>
          </Flex>

          {/* Results Grid */}
          {properties.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </SimpleGrid>
          ) : (
            <Center py={20}>
              <VStack spacing={4}>
                <Text fontSize="xl" color={textColor}>
                  No properties found
                </Text>
                <Text color={subtextColor} textAlign="center">
                  Try adjusting your search criteria or explore other locations
                </Text>
                <Button variant="primary" onClick={() => window.history.back()}>
                  Go Back
                </Button>
              </VStack>
            </Center>
          )}

          {/* Load More Button */}
          {properties.length > 0 && (
            <Center pt={8}>
              <Button variant="outline" size="lg">
                Load More Properties
              </Button>
            </Center>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default SearchResults;
